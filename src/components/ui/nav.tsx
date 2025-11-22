import React from 'react'

const Nav = () => {
  return (
    <nav className='w-screen h-20'>
        <div className='w-full max-h-20 h-full bg-[#000000] m-auto'>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='max-w-5/6 w-full h-auto flex justify-between'>
                    <div className='w-40 min-h-11 bg-[#FFFFFF] rounded-lg'></div>
                    <div className='flex justify-between items-center gap-5'>
                        <button className='w-[110px] h-8 bg-[#FFFFFF] rounded-lg'></button>
                        <button className='w-[110px] h-8 bg-[#FFFFFF] rounded-lg'></button>
                        <button className='w-[110px] h-8 bg-[#FFFFFF] rounded-lg'></button>
                        <button className='w-[110px] h-8 bg-[#FFFFFF] rounded-lg'></button>
                        <button className='w-[110px] h-8 bg-[#FFFFFF] rounded-lg'></button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav