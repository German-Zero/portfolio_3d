import { useMediaQuery } from 'react-responsive'
import './style.css'

const CardSkill = () => {

    const isBig = useMediaQuery({ query: '(min-width: 2480px)' })
    const isSmall = useMediaQuery({ query: '(min-width: 416px) (max-width: 1000px)'})

    let groups = 3
    
    if (isBig) groups = 4
    if (isSmall) groups = 5

  return (
<div className='flex flex-col max-w-[1440px] items-center gap-16 w-full h-full'>
    <h2 className='text-white font-heading font-semibold tracking-wide
        desktopHD:text-4xl
        mobileL:text-2xl
        mobile:text-xl
    '>Frontend</h2>
    <div className='carousel'>
        <div className='track'>
            {[...Array(groups)].map((_, i) => (
                <div className='group' key={i}>
                    <div className='card'><img src="/icons/IconCSS.png" alt="iconcss" /><h3 className='card-title font-mono'>CSS</h3></div>
                    <div className='card'><img src="/icons/IconTailwindCSS.png" alt="icontailwind" /><h3 className='card-title font-mono'>TailwindCSS</h3></div>
                    <div className='card'><img src="/icons/IconHTML.png" alt="iconhtml" /><h3 className='card-title font-mono'>HTML</h3></div>
                    <div className='card'><img src="/icons/IconVue.png" alt="iconvue" /><h3 className='card-title font-mono'>Vue</h3></div>
                    <div className='card'><img src="/icons/IconReact.png" alt="iconreact" /><h3 className='card-title font-mono'>React</h3></div>
                    <div className='card'><img src="/icons/IconJS.png" alt="iconjs" /><h3 className='card-title font-mono'>JavaScript</h3></div>
                    <div className='card'><img src="/icons/IconThreeJS.png" alt="iconthree" /><h3 className='card-title font-mono'>ThreeJS</h3></div>
                </div>
            ))}
        </div>
    </div>
    <h2 className='text-white font-heading font-semibold tracking-wide
        desktopHD:text-4xl
        mobileL:text-2xl
        mobile:text-xl
    '>Backend</h2>
    <div className='carousel'>
        <div className='track'>
            {[...Array(groups)].map((_, i) => (
                <div className='group' key={i}>
                    <div className='card'><img src="/icons/IconNestjs.png" alt="iconnestjs" /><h3 className='card-title font-mono'>Nest JS</h3></div>
                    <div className='card'><img src="/icons/IconCS.png" alt="iconcs" /><h3 className='card-title font-mono'>C#</h3></div>
                    <div className='card'><img src="/icons/IconPostgreSQL.png" alt="iconpostgre" /><h3 className='card-title font-mono'>PostgreSQL</h3></div>
                    <div className='card'><img src="/icons/IconTS.png" alt="iconts" /><h3 className='card-title font-mono'>TypeScript</h3></div>
                </div>
            ))}
        </div>
    </div>
    <h2 className='text-white font-heading font-semibold tracking-wide
        desktopHD:text-4xl
        mobileL:text-2xl
        mobile:text-xl
    '>Tools</h2>
    <div className='carousel'>
        <div className='track'>
            {[...Array(groups)].map((_, i) => (
                <div className='group' key={i}>
                    <div className='card'><img src="/icons/IconGithub.png" alt="icongithub" /><h3 className='card-title font-mono'>Github</h3></div>
                    <div className='card'><img src="/icons/IconNet.png" alt="iconnet" /><h3 className='card-title font-mono'>.Net</h3></div>
                    <div className='card'><img src="/icons/IconPostman.png" alt="iconpostman" /><h3 className='card-title font-mono'>Postman</h3></div>
                    <div className='card'><img src="/icons/IconVSCode.png" alt="iconvscode" /><h3 className='card-title font-mono'>VS Code</h3></div>
                    <div className='card'><img src="/icons/IconWindows.png" alt="iconwindow" /><h3 className='card-title font-mono'>Windows</h3></div>
                </div>
            ))}
        </div>
    </div>
</div>
  )
}

export default CardSkill