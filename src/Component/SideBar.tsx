import logo from '../assets/logo-svg.svg'
import { RxDashboard } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";

interface SideBarProps {
    condition: boolean
}

const SideBar = ({condition}: SideBarProps) => {
    return (
        <div className={`bg-[#FFFFFF] w-56 h-full rounded-lg p-5 grid grid-rows-4 absolute ${condition ? 'lg:static' : ''} duration-75  -left-56 -lg:left-56 `}>
            <div className='w-full h-full flex justify-center border-b border-black p-5 '>
                <img className='w-full' src={logo} alt="" />
            </div>
            <div className='w-full pt-20 flex flex-col row-span-2 space-y-4'>
                <a href="/dashboard" className='flex items-center gap-1 font-bold text-gray-500'><RxDashboard /> Dashboard</a>
                <a href="/" className='flex items-center gap-1 font-bold text-gray-500'><AiOutlineHome /> Home Page</a>
                <a href="/dashboard/profile" className='flex items-center gap-1 font-bold text-gray-500'><CgProfile /> Profile</a>
            </div>
            <div className='flex items-end gap-1 font-bold text-gray-500'><CiLogout /> Logout </div>
        </div>
    )
}

export default SideBar