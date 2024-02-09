import logo from '../assets/logo-svg.svg'

const Navbar = () => {
    return (
        <div className="navbar bg-transparent flex justify-end z-20  text-white ">
            <div className="navbar-start w-full z-30">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52 text-black ">
                        <li><a href='/' className='text-bold'>Home</a></li>
                        <li>
                            <a className='bg-gray-200'>Tentang Kami</a>
                            <ul className="p-2 ">
                                <li><a href='/tentang-kami'>Tentang Kami</a></li>
                                <li><a href='/tentang-kami/visi-dan-misi'>Visi dan Misi</a></li>
                                <li><a href='/tentang-kami/komitment'>Komitment</a></li>
                                <li><a href='/tentang-kami/struktur-organisasi'>Struktur Organisasi</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className='bg-gray-200'>Layanan Kami</a>
                            <ul className="p-2">
                                <li><a href='/layanan-kami/security-centeng'>Security Centeng</a></li>
                                <li><a href='/layanan-kami/cleaning-service'>Cleaning Service</a></li>
                                <li><a href='/layanan-kami/jawara-parkir'>Jawara Parkir</a></li>
                                <li><a href='/layanan-kami/getol'>Lembaga Pelatihan Kerja</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className='bg-gray-200'>Karir</a>
                            <ul className="p-2">
                                <li><a href='/karir/alur-rekruitment'>Alur Rekruitment</a></li>
                                <li><a href='/karir/lowongan-kerja'>Lowongan Kerja</a></li>
                            </ul>
                        </li>
                        <li><a href='/hubungi-kami'>Hubungi Kami</a></li>
                        <li><a href='/login'>Login</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className='w-16' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-10">
                    <li><a href='/' className='font-bold '>Home</a></li>
                    <li>
                        <details className='w-44'>
                            <summary className='font-bold'>
                                Tentang Kami
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none z-30 text-black">
                                <li><a href='/tentang-kami'>Tentang Kami</a></li>
                                <li><a href='/tentang-kami/visi-dan-misi'>Visi dan Misi</a></li>
                                <li><a href='/tentang-kami/komitment'>Komitment</a></li>
                                <li><a href='/tentang-kami/struktur-organisasi'>Struktur Organisasi</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details className='w-44'>
                            <summary className='font-bold'>
                                Layanan Kami
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none z-30 text-black">
                                <li><a href='/layanan-kami/security-centeng'>Security Centeng</a></li>
                                <li><a href='/layanan-kami/cleaning-service'>Cleaning Service</a></li>
                                <li><a href='/layanan-kami/jawara-parkir'>Jawara Parkir</a></li>
                                <li><a href='/layanan-kami/getol'>Lembaga Pelatihan Kerja</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details className='w-28'>
                            <summary className='font-bold'>
                                Karir
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none z-30 text-black">
                                <li><a href='/karir/alur-rekruitment'>Alur Rekruitment</a></li>
                                <li><a href='/karir/lowongan-kerja'>Lowongan Kerja</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href='/hubungi-kami' className='font-bold '>Hubungi Kami</a></li>
                    <li><a href='/login' className='font-bold w-20 border-2 border-white flex justify-center'>Login</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar