import HeroExperience from '../components/three/HeroModels/HeroExperience'
import CTAProjects from '../components/ui/CTAProjects/CTAProjects'


const Hero = () => {
  return (  
    <div className='w-screen h-screen flex items-center justify-center bg-transparent relative'>
      <div className='w-full h-full flex gap-12 justify-between
        desktopHD:max-w-[2100px] desktopHD:max-h-[1200px]
        desktopXL:max-w-[1440px] desktopXL:max-h-[900px] desktopXL:mx-0
        desktopL:max-w-none desktopL:max-h-[700px]
        laptop:max-h-[900px] laptop:max-w-none laptop:mx-16 laptop:items-center
        tablet:flex-nowrap tablet:max-w-3xl tablet:max-h-[850px]
        mobile:max-h-[750px] mobile:max-w-none mobile:items-start
      '>
        <div className='w-full max-h-[700px] h-full flex flex-col gap-10 z-[1]
          desktopHD:max-w-[1000px]
          desktopXL:max-w-3xl
          desktopL:max-w-[500px]
          laptop:h-auto laptop:max-w-[350px] laptop:text-start laptop:items-start 
          tablet:m-0
          mobile:items-center mobile:text-center mobile:mt-6
        '>
          <div className='flex flex-col gap-5'>
            <div className='w-auto flex flex-col gap-2.5'>
              <h2 className='text-white font-sans font-light
                desktopHD:text-3xl
                desktopXL:text-xl
                desktopL:text-lg
                laptop:text-sm
                tablet:text-xl
                mobile:text-[14px]
              '>Bienvenido a Mi Portfolio</h2>
              <h1 className='text-white font-heading font-bold flex gap-5
                desktopHD:text-8xl
                desktopXL:text-6xl
                desktopL:text-5xl
                laptop:text-4xl laptop:justify-start
                tablet:text-5xl
                mobile:justify-center mobile:text-4xl
              '>
                Developer 
                <span className='animated-gradient'>Trainee</span>
              </h1>
            </div>
            <p className='text-white font-mono flex
              desktopHD:text-4xl desktopHD:leading-12 desktopHD:tracking-wider
              desktopL:text-xl
              desktopXL:text-2xl desktopXL:leading-8
              laptop:text-[14px] laptop:justify-start laptop:leading-6
              tablet:text-xl
              mobile:text-sm mobile:justify-center mobile:leading-6
            '>
              "Codear es libertad.<br />Ser libre es crear con tus lineas".
              <br />
              - German
            </p>
          </div>

        <CTAProjects />
        </div>
        <figure className='absolute h-full w-full flex items-center justify-center
          desktopHD:max-w-[1400px] desktopHD:max-h-[1200px] desktopHD:bottom-[8%]
          desktopXL:max-w-[1200px] desktopXL:justify-start
          desktopL:max-w-[900px] desktopL:max-h-[900px] desktopL:right-18
          laptop:right-0 laptop:max-w-[700px] laptop:max-h-[700px]
          tablet:max-h-[600px] tablet:bottom-10
          mobile:max-w-none mobile:max-h-none
        '>
          <HeroExperience />
        </figure>

      </div>
    </div>
  )
}


export default Hero