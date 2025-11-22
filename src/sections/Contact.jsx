import React from 'react'

const Contact = () => {
  return (
    <div className='w-screen h-screen bg-[#030025]'>
        <div className='w-full h-full flex justify-center items-center'>
            <div className='max-w-[1100px] max-h-[700px] w-full h-full'>
                <div className='relative w-full h-full flex items-center justify-center'>
                    <div className='absolute w-full z-1 flex flex-col gap-6'>
                        <h3 className='w-[525px] h-[100px] bg-[#37009C] rounded-xl'></h3>
                        <p className='w-[210px] h-[25px] bg-[#37009C] rounded-lg'></p>
                    </div>
                    <div className='w-full justify-end flex'>
                        <div className='w-[700px] h-[682px] bg-[#120033] rounded-full'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact