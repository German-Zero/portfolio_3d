import ContactExperience from "../components/three/ContactModel/ContactExperience"
import IconGithub from '../assets/icons/IconGithub.png'
import IconLinkedin from '../assets/icons/IconLinkedin.png'
import IconInstagram from '../assets/icons/IconInstagram.png'

const Contact = () => {
  return (
    <div className='w-screen h-screen bg-black'>
        <div className='w-full h-full flex justify-center items-center'>
            <div className='max-w-[1300px] max-h-[700px] w-full h-full'>
                <div className='relative w-full h-full flex items-center justify-between'>
                    <div className='absolute w-auto z-1 flex flex-col gap-6'>
                        <h3 className='text-white font-sans font-bold text-4xl tracking-wider'>
                            Te Dejo Como <span className="animated-gradient">Encontrarme!</span>
                        </h3>
                        <div className='flex gap-6'>
                            <a href="https://github.com/German-Zero" target="_blank">
                                <img src={IconGithub} alt="icongithub" className="w-12 h-12" />
                            </a>
                            <a href="https://www.linkedin.com/in/germannaz/" target="_blank">
                                <img src={IconLinkedin} alt="iconlinkedin" className="w-12 h-12" />
                            </a>
                            <a href="https://www.instagram.com/gszero_/" target="_blank">
                                <img src={IconInstagram} alt="iconinstagram" className="w-12 h-12" />
                            </a>
                        </div>
                    </div>
                    <figure className='absolute w-full max-w-[700px] h-full right-14'>
                        <ContactExperience />
                    </figure>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact