import {Button} from '@/components/Button';
import starsBg from '@/assets/stars.png';

export const Hero = () => {
  return (
    <section className='h-[492px] flex items-center' style=
    {{
      backgroundImage:`url(${starsBg.src})`
    }}>
      <div className="container">
        <h1 className='text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5) text-transparent bg-clip-text text-center'>
          AdPow
        </h1>
        <p className='text-lg text-whie/70 mt-5 text-center'>
        Boost your numbers and profitability with astounding ads and marketing campaigns
        </p>
        <div className='flex justify-center mt-5'>
          <Button>Get in touch</Button>
        </div>
      </div>
    </section>
  );
};
