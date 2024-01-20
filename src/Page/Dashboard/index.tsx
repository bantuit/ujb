import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../Component/SideBar'

const Dashboard = () => {
    return (
        <div className='w-full h-screen flex flex-row gap-2 bg-[#EFEFF4] p-2'>
            <SideBar/>
            <div className='w-full'>
                <div className='w-full h-10 bg-[#FFFFFF] rounded-md '>navbar</div>
                <div className='w-full  bg-gray-100'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard