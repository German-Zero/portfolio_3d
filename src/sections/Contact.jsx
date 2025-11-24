import ContactExperience from "../components/three/ContactModel/ContactExperience"


const Contact = () => {
  return (
    <div className='w-screen h-screen'>
        <div className='w-full h-full flex justify-center items-center'>
            <div className='w-full h-full
                desktopHD:max-h-[1000px] desktopHD:max-w-[1800px]
                desktopL:max-w-[1100px] desktopL:max-h-[700px]
                laptop:max-w-[900px] laptop:max-h-[600px]
                tablet:max-w-3xl tablet:max-h-[768px]
                mobile:max-w-[440px] mobile:max-h-[700px] mobile:flex mobile:flex-col
            '>
                <div className='relative w-full h-full flex items-center justify-between
                    laptop:flex-row laptop:justify-between
                    tablet:max-h-none
                    mobile:flex-col mobile:justify-start mobile:max-h-[416px]
                '>
                    <div className='absolute w-auto z-1 flex flex-col gap-6
                        desktopHD:gap-14
                        laptop:items-start
                        mobile:items-center
                    '>
                        <h3 className='text-white font-sans font-bold text-4xl tracking-wider
                            desktopHD:text-6xl
                            desktopXL:text-4xl
                            laptop:text-3xl
                            mobile:text-center
                        '>
                            Te Dejo Como <span className="animated-gradient">Encontrarme!</span>
                        </h3>
                        <div className='flex gap-6'>
                            <a href="https://github.com/German-Zero" target="_blank">
                                <img src="/icons/IconGithub.png" alt="icongithub" className="
                                    desktopHD:w-16 desktopHD:h-16
                                    desktopXL:w-12 desktopXL:h-12
                                    desktopL:w-12 desktopL:h-12
                                    laptop:w-10 laptop:h-10
                                    mobile:w-12 mobile:h-12
                                " />
                            </a>
                            <a href="https://www.linkedin.com/in/germannaz/" target="_blank">
                                <img src="/icons/IconLinkedin.png" alt="iconlinkedin" className="
                                    desktopHD:w-16 desktopHD:h-16
                                    desktopXL:w-12 desktopXL:h-12
                                    desktopL:w-12 desktopL:h-12
                                    laptop:w-10 laptop:h-10
                                    mobile:w-12 mobile:h-12
                                " />
                            </a>
                            <a href="https://www.instagram.com/gszero_/" target="_blank">
                                <img src="/icons/IconInstagram.png" alt="iconinstagram" className="
                                    desktopHD:w-16 desktopHD:h-16
                                    desktopXL:w-12 desktopXL:h-12
                                    desktopL:w-12 desktopL:h-12
                                    laptop:w-10 laptop:h-10
                                    mobile:w-12 mobile:h-12
                                " />
                            </a>
                        </div>
                    </div>
                    <figure className='absolute w-full h-full
                        desktopHD:max-w-[1000px]
                        desktopL:max-w-[600px]
                        laptop:max-w-[400px] laptop:right-14 laptop:top-0
                        tablet:max-w-3xl tablet:top-[10%]
                        mobile:max-w-[440px] mobile:right-0 mobile:top-[65%]
                    '>
                        <ContactExperience />
                    </figure>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact