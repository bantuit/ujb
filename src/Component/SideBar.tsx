import logo from '../assets/logo-svg.svg'
import { RxDashboard } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

interface SideBarProps {
    condition: boolean
    closeSidebar: () => void
}

const SideBar = ({ condition, closeSidebar }: SideBarProps) => {
    const navigate = useNavigate()

    return (
        <div className={`bg-[#FFFFFF] w-56 h-full rounded-lg p-5 grid grid-rows-4  ${condition ? 'md:static absolute transition -translate-x-56 md:translate-x-0' : ' translate-x-0 md:-translate-x-56 transition  absolute z-10 '}  `}>

            {condition ? ''
                : <span onClick={closeSidebar} className='w-full absolute flex justify-end text-2xl font-bold p-5 z-10'><IoMdClose /></span>
            }
            <div className='w-full h-full flex justify-center border-b border-black p-5 '>
                <img className='w-full' src={logo} alt="" />
            </div>
            <div className='w-full pt-20 flex flex-col row-span-2 space-y-4'>
                <a href="/dashboard" className='flex items-center gap-1 font-bold text-gray-500'><RxDashboard /> Dashboard</a>
                <a href="/" className='flex items-center gap-1 font-bold text-gray-500'><AiOutlineHome /> Home Page</a>
                <a href="/dashboard/profile" className='flex items-center gap-1 font-bold text-gray-500'><CgProfile /> Profile</a>
            </div>
            <div className='flex items-center gap-1 font-bold text-gray-500 cursor-pointer' onClick={() => navigate('/login')}><CiLogout /> Logout </div>
        </div>
    )
}

export default SideBar