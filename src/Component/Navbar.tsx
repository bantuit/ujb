import logo from '../assets/logo.jpg'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 flex justify-end z-20">
            <div className="navbar-start w-full">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='/'>Home</a></li>
                        <li>
                            <a>Tentang Kami</a>
                            <ul className="p-2">
                                <li><a href='/tentang-kami'>Tentang Kami</a></li>
                                <li><a href='/visi-dan-misi'>Visi dan Misi</a></li>
                                <li><a href='/komitment'>Komitment</a></li>
                                <li><a href='/struktur-organisasi'>Struktur Organisasi</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Layanan Kami</a>
                            <ul className="p-2">
                                <li><a href='/layanan-kami/security-centeng'>Security Centeng</a></li>
                                <li><a href='/layanan-kami/cleaning-service'>Cleaning Service</a></li>
                                <li><a href='/layanan-kami/jawara-parkir'>Jawara Parkir</a></li>
                                <li><a href='/layanan-kami/getol'>Lembaga Pelatihan Kerja</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Karir</a>
                            <ul className="p-2">
                                <li><a href='/karir/alur-rekruitment'>Alur Rekruitment</a></li>
                                <li><a href='/karir/lowongan-kerja'>Lowongan Kerja</a></li>
                            </ul>
                        </li>
                        <li><a href='/hubungi-kami'>Hubungi Kami</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className='w-16' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='/'>Home</a></li>
                    <li>
                        <details>
                            <summary>
                                Tentang Kami
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a href='/tentang-kami'>Tentang Kami</a></li>
                                <li><a href='/tentang-kami/visi-dan-misi'>Visi dan Misi</a></li>
                                <li><a href='/tentang-kami/komitment'>Komitment</a></li>
                                <li><a href='/tentang-kami/struktur-organisasi'>Struktur Organisasi</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>
                                Layanan Kami
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a href='/layanan-kami/security-centeng'>Security Centeng</a></li>
                                <li><a href='/layanan-kami/cleaning-service'>Cleaning Service</a></li>
                                <li><a href='/layanan-kami/jawara-parkir'>Jawara Parkir</a></li>
                                <li><a href='/layanan-kami/getol'>Lembaga Pelatihan Kerja</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>
                                Karir
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a href='/karir/alur-rekruitment'>Alur Rekruitment</a></li>
                                <li><a href='/karir/lowongan-kerja'>Lowongan Kerja</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href='/hubungi-kami'>Hubungi Kami</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar