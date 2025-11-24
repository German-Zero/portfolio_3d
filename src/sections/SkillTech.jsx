import CardSkill from "../components/ui/CardSkill/CardSkill"


const SkillTech = () => {
  return (
    <div className='h-auto w-screen py-20 bg-transparent flex flex-col gap-28 justify-center items-center'>
      <div className='max-w-[1440px] w-full'>
        <h2 className='text-white text-center text-3xl font-semibold font-sans
          desktopHD:text-5xl
        '>
          Un Poco de mi <span className='animated-gradient'>Tech</span>
        </h2>
        <div className='flex flex-col gap-12 max-w-[1440px] w-full h-full mt-6'>
          <CardSkill />
        </div>
      </div>
    </div>
  )
}

export default SkillTech