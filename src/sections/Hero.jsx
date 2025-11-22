import HeroExperience from '../components/three/HeroModels/HeroExperience'

const Hero = () => {
  return (  
    <div className='w-screen h-screen bg-[#000000] flex items-center justify-center'>
      <div className='max-w-[1440px] w-full max-h-[900px] h-full flex gap-12 justify-between items-center'>
        <div className='w-full max-w-[600px] max-h-[400px] h-full flex flex-col gap-10 z-1'>
          <div className='flex flex-col gap-5'>
            <div className='w-auto flex flex-col gap-2.5'>
              <h2 className='text-white text-xl font-sans font-light'>Bienvenido a Mi Portfolio</h2>
              <h1 className='text-white text-6xl font-heading font-bold flex gap-5'>Developer
                <span className='animated-gradient'>Trainee</span>
              </h1>
            </div>
            <p className='text-white font-mono text-2xl flex'>
              "Codear es libertad.<br />Ser libre es crear con tus lineas".
              <br />
              - German
            </p>
          </div>
          <button className='w-[245px] h-[55px] text-black bg-white font-mono text-lg rounded-lg'>Proyectos!</button>
        </div>
          <figure className='absolute w-full max-w-[1000px] h-full max-h-[1000px] right-14 z-0'>
            <HeroExperience />
          </figure>
      </div>
    </div>
  )
}

export default Hero