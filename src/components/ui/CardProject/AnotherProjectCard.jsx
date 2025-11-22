import IconGithub from '../../../assets/icons/IconGithub.png'
import IconLink from '../../../assets/icons/IconLink.png'

const AnotherProjectCard = () => {
  return (
    <div className='flex gap-[50px] w-full max-w-[1440px] justify-end'>
        <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-5'>
                <h3 className='text-white font-sans text-xl font-semibold tracking-wide text-end'>Proximamente...</h3>
                <p className='max-w-[450px] text-white font-heading tracking-wide leading-6 text-end'>
                    Proximamente...
                </p>
            </div>
            <div className='w-auto flex gap-3 justify-end'>
                <div href='' target='' className='w-8 h-8'>
                    <img src={IconGithub} alt="icongithub" />
                </div>
                <div href='' target='' className='w-8 h-8'>
                    <img src={IconLink} alt="iconlink" />
                </div>
            </div>
        </div>
        <div className='w-[426px] h-60 rounded-2xl'/>
    </div>
  )
}

export default AnotherProjectCard