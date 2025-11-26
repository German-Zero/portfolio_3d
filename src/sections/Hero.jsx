import HeroExperience from '../components/three/HeroModels/HeroExperience'
import CTAProjects from '../components/ui/CTAProjects/CTAProjects'


const Hero = () => {
  return (  
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='w-full h-full flex
        desktopHD:max-w-[2100px] desktopHD:max-h-[1200px]
        desktopXL:max-w-[1600px] desktopXL:max-h-[900px]
        desktopL:max-w-[1200px] desktopL:max-h-[700px]
        laptop:max-w-[900px] laptop:max-h-[900px] laptop:justify-between laptop:items-center
        tablet:max-w-[700px] tablet:max-h-[850px] tablet:justify-center
        mobile:max-w-[400px] mobile:max-h-[630px] mobile:items-start
      '>
        <div className='absolute w-full h-auto flex flex-col gap-10 z-[1]
          desktopHD:max-w-[820px]
          desktopXL:max-w-[700px]
          desktopL:max-w-[500px]
          laptop:max-w-[395px] laptop:h-auto laptop:text-start laptop:items-start 
          tablet:max-w-[700px] tablet:h-[850px]
          mobile:max-w-[400px] mobile:h-[630px] mobile:items-center mobile:text-center
        '>
          <div className='flex flex-col gap-5'>
            <div className='w-auto flex flex-col'>
              <h2 className='text-white font-sans font-light
                desktopHD:text-3xl
                desktopXL:text-xl
                desktopL:text-sm
                laptop:text-sm laptop:gap-2.5
                tablet:text-lg
                mobileL:text-[12px]
                mobile:text-[12px] mobile:gap-0
              '>Hola, soy Germán, bienvenido a mi portfolio</h2>
              <h1 className='text-white font-heading font-bold flex gap-5
                desktopHD:text-8xl
                desktopXL:text-7xl
                desktopL:text-[54px]
                laptop:text-[45px] laptop:justify-start
                tablet:text-6xl
                mobileL:text-[43px]
                mobile:justify-center mobile:text-4xl
              '>
                Developer
                <span className='animated-gradient'>Trainee</span>
              </h1>
            </div>
            <p className='text-white font-mono flex
              desktopHD:text-[26px] desktopHD:leading-10
              desktopXL:text-[20px] desktopXL:leading-8 desktopXL:tracking-widest
              desktopL:text-[16px] desktopL:leading-6 desktopL:tracking-wider
              laptop:text-[14px] laptop:justify-start
              tablet:text-lg tablet:leading-6
              mobileL:text-[12px] mobileL:leading-[18px]
              mobile:text-[10px] mobile:justify-center mobile:leading-4
            '>
              "Codear es libertad.<br />Ser libre es crear con tus lineas".
              <br />
              - German
            </p>
          </div>

        <CTAProjects />
        </div>
        <figure className='h-full w-full flex
          desktopHD:max-w-[1300px]
          desktopXL:max-w-[900px]
          desktopL:max-w-[700px]
          laptop:max-w-[500px] laptop:max-h-none laptop:items-center laptop:ml-auto
          tablet:max-w-[700px] tablet:max-h-none
          mobile:max-w-[490px] mobile:max-h-[350px] mobile:items-end mobile:mt-auto
        '>
          <HeroExperience />
        </figure>

      </div>
    </div>
  )
}


export default Hero