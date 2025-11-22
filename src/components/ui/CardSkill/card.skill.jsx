import IconCSS from '../../../assets/icons/IconCSS.png'
import IconHTML from '../../../assets/icons/IconHTML.png'
import IconVue from '../../../assets/icons/IconVue.png'
import IconReact from '../../../assets/icons/IconReact.png'
import IconJS from '../../../assets/icons/IconJS.png'
import IconTS from '../../../assets/icons/IconTS.png'
import IconTailwind from '../../../assets/icons/IconTailwindCSS.png'
import IconGithub from '../../../assets/icons/IconGithub.png'
import IconNestJs from '../../../assets/icons/IconNestJs.png'
import IconNet from '../../../assets/icons/IconNet.png'
import IconPostgreSQL from '../../../assets/icons/IconPostgreSQL.png'
import IconPostman from '../../../assets/icons/IconPostman.png'
import IconThreeJs from '../../../assets/icons/IconThreeJs.png'
import IconVSCode from '../../../assets/icons/IconVSCode.png'
import IconWindows from '../../../assets/icons/IconWindows.png'
import IconCS from '../../../assets/icons/IconCS.png'
import './style.css'

const CardSkill = () => {
  return (
<div className='flex flex-col justify-center items-center gap-16 w-full h-full'>
    <h2 className='text-white font-heading text-2xl font-semibold tracking-wide'>Frontend</h2>
    <div className='carousel'>
        <div className='track'>
            {[...Array(2)].map((_, i) => (
                <div className='group' key={i}>
                    <div className='card'><img src={IconCSS} alt="iconcss" /><h3 className='card-title font-mono'>CSS</h3></div>
                    <div className='card'><img src={IconTailwind} alt="icontailwind" /><h3 className='card-title font-mono'>TailwindCSS</h3></div>
                    <div className='card'><img src={IconHTML} alt="iconhtml" /><h3 className='card-title font-mono'>HTML</h3></div>
                    <div className='card'><img src={IconVue} alt="iconvue" /><h3 className='card-title font-mono'>Vue</h3></div>
                    <div className='card'><img src={IconReact} alt="iconreact" /><h3 className='card-title font-mono'>React</h3></div>
                    <div className='card'><img src={IconJS} alt="iconjs" /><h3 className='card-title font-mono'>JavaScript</h3></div>
                    <div className='card'><img src={IconThreeJs} alt="iconthree" /><h3 className='card-title font-mono'>ThreeJS</h3></div>
                </div>
            ))}
        </div>
    </div>
    <h2 className='text-white font-heading text-2xl font-semibold tracking-wide'>Backend</h2>
    <div className='carousel'>
        <div className='track'>
            {[...Array(3)].map((_, i) => (
                <div className='group' key={i}>
                    <div className='card'><img src={IconNestJs} alt="iconnestjs" /><h3 className='card-title font-mono'>Nest JS</h3></div>
                    <div className='card'><img src={IconCS} alt="iconcs" /><h3 className='card-title font-mono'>C#</h3></div>
                    <div className='card'><img src={IconPostgreSQL} alt="iconpostgre" /><h3 className='card-title font-mono'>PostgreSQL</h3></div>
                    <div className='card'><img src={IconTS} alt="iconts" /><h3 className='card-title font-mono'>TypeScript</h3></div>
                </div>
            ))}
        </div>
    </div>
    <h2 className='text-white font-heading text-2xl font-semibold tracking-wide'>Tools</h2>
    <div className='carousel'>
        <div className='track'>
            {[...Array(3)].map((_, i) => (
                <div className='group' key={i}>
                    <div className='card'><img src={IconGithub} alt="icongithub" /><h3 className='card-title font-mono'>Github</h3></div>
                    <div className='card'><img src={IconNet} alt="iconnet" /><h3 className='card-title font-mono'>.Net</h3></div>
                    <div className='card'><img src={IconPostman} alt="iconpostman" /><h3 className='card-title font-mono'>Postman</h3></div>
                    <div className='card'><img src={IconVSCode} alt="iconvscode" /><h3 className='card-title font-mono'>VS Code</h3></div>
                    <div className='card'><img src={IconWindows} alt="iconwindow" /><h3 className='card-title font-mono'>Windows</h3></div>
                </div>
            ))}
        </div>
    </div>
</div>
  )
}

export default CardSkill