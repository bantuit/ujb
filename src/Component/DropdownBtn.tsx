import { RiArrowDropDownLine } from "react-icons/ri";
import { DropdownPositiontType } from "../Type/DashboardType";

interface dropdownProps {
    handleItemClick: (value: string) => void;
    toggleDropdown: () => void;
    selectedItem: string
    dropDownOpen: boolean
    dataDropwdown: DropdownPositiontType[]
}


const DropdownBtn = ({ handleItemClick, selectedItem, toggleDropdown, dropDownOpen, dataDropwdown }: dropdownProps) => {
    return (
        <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" onClick={toggleDropdown} className="h-8 border border-blue-500 px-3 text-center rounded-lg flex text-xs items-center text-blue-600 ">
                {selectedItem || 'Posisi'} <RiArrowDropDownLine className='text-2xl' />
            </div>
            {dropDownOpen && (
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    {dataDropwdown?.map((item:{posisi:string}, index) => {
                        return (
                            <li key={index}><a onClick={() => handleItemClick(item.posisi)}>{item.posisi}</a></li>

                        )
                    })}
                </ul>
            )}
        </div>
    );
};

export default DropdownBtn;
