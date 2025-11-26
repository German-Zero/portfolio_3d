

const CleanmindCard = () => {
  return (
    <div className='flex gap-[50px] w-full
        desktopHD:max-w-[1700px]
        desktopXL:justify-center desktopXL:max-w-[1440px]
        laptop:justify-center laptop:max-w-[1000px] laptop:flex-row 
        mobile:flex-col mobile:max-w-none mobile:items-center
    '>
        <div className='rounded-2xl bg-[#ffffff10] text-white font-mono font-bold text-4xl flex justify-center items-center
            desktopHD:w-[1415.45px] desktopHD:h-[366.4px]
            desktopXL:w-[727.4px] desktopXL:h-[229px]
            desktopL:w-[647px]
            laptop:w-[647px] laptop:h-[183.2px]
            tablet:w-3xl tablet:h-[380px]
            mobile:w-full mobile:h-[220px]
        '>No IMG</div>
        <div className='flex flex-col
            laptop:justify-between laptop:gap-3 laptop:items-start
            tablet:items-center
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
                    desktopXL:text-3xl
                    desktopL:text-2xl
                    laptop:text-lg laptop:text-start
                    tablet:text-2xl
                    mobile:text-lg mobile:text-center
                '>CleanMind</h3>
                <h2 className='text-white font-sans text-lg font-semibold tracking-wide
                    desktopHD:text-2xl
                    desktopXL:text-lg
                    desktopL:text-sm
                    laptop:text-lg laptop:text-start
                    mobile:text-sm mobile:text-center'
                >"Mente Limpia, Conciencia Tranquila"</h2>
                <p className=' text-white font-heading tracking-wide leading-6
                    desktopHD:text-xl desktopHD:tracking-wider
                    desktopXL:text-lg desktopXL:leading-7
                    laptop:text-[12px] laptop:leading-5 laptop:text-start laptop:max-w-none
                    tablet:max-w-[600px]
                    mobileL:text-sm mobileL:max-w-[400px]
                    mobile:text-sm mobile:leading-5 mobile:max-w-[350px] mobile:text-center
                '>
                    CleanMind es un organizador de tareas para personas 
                    con dificultad de concentración (TDAH, TAG, Entre otros).<br />
                    A diferencia de las demás APPs, se busca la reduccion de 
                    funcionalidades a las minimas para no generar estrés. 
                </p>
            </div>
            <div className='w-auto flex gap-3
                desktopHD:gap-5
                laptop:justify-start
                mobile:justify-center
            '>
                <a href='' target='_blank' 
                    className='w-8 h-8
                    desktopHD:w-12 desktopHD:h-12
                    desktopL:w-8 desktopL:h-8
                    laptop:w-7 laptop:h-7
                '>
                    <img src="/icons/IconGithub.png" alt="icongithub" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default CleanmindCard