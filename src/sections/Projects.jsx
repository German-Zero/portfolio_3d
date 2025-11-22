import React from 'react'

const Projects = () => {
  return (
    <div className='h-screen w-screen bg-[#030025]'>
        <div className='w-full h-full flex justify-center items-center flex-col gap-[110px]'>
            <h2 className='w-[700px] h-10 bg-[#37009C] rounded-xl'></h2>
            <div className='flex gap-[50px] w-full max-w-[1440px] justify-start'>
                <div className='w-[426px] h-60 bg-[#120033]'/>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col gap-5'>
                        <h3 className='w-[380px] h-[15px] bg-[#37009C]'></h3>
                        <p className='text-white font-semibold'>Lorem ipsum dolor sit amet, <br />
                        consectetur adipisicing elit. Tempora assumenda ipsa, <br />
                        ad alias corporis, aut quibusdam officiis illo <br />
                        optio est possimus facilis aliquam veniam nihil <br />
                        obcaecati vel eveniet voluptatum cum.</p>
                    </div>
                    <div className='w-auto flex gap-3'>
                        <div className='w-6 h-6 rounded-full bg-[#9200F4] border-none'/>
                        <div className='w-6 h-6 rounded-full bg-[#9200F4] border-none'/>
                        <div className='w-6 h-6 rounded-full bg-[#9200F4] border-none'/>
                        <div className='w-6 h-6 rounded-full bg-[#9200F4] border-none'/>
                    </div>
                </div>
            </div>
            <div className='flex gap-[50px] w-full max-w-[1440px] justify-end'>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col gap-5'>
                        <h3 className='w-[380px] h-[15px] bg-[#37009C]'></h3>
                        <p className='text-white text-end font-semibold'>Lorem ipsum dolor sit amet, <br />
                        consectetur adipisicing elit. Tempora assumenda ipsa, <br />
                        ad alias corporis, aut quibusdam officiis illo <br />
                        optio est possimus facilis aliquam veniam nihil <br />
                        obcaecati vel eveniet voluptatum cum.</p>
                    </div>
                    <div className='w-auto flex gap-3 justify-end'>
                        <div className='w-6 h-6 rounded-full bg-[#9200F4] border-none'/>
                        <div className='w-6 h-6 rounded-full bg-[#9200F4] border-none'/>
                        <div className='w-6 h-6 rounded-full bg-[#9200F4] border-none'/>
                        <div className='w-6 h-6 rounded-full bg-[#9200F4] border-none'/>
                    </div>
                </div>
                <div className='w-[426px] h-60 bg-[#120033]'/>
            </div>
        </div>
    </div>
  )
}

export default Projects