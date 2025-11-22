import React from 'react'
import CardSkill from '../components/ui/CardSkill/card.skill'


const SkillTech = () => {
  return (
    <div className='h-auto w-screen py-20 bg-black flex flex-col gap-28 justify-center items-center'>
        <h2 className='text-white text-center text-3xl font-semibold font-sans'>
            Un Poco de mi <span className='animated-gradient'>Tech</span>
            </h2>
        <div className='flex flex-col gap-12 w-full h-full'>
        <CardSkill />
        </div>
    </div>
  )
}

export default SkillTech