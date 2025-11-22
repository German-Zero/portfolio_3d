import HoyoCard from '../components/ui/CardProject/HoyoCard'
import AnotherProjectCard from '../components/ui/CardProject/AnotherProjectCard'

const Projects = () => {
  return (
    <div className='h-screen w-screen bg-black' id='Projects'>
        <div className='w-full h-full flex justify-center items-center flex-col gap-[110px]'>
            <h2 className='text-white font-sans text-4xl font-semibold tracking-wide'>Mis Proyectos</h2>
            <HoyoCard />
            <AnotherProjectCard />
        </div>
    </div>
  )
}

export default Projects