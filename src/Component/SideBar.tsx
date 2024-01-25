import logo from '../assets/logo-svg.svg'


const SideBar = () => {
    return (
        <div className='bg-[#FFFFFF] w-56 h-full rounded-lg p-5 grid grid-rows-4 absolute lg:static -left-56 lg:left-0 '>
            <div className='w-full h-full flex justify-center border-b border-black p-5 '>
                <img className='w-full' src={logo} alt="" />
            </div>
            <div className='w-full pt-20 flex flex-col row-span-2'>
                <a href="/">Dashboard</a>
                <a href="/">Home Page</a>
                <a href="/">Profile</a>
            </div>
            <div className='flex items-end'>Logout </div>
        </div>
    )
}

export default SideBar