import React from 'react'
import { HeartIcon, HomeIcon } from 'lucide-react'
import { Link } from 'react-router'

function SideBar() {
  return (
    <>
        <Desktop></Desktop>
        <Mobile></Mobile>
    </>   
  )
}

export default SideBar

const Mobile = () => {
    return (
        <div className='fixed bottom-0 left-0 right-0 bg-gray-200 flex justify-center gap-10 md:hidden p-4 z-10'>
            <Link to={'/'}>
                <div className='flex gap-1 hover:font-bold box-border transition-font duration-200 ease-in-out cursor-pointer'>
                    <HomeIcon />
                    <span>Home</span>
                </div>
            </Link>
            
            <Link to={'/favourites'}>
                <div className=' flex gap-1 cursor-pointer hover:font-bold transition-font duration-200 ease-in-out '>
                    <HeartIcon/>
                    <span>Favourites</span>
                </div>
            </Link>
           
        </div>
    )
}

const Desktop = () => {
    return (
        <div className='hidden md:flex lg:flex fixed top-0 bottom-0  flex-col justify-center gap-10 p-6 z-30 box-border border-r-2 bg-grey-400'>

        <Link to={'/'}>
            <div className='flex gap-1 hover:font-bold'>
                    <HomeIcon></HomeIcon>
                    <span>Home</span>
            </div>
        </Link>
            
        <Link to={'/favourites'}>
            <div className='flex gap-1 hover:font-bold'>
                
                    <HeartIcon></HeartIcon>
                    <span>Favourites</span>
            </div>
        </Link>
        </div>
    )
}