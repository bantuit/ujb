import { Outlet } from 'react-router-dom'
import SideBar from '../../Component/SideBar'
import NavbarDashboard from '../../Component/NavbarDashboard'
import FooterDashboard from '../../Component/FooterDashboard'
import { useState } from 'react'

const Dashboard = () => {
    const [navbar, setNavbar] = useState(true)
    const HandleClickFunc = () => {
        setNavbar(!navbar)
    }

    return (
        <div className='w-full h-screen flex flex-row gap-2 bg-[#EFEFF4] p-2'>
            <SideBar condition={navbar} />
            <div className='w-full overflow-y-auto space-y-2    '>
                <NavbarDashboard clickHandler={HandleClickFunc}/>
                <div className='w-full overflow-x-auto   mt-3'>
                    <Outlet />
                </div>
                <div className='w-full flex justify-center text-xs'>
                    <FooterDashboard />
                </div>
            </div>
        </div>
    )
}

export default Dashboard