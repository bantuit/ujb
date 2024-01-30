import { RiArrowDropDownLine } from "react-icons/ri";

const DropdownBtn = () => {
    return (
        <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="h-8 border border-blue-500 px-3 text-center rounded-lg flex text-xs items-center text-blue-600 ">Posisi <RiArrowDropDownLine className='text-2xl'/></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    )
}

export default DropdownBtn