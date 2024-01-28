import logo from '../../assets/logo-svg.svg'
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Profile = () => {
  return (
    <div className="w-full md:w-1/2 h-[85vh] space-y-5 py-10 px-2">
      <h1 className='font-bold text-2xl'>Profile</h1>
      <div>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={logo} />
          </div>
        </div>
        <p className='text-sm text-gray-400'>Browse Image</p>
        <div className='flex flex-row gap-3 items-end'>
          <label htmlFor='open_modal' className="btn btn-outline btn-xs rounded-sm btn-info border border-yellow-400"><TiEdit className='text-black' /></label>
          <label htmlFor='delete' className="btn btn-outline btn-xs rounded-sm btn-info border border-red-400"><RiDeleteBin6Line className='text-black' /></label>
          <p className='text-xs'>img1.jpeg</p>
        </div>
      </div>
      <div className='space-y-2'>
        <p className='text-md text-gray-500'>Nama Lengkap</p>
        <div className='w-full h-8 flex items-center font-bold px-3 bg-white rounded-md text-gray-400 text-xs'>Ade Putra</div>
      </div>
      <div className='space-y-2'>
        <p className='text-md text-gray-500'>Role</p>
        <select className="select select-bordered select-sm w-full text-gray-500">
          <option disabled selected>Admin</option>
          <option>Guest</option>
        </select>
      </div>
    </div>
  )
}

export default Profile