import CardSkill from "../components/ui/CardSkill/CardSkill"


const SkillTech = () => {
  return (
    <div className='h-auto w-screen flex justify-center items-center'>
      <div className='w-full h-full flex flex-col gap-12 my-10
        desktopHD:max-w-[1600px]
        desktopXL:max-w-[1200px]
        desktopL:max-w-[1000px]
        laptop:max-w-[660px]
      '>
        <h2 className='text-white text-center font-semibold font-sans
          desktopHD:text-6xl
          desktopXL:text-5xl
          desktopL:text-4xl
          laptop:text-3xl
          tablet:text-4xl
          mobile:text-[30px]
        '>
          Un Poco de mi <span className='animated-gradient'>Tech</span>
        </h2>
        <CardSkill />
      </div>
    </div>
  )
}

export default SkillTech