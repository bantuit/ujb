import { useState } from 'react'
import logo from '../../assets/logo-svg.svg'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import authServices from '../../Services/Api/LoginService'

type LoginType = {
    username:string,
    password:string
}

const Login = () => {
    const navigate = useNavigate()
    const [, setCookie] = useCookies(['token'])

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const save = async () => {
        // setIsLoading(true);
        try {
            const body:LoginType = {
                username: username,
                password: password,
            }
            const response = await authServices.login(body);
            console.log(response.data.data.accessToken)
            setCookie('token', JSON.stringify(response.data.data.accessToken), { path: "/" });
            navigate('/dashboard')
            // console.log(cookies.token);
        } finally {
            // setIsLoading(false);
        }
    };


    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className="card lg:w-1/4 h-auto  bg-base-100 md:shadow-xl md:border-t-2 md:border-[#006FC0]  ">
                <div className="w-full card-body flex flex-col items-center space-y-4">
                    <img className="w-auto h-20" src={logo} alt="" />
                    <h2 className="card-title text-base text-center">Selamat Datang, Pada Halaman Login</h2>
                    <div className='w-64 flex flex-col'>
                        <label>Username/Email</label>
                        <input type="text" placeholder="Type here" onChange={(e) => setUsername(e.target.value)} className="input input-bordered input-sm w-full " />
                    </div>
                    <div className='w-64 flex flex-col'>
                        <label>Password</label>
                        <input type="password" placeholder="Type here" onChange={(e) => setPassword(e.target.value)} className="input input-bordered input-sm w-full " />
                    </div>
                    <button className="w-64 btn btn-sm bg-[#12AE57] text-white btn-success" onClick={save}>Masuk</button>
                </div>
            </div>
        </div>
    )
}

export default Login