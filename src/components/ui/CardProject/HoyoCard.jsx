

const HoyoCard = () => {
  return (
    <div className='flex gap-[50px] w-full
        desktopXL:justify-start desktopXL:max-w-[1440px]
        desktopL:max-w-[1200px]
        laptop:justify-center laptop:max-w-[900px] laptop:flex-row
        mobile:flex-col mobile:max-w-none mobile:items-center
    '>
        <img src="/images/HoyoCalculator.png" alt='imgpreview' className='rounded-2xl
            desktopHD:w-[764.4px] desktopHD:h-[366.4px]
            desktopXL:w-[466.5px] desktopXL:h-[229px]
            laptop:w-[373.2px] laptop:h-[183.2px]
            tablet:w-3xl tablet:h-[380px]
        '/>
        <div className='flex flex-col
            laptop:justify-between laptop:gap-3
            mobile:w-full mobile:gap-5 mobile:items-center
        '>
            <div className='flex flex-col
                desktopXL:gap-5
                laptop:gap-1 laptop:items-start
                tablet:w-auto
                mobile:gap-3 mobile:items-center mobile:text-center mobile:w-[400px]
            '>
                <h3 className='text-white font-sans text-xl font-semibold tracking-wide
                    desktopHD:text-4xl
                    laptop:text-lg laptop:text-start
                    tablet:text-2xl
                    mobile:text-lg mobile:text-center mobile:items-center 
                '>Hoyo Calculator Honkai</h3>
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
                <a href='https://github.com/German-Zero/calculator-honkai' target='_blank' 
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

export default HoyoCard