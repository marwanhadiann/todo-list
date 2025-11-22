export default function TodoFilter() {

    return (
        <div className="justify-self-center mt-5">
            <button className="mr-10 transition duration-150 text-shadow-lg hover:scale-110 cursor-pointer focus:underline">Semua</button>
            <button className="mr-10 transition duration-150 text-shadow-lg hover:scale-110 delay-100 cursor-pointer focus:underline">Belum
                Selesai</button>
            <button className="transition duration-150 text-shadow-lg hover:scale-110 cursor-pointer focus:underline">Selesai</button>
        </div>
    )
}