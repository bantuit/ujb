import { useCookies } from "react-cookie";
import { RxHamburgerMenu } from "react-icons/rx";

interface NavbarProps {
  clickHandler: () => void;
}

const NavbarDashboard = ({clickHandler}: NavbarProps) => {
  const [cookies] = useCookies(['username']);

  return (
    <div className="w-full h-12 rounded-md bg-[#FFFFFF] flex px-2 items-center justify-between">
      <RxHamburgerMenu onClick={clickHandler} className="cursor-pointer" />
      <div className="w-[85%]">PT URUSAN JAGA BANDA</div>
      <div className="flex flex-row justify-center items-center">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full h-8 w-8">
            <span className="text-xs">A</span>
          </div>
        </div>
        <div className="px-2">
          <p className="text-xs font-bold">{cookies.username}</p>
          <p className="text-xs">Admin</p>
        </div>
      </div>
    </div>
  )
}

export default NavbarDashboard