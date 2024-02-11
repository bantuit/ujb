import { useState } from "react"
import homeServices from "../../Services/Api/HomeService"
import Swal from "sweetalert2"

const Email = () => {
    const [data, setData] = useState('')
    const sendEmail = (e:React.FormEvent) => {
        e.preventDefault()
        const body = {
            to:data
        }
        try {
            homeServices.email(body)
            setData('')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Email berhasil terkirim",
                showConfirmButton: false,
                timer: 1500
              });
        } finally { /* empty */ }
    }

    return (
        <div id="email" className='px-3 pt-10 md:px-16 bg-transparent'>
            <div className='w-full h-fit rounded-3xl bg-[#006FC0] p-5 flex flex-col md:flex-row flex-wrap justify-center md:gap-2 space-y-5'>
                <div className='w-full md:w-1/3 space-y-4 '>
                    <p className='font-bold text-mdxl text-white'> Bekerjasama dengan tim kami</p>
                    <p className='text-white text-sm'>Kami perusahaan penyedia layanan jasa yang terpercaya. Mulailah berbisnis dengan perusahaan kami untuk meningkatkan bisnis anda.</p>
                </div>
                <form onSubmit={sendEmail} className='w-full md:w-1/2 flex items-center justify-center flex-row md:flex-row  text-center gap-4'>
                    <input type="text" value={data} onChange={(e) => setData(e.target.value)} placeholder="Masukan Alamat Email" className="input input-bordered w-full max-w-xs" />
                    <button type="submit" className="btn btn-info text-white">Kirim</button>
                </form>
            </div>
        </div>
    )
}

export default Email