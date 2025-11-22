export default function TodoList({ items, onDelete, toggleChecked, onEdit }) {

    function formatDate(date) {
        return new Date(date).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        })
    }

    return (
        <div className="pt-3 mt-5 mb-5 h-60 w-[650px] bg-blue-300 shadow-lg rounded-lg mx-auto overflow-auto">

            {items.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                    <ul>
                        <li className="text-center text-gray-600 text-xl italic font-semibold text-shadow-lg">
                            Belum Ada Tugas yang Ditambahkan
                        </li>
                    </ul>
                </div>
            ) : (
                <ul>
                    {items.map((item) => (
                        // pembungkus list item
                        <div key={item.id} className="mb-4 mt-2 w-[550px] bg-slate-100 mx-auto rounded-lg shadow-lg relative">
                            <li>
                                {/* checkbox */}
                                <input type="checkbox" className="flex absolute top-3 ml-2 mr-2" checked={item.checked} onChange={() => toggleChecked(item.id)} />

                                {/* text tugas item yang ditambahkan */}
                                <span className="text-shadow-md text-slate-800 ml-7" style={item.checked ? { textDecoration: 'line-through' } : {}}>
                                    {item.input}

                                    {/* text deadline tugas */}
                                    <p key={item.date} className="text-xs font-normal text-slate-600 ml-[30px] text-shadow-sm">Deadline : {formatDate(item.date)}</p>
                                </span>

                                <button className="flex absolute right-9 top-3 bg-gray-100 rounded-full hover:scale-125 shadow-xl transition duration-150 cursor-pointer" onClick={() => onEdit(item)}>
                                    <img src="/pencil.png" alt="Edit" className="" />
                                </button>

                                {/* button delete */}
                                <button
                                    className="flex absolute right-4 top-2 text-red-600 hover:text-red-700 font-bold text-shadow-lg hover:scale-125 transition duration-150 cursor-pointer" onClick={() => onDelete(item.id)}>
                                    X</button>
                            </li>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}