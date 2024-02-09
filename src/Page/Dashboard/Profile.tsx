import { useCookies } from 'react-cookie'
import logo from '../../assets/logo-svg.svg'

const Profile = () => {
  const [cookies] = useCookies(['username']);

  return (
    <div className="w-full md:w-1/2 h-[85vh] space-y-5 py-10 px-2">
      <h1 className='font-bold text-2xl'>Profile</h1>
      <div>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={logo} />
          </div>
        </div>
      </div>
      <div className='space-y-2'>
        <p className='text-md text-gray-500'>Nama Lengkap</p>
        <div className='w-1/4 h-8 flex items-center font-bold px-3 bg-white rounded-md text-gray-400 text-xs'>{cookies.username}</div>
      </div>
    </div>
  )
}

export default Profile