import IconGithub from '../../../assets/icons/IconGithub.png'
import IconLink from '../../../assets/icons/IconLink.png'
import ImgBG from '../../../assets/images/HoyoCalculator.png'

const HoyoCard = () => {
  return (
    <div className='flex gap-[50px] w-full max-w-[1440px] justify-start'>
        <img src={ImgBG} alt='imgpreview' className='w-[426px] h-60 rounded-2xl'/>
        <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-5'>
                <h3 className='text-white font-sans text-xl font-semibold tracking-wide'>Hoyo Calculator Honkai</h3>
                <p className='max-w-[450px] text-white font-heading tracking-wide leading-6'>
                    Es una calculadora de estadisticas para los personajes
                    de un juego de "HoYoVerse Studio". <br />
                    Este mini-proyecto esta en stand-by pero se 
                    pensara seguir mas adelante.
                </p>
            </div>
            <div className='w-auto flex gap-3'>
                <a href='https://github.com/German-Zero/calculator-honkai' target='_blank' className='w-8 h-8'>
                    <img src={IconGithub} alt="icongithub" />
                </a>
                <a href='https://hoyocalculator.vercel.app' target='_blank' className='w-8 h-8'>
                    <img src={IconLink} alt="iconlink" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default HoyoCard