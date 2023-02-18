import React from 'react';
import * as Slider from '@radix-ui/react-slider';

export const PriceCard = ({ initial = 5 }) => {
  const [price, setPrice] = React.useState(initial);
  const data = [
    {
      name: 'All-inclusive',
      price: 8,
      features: [
        'Unlimited recording ​​& editing',
        'Up to 4k video quality',
        'Unlimitted cloud storage',
        '320 kbps audio quality',
        'Unlimitted automatic transcript generation',
        'Unlimitted clips',
        'Listener analytics',
      ],
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-8 justify-center content-center">
      <div className="mx-auto max-w-sm relative self-center space-y-8 bg-primary rounded-xl text-white p-8">
        <h3 className="text-left text-2xl font-medium ">Ca-ti anjagati aveti ?</h3>
        <p className="text-left text-3xl font-extrabold  ">{price}</p>
        <CustomSlider setPrice={setPrice} />
      </div>

      <div className="basis-1/2 mx-auto  rounded-3xl bg-white  shadow-xl ">
        {data.map((tier) => (
          <div key={tier.name} className="px-8 py-6 space-y-4">
            <h3 className="text-center text-3xl font-extrabold">{tier.name}</h3>
            <p className="mt-12">
              <span className="text-3xl font-semibold ">{price * tier.price} Lei</span>
              <span className="ml-2.5 text-2xl font-medium text-gray-500">/luna</span>
              <span className="ml-1 text-xl font-medium text-gray-500">+</span>
              <span className="ml-1 text-2xl font-medium ">900 lei*</span>
            </p>
            <hr className="border-gray-500/35 my-10" />
            <ul className=" space-y-2">
              {tier.features.map((feature) => (
                <li key={feature} className="text-left mx-auto">
                  <p className="text-gray-500">{feature}</p>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="btn btn-primary   w-full h-12 text-lg font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              Afla mai multe
            </a>
            <p>
              <span className="text-gray-500 text-xs text-left">*O data la infintarea firmei</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

function CustomSlider({ price, setPrice }) {
  return (
    <Slider.Root
      className="SliderRoot"
      defaultValue={[{ price }]}
      min={1}
      max={75}
      onValueChange={(value) => setPrice(value)}
    >
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Slider.Thumb className="SliderThumb" />
    </Slider.Root>
  );
}
