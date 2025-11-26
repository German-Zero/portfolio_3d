import AboutExperience from '../components/three/AboutModel/AboutExperience'

const AboutMe = () => {
  return (
    <div className='w-screen h-screen bg-transparent flex items-center justify-center'>
      <div className='w-full max-h-[700px] h-full flex flex-col justify-between items-center
        desktopHD:max-w-[75%]
        desktopXL:max-w-[80%]
        desktopL:max-w-[85%]
        laptop:max-w-[90%] laptop:m-0 laptop:max-h-[700px]
        mobile:max-h-[700px] mobile:justify-center mobile:max-w-none
      '>
        <div className='flex m-auto w-full
          laptop:justify-between laptop:max-h-none laptop:h-auto laptop:items-center
          mobile:m-0 mobile:justify-center mobile:items-start mobile:max-h-[800px] mobile:h-full
        '>
          <div className='w-auto max-w-[700px] z-1 flex flex-col gap-14
          desktopHD:max-w-[1300px] desktopHD:tracking-wider
          desktopXL:max-w-[800px]
          desktopL:max-w-[650px] desktopL:tracking-wider desktopL:justify-center
          laptop:max-w-[500px] laptop:max-h-none laptop:gap-14
          tablet:max-w-[600px] tablet:max-h-[700px]
          mobile:max-w-[360px] mobile:gap-8 mobile:absolute mobile:z-[2] mobile:h-full
          '>
              <h2 className='w-full h-auto text-white text-start font-sans text-5xl
                desktopHD:text-7xl
                desktopXL:text-5xl
                desktopL:text-4xl
                laptop:text-start
                tablet:text-3xl
                mobileL:text-2xl
                mobile:text-center mobile:text-xl
              '>Permítame presentarme.</h2>
              <p className='w-full text-white font-heading text-2xl text-start font-medium
                desktopHD:text-4xl desktopHD:tracking-widest desktopHD:leading-12
                desktopXL:text-2xl desktopXL:tracking-widest desktopXL:leading-9
                desktopL:text-xl
                laptop:text-lg laptop:tracking-wide laptop:leading-7 laptop:text-start
                tablet:text-xl
                mobileL:text-[15px] mobileL:px-0
                mobile:text-center mobile:text-[14px] mobile:px-8
              '>
                Soy un desarrollador en formación con foco en backend y frontend, 
                comprometido con el aprendizaje continuo y la resolución sólida de problemas. 
                Busco desafíos que realmente exijan criterio técnico, disciplina 
                y capacidad de adaptación.
                <br /><br />
                No rehúyo el trabajo difícil; al contrario, me interesa involucrarme a 
                fondo en cada proyecto, asumir responsabilidad y superar mis propios límites 
                a través de la práctica, constancia y mejora real.
              </p>
          </div>
          <figure className='absolute flex h-full w-full max-w-[700px] max-h-[700px]
            desktopHD:max-w-[1200px] desktopHD:max-h-[1200px]
            desktopXL:max-w-[900px] desktopXL:max-h-[900px]
            desktopL:max-w-[700px] desktopL:max-h-[700px]
            laptop:max-w-[500px] laptop:max-h-[500px] laptop:right-14 laptop:items-start
            tablet:max-w-[500px] tablet:max-h-[750px] tablet:right-[17%]
            mobile:max-w-none mobile:max-h-[650px] mobile:items-end
          '>
            <AboutExperience />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default AboutMe