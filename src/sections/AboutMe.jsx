import AboutExperience from '../components/three/AboutModel/AboutExperience'

const AboutMe = () => {
  return (
    <div className='w-screen h-screen bg-transparent flex items-center justify-center'>
      <div className='max-w-[75%] w-full max-h-[700px] h-full flex flex-col justify-between items-center'>
        <div className='flex items-center m-auto w-full'>
          <div className='w-auto max-w-[700px] z-1 flex flex-col gap-14'>
              <h2 className='w-full h-auto text-white text-start font-sans text-5xl'>Permiteme Presentarme.</h2>
              <p className='w-full text-white font-heading text-2xl text-start font-medium tracking-widest leading-9'>
                Soy un desarrollador en formacion con foco en <span className='text-[#40ff00]'>backend y frontend</span>,
                en busca constante de desafios que ponga a prueba mis habilidades y conocimientos.
                <br /><br />
                Estoy predispuesto a tirarme en el barro si fuese necesario con tal de superarme
                a mi mismo y mis propios limites.
              </p>
          </div>
          <figure className='absolute flex h-full w-full max-w-[700px] max-h-[700px] right-14'>
            <AboutExperience />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default AboutMe