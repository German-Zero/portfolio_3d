

const CleanmindCard = () => {
  return (
    <div className='flex gap-[50px] w-full
        desktopXL:justify-start desktopXL:max-w-[1440px]
        desktopL:max-w-[1200px]
        laptop:justify-center laptop:max-w-[900px] laptop:flex-row 
        mobile:flex-col mobile:max-w-none mobile:items-center
    '>
        <div className='rounded-2xl bg-[#ffffff10] text-white font-mono font-bold text-4xl flex justify-center items-center
            desktopHD:w-[764.4px] desktopHD:h-[366.4px]
            desktopXL:w-[466.5px] desktopXL:h-[229px]
            laptop:w-[373.2px] laptop:h-[183.2px]
            tablet:w-3xl tablet:h-[380px]
            mobile:w-full mobile:h-[220px]
        '>No IMG</div>
        <div className='flex flex-col
            laptop:justify-between laptop:gap-3
            mobile:w-full mobile:gap-5
        '>
            <div className='flex flex-col
                desktopXL:gap-5
                laptop:gap-1 laptop:items-start
                mobile:gap-3 mobile:items-center mobile:text-center
            '>
                <h3 className='text-white font-sans text-xl font-semibold tracking-wide
                    desktopHD:text-4xl
                    laptop:text-lg laptop:text-start
                    mobile:text-2xl mobile:text-center
                '>CleanMind</h3>
                <h2 className='text-white font-sans text-lg font-semibold tracking-wide
                    desktopHD:text-4xl
                    laptop:text-lg laptop:text-start
                    mobile:text-2xl mobile:text-center'
                >"Mente Limpia, Conciencia Tranquila"</h2>
                <p className='max-w-[450px] text-white font-heading tracking-wide leading-6
                    desktopHD:text-xl desktopHD:max-w-[750px] desktopHD:tracking-wider desktopHD:leading-7
                    laptop:text-[14px] laptop:text-start laptop:max-w-[450px]
                    mobile:text-lg mobile:max-w-[550px] mobile:text-center
                '>
                    Es una calculadora de estadisticas para los personajes
                    de un juego de "HoYoVerse Studio". <br />
                    Este mini-proyecto esta en stand-by pero se 
                    pensara seguir mas adelante.
                </p>
            </div>
            <div className='w-auto flex gap-3
                desktopHD:gap-5
                laptop:justify-start
                mobile:justify-center 
            '>
                <a href='' target='_blank' 
                    className='w-8 h-8
                    desktopHD:w-14 desktopHD:h-14
                    desktopL:w-8 desktopL:h-8
                    laptop:w-7 laptop:h-7
                '>
                    <img src="/icons/IconGithub.png" alt="icongithub" />
                </a>
                <a href='https://hoyocalculator.vercel.app' target='_blank' 
                    className='w-8 h-8
                    desktopHD:w-14 desktopHD:h-14
                    desktopL:w-8 desktopL:h-8
                    laptop:w-7 laptop:h-7
                '>
                    <img src="/icons/IconLink.png" alt="iconlink" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default CleanmindCard