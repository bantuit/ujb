
const Email = () => {
    return (
        <div className='px-3 md:px-16 bg-[#F3F1F1]'>
            <div className='w-full h-fit rounded-3xl bg-[#006FC0] p-5 flex flex-col md:flex-row flex-wrap justify-center md:gap-2 space-y-5'>
                <div className='w-full md:w-1/3 space-y-4 '>
                    <p className='font-extrabold text-mdxl text-white'> Bekerjasama dengan tim kami</p>
                    <p className='text-white text-sm'>Kami perusahaan penyedia layanan jasa yang terpercaya. Mulailah berbisnis dengan perusahaan kami untuk meningkatkan bisnis anda.</p>
                </div>
                <div className='w-full md:w-1/2 flex items-center justify-center flex-row md:flex-row  text-center gap-4'>
                    <input type="text" placeholder="Masukan Alamat Email" className="input input-bordered w-full max-w-xs" />
                    <button className="btn btn-info text-white">Kirim</button>
                </div>
            </div>
        </div>
    )
}

export default Email