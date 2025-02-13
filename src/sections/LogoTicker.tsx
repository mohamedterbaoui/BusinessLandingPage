import acmeLogo from '@/assets/logo-acme.png';
import apexLogo from '@/assets/logo-acme.png';
import celestialLogo from '@/assets/logo-celestial.png';
import quntumLogo from '@/assets/logo-quantum.png';
import pulseLogo from '@/assets/logo-pulse.png';
import echoLogo from '@/assets/logo-echo.png';


export const LogoTicker = () => {
  return (
    <section className='py-20 md:py-24'>
      <div className="container">
        <div className='flex items-center gap-5'>
          <div className='flex-1 md:flex-none'>
            <h2 className=''>Trusted by top innovative teams</h2>
          </div>
          <div className='flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
            <div className='flex flex-none gap-14 align-items'>
              {[acmeLogo, pulseLogo, echoLogo,celestialLogo, apexLogo, quntumLogo].map((logo)=>(
                <img src={logo.src} key={logo.src} className='h-6 w-auto'></img>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};
