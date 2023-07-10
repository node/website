import { WaveBottom } from '@/components/Wave';
import logos from '@/data/logos/index.json';

export const LogoSection = () => (
  <section className='wave-top wave-bottom'>
    <div className='wave wave-top w-full text-coolGray-900'>
      <svg
        viewBox='0 0 1440 116'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z'
          fill='currentColor'
        />
      </svg>
    </div>
    <div
      className='py-2 md:py-4 bg-coolGray-900'
      style={{
        backgroundImage:
          'url("flex-ui-assets/elements/pattern-dark2.svg")',
        backgroundPosition: 'center',
      }}
    >
      <div className='container px-4 mx-auto'>
        <h3 className='mb-8 text-center font-medium leading-6 text-coolGray-600'>
          {logos.title}
        </h3>
        <div className='flex flex-wrap justify-center -mx-4'>
          {logos.logos.map((logo) => (
            <div
              key={logo.name}
              className='w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0'
            >
              <a href={logo.link} target='_blank' rel='noreferrer'>
                <img className='mx-auto' src={logo.image} alt={logo.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    <WaveBottom />
  </section>
);