import CleanmindCard from '../components/ui/CardProject/CleanmindCard'
import HoyoCard from '../components/ui/CardProject/HoyoCard'

const Projects = () => {
  return (
    <div className='h-auto w-screen' id='Projects'>
        <div className='w-full flex flex-col
        laptop:justify-center laptop:gap-[110px]
        mobile:items-center mobile:gap-10
        '>
            <h2 className='text-white font-sans text-4xl font-semibold tracking-wide
              desktopHD:text-6xl
            '>Mis Proyectos</h2>
            <div className='flex flex-col
              mobile:gap-26
            '>
              <HoyoCard />
              <CleanmindCard />
            </div>
        </div>
    </div>
  )
}

export default Projects