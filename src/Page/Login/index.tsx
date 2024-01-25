import logo from '../../assets/logo-svg.svg'
import { useNavigate } from 'react-router-dom'



const Login = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className="card lg:w-1/4 h-auto  bg-base-100 md:shadow-xl md:border-t-2 md:border-[#006FC0]  ">
                <div className="w-full card-body flex flex-col items-center space-y-4">
                    <img className="w-auto h-20" src={logo} alt="" />
                    <h2 className="card-title text-base text-center">Selamat Datang, Pada Halaman Login</h2>
                    <div className='w-64 flex flex-col'>
                        <label>Username/Email</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                    </div>
                    <div className='w-64 flex flex-col'>
                        <label>Password</label>
                        <input type="password" placeholder="Type here" className="input input-bordered input-sm w-full " />
                    </div>
                    <button className="w-64 btn btn-sm bg-[#12AE57] text-white btn-success">Masuk</button>
                    <button className="btn btn-link" onClick={() => navigate('/lupa-password')}>Lupa Pasword?</button>
                </div>
            </div>
        </div>
    )
}

export default Login