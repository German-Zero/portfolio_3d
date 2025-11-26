import AboutExperience from '../components/three/AboutModel/AboutExperience'

const AboutMe = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='w-full h-full flex flex-col justify-center
        desktopHD:max-w-[2100px] desktopHD:max-h-[1000px]
        desktopXL:max-w-[1600px] desktopXL:max-h-[800px]
        desktopL:max-w-[1200px] desktopL:max-h-[650px]
        laptop:max-w-[900px] laptop:max-h-[500px] laptop:items-start
        tablet:max-w-[700px] tablet:max-h-[900px] tablet:items-center
        mobile:max-w-[380px] mobile:max-h-[700px] mobile:items-start
      '>
          <div className='absolute w-full flex flex-col gap-8 z-[1]
          desktopHD:max-w-[1150px]
          desktopXL:max-w-[950px]
          desktopL:max-w-[650px]
          laptop:max-w-[500px] laptop:h-auto laptop:items-start laptop:text-start
          tablet:max-w-[575px] tablet:h-[900px]
          mobile:max-w-[380px] mobile:h-[700px] mobile:items-center
          '>
              <h2 className='w-full h-auto text-white font-sans
                desktopHD:text-7xl
                desktopXL:text-6xl
                desktopL:text-[40px]
                laptop:text-4xl laptop:text-start
                tablet:text-5xl
                mobile:text-3xl mobile:text-center
              '>Permítame presentarme.</h2>
              <p className='w-full text-white font-heading font-medium
                desktopHD:text-3xl desktopHD:leading-12
                desktopXL:text-[23px] desktopXL:tracking-widest desktopXL:leading-9
                dekstopL:text-lg desktopL:leading-7 
                laptop:text-sm laptop:tracking-wide laptop:leading-6 laptop:text-start
                tablet:text-lg tablet:leading-8
                mobile:text-[14px] mobile:text-center mobile:tracking-wide mobile:leading-6
              '>
                Soy un desarrollador en formación con foco en fullstack, 
                comprometido con el aprendizaje continuo y la resolución sólida de problemas. 
                Busco desafíos que realmente exijan criterio técnico, disciplina 
                y capacidad de adaptación.
                <br /><br />
                No rehúyo el trabajo difícil; al contrario, me interesa involucrarme a 
                fondo en cada proyecto, asumir responsabilidad y superar mis propios límites 
                a través de la práctica, constancia y mejora real.
              </p>
          </div>
          <figure className='h-full w-full flex
            desktopHD:max-w-[1000px] desktopHD:max-h-[1000px]
            desktopXL:max-w-[800px] desktopXL:max-h-[800px]
            desktopL:max-w-[650px] desktopL:max-h-[650px]
            laptop:max-w-[450px] laptop:max-h-[500px] laptop:ml-auto
            tablet:max-w-[700px] tablet:max-h-none
            mobile:max-w-[380px] mobile:max-h-[350px] mobile:items-end mobile:mt-auto
          '>
            <AboutExperience />
          </figure>

      </div>
    </div>
  )
}

export default AboutMe