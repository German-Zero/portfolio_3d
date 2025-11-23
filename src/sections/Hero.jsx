import HeroExperience from '../components/three/HeroModels/HeroExperience'
import CTAprojects from '../components/ui/CTAProjects/cta.projects'

const Hero = () => {
  return (  
    <div className='w-screen h-screen flex items-center justify-center bg-transparent relative z-[2]'>
      <div className='max-w-[1440px] w-full max-h-[900px] h-full flex gap-12 justify-between items-center'>

        <div className='w-full max-w-[600px] max-h-[400px] h-full flex flex-col gap-10'>
          <div className='flex flex-col gap-5'>
            <div className='w-auto flex flex-col gap-2.5'>
              <h2 className='text-white text-xl font-sans font-light'>Bienvenido a Mi Portfolio</h2>
              <h1 className='text-white text-6xl font-heading font-bold flex gap-5'>
                Developer 
                <span className='animated-gradient'>Trainee</span>
              </h1>
            </div>
            <p className='text-white font-mono text-2xl flex'>
              "Codear es libertad.<br />Ser libre es crear con tus lineas".
              <br />
              - German
            </p>
          </div>

          <CTAprojects />
        </div>

        <figure className='absolute w-full max-w-[1000px] h-full max-h-[1000px] right-14 pointer-events-none'>
          <HeroExperience />
        </figure>

      </div>
    </div>
  )
}


export default Hero