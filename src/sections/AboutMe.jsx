import AboutExperience from '../components/three/AboutModel/AboutExperience'

const AboutMe = () => {
  return (
    <div className='w-screen h-screen bg-transparent flex items-center justify-center'>
      <div className='w-full max-h-[700px] h-full flex flex-col justify-between items-center
        desktopHD:max-w-[75%]
        desktopXL:max-w-[80%]
        desktopL:max-w-[85%]
        laptop:max-w-[90%] laptop:m-0 laptop:max-h-[700px]
        mobile:max-h-none mobile:justify-center mobile:max-w-none
      '>
        <div className='flex m-auto w-full
          laptop:m-auto laptop:justify-between laptop:max-h-none laptop:h-auto laptop:items-center
          mobile:m-0 mobile:justify-center mobile:items-start mobile:max-h-[800px] mobile:h-full
        '>
          <div className='w-auto max-w-[700px] z-1 flex flex-col gap-14
          desktopHD:max-w-[1300px] desktopHD:tracking-wider
          desktopXL:max-w-[800px]
          desktopL:max-w-[650px] desktopL:tracking-wider
          laptop:max-w-[500px] laptop:max-h-none laptop:gap-14
          tablet:max-w-[600px] tablet:max-h-[700px]
          mobile:max-w-[360px] mobile:gap-8
          '>
              <h2 className='w-full h-auto text-white text-start font-sans text-5xl
                desktopHD:text-7xl
                desktopXL:text-5xl
                desktopL:text-4xl
                laptop:text-start
                tablet:text-3xl
                mobile:text-center mobile:text-2xl
              '>Permiteme Presentarme.</h2>
              <p className='w-full text-white font-heading text-2xl text-start font-medium
                desktopHD:text-4xl desktopHD:tracking-widest desktopHD:leading-12
                desktopXL:text-2xl desktopXL:tracking-widest desktopXL:leading-9
                desktopL:text-xl
                laptop:text-lg laptop:tracking-wide laptop:leading-7 laptop:text-start
                tablet:text-xl
                mobile:text-center mobile:text-[16px]
              '>
                Soy un desarrollador en formacion con foco en <span className='text-[#40ff00]'>backend y frontend</span>,
                en busca constante de desafios que ponga a prueba mis habilidades y conocimientos.
                <br /><br />
                Estoy predispuesto a tirarme en el barro si fuese necesario con tal de superarme
                a mi mismo y mis propios limites.
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