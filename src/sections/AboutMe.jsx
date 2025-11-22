import React from 'react'

const AboutMe = () => {
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center m-auto'>
        <div className='flex justify-between w-3/4'>
            <div className='w-auto h-auto justify-center flex flex-col gap-14 items-center'>
                <h2 className='w-full max-w-[1200px] h-auto text-white text-start font-sans text-5xl'>Permiteme Presentarme.</h2>
                <p className='w-full max-w-[700px] text-white font-heading text-2xl text-start font-medium tracking-widest leading-9'>
                  Soy un desarrollador en formacion con foco en <span className='text-[#40ff00]'>backend y frontend</span>,
                  en busca constante de desafios que ponga a prueba mis habilidades y conocimientos.
                  <br /><br />
                  Estoy predispuesto a tirarme en el barro si fuese necesario con tal de superarme
                  a mi mismo y mis propios limites.
                </p>
            </div>
            <div className='w-[450px] h-[450px] bg-[#120033] rounded-full'></div>
        </div>
    </div>
  )
}

export default AboutMe