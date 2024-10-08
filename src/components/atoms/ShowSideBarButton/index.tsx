"use client"

import {Icon} from '@iconify/react'
import {usePosition} from '@/context/SideBarContext'


const ShowSideBarButton = () => {

  const {togglePosition} = usePosition();

  return (
    <button className='w-12 h-12 rounded-full flex justify-center items-center bg-primaryColor fixed z-20 bottom-7 right-5 shadow-lg' onClick={togglePosition}>
      <Icon icon="maki:arrow" className='w-10 font-medium'></Icon>
    </button>
  )
}

export default ShowSideBarButton
