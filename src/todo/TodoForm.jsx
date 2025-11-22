import { useState } from "react"
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

export default function TodoForm() {
    const [input, setInput] = useState('');
    const [date, setDate] = useState('');
    // default item
    const [items, setItems] = useState([
        { id: 1, input: "Tugas membuat UI/UX", date: "2025-11-21", checked: false },
        { id: 2, input: "Tugas membuat website", date: "2025-10-22", checked: false },
        { id: 3, input: "Tugas membuat database", date: "2026-01-11", checked: false }
    ]);

    const [editId, setEditId] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        if (!input.trim() || !date.trim()) return; // untuk mengatasi inputan yang kosong

        if (editId) {
            setItems(items.map(item =>
                item.id === editId ? { ...item, input, date } : item
            ));

            setEditId(null);
            setInput('');
            setDate('');
        } else {
            const newItem = {id: Date.now(), input, date, checked: false}

            setItems([newItem, ...items]);
            setInput('');
            setDate('');
        };
    }

    function handleDelete(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function toggleChecked(id) {
        setItems(
            (items) => items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        )
    }

    function handleEdit(item) {
        setEditId(item.id);
        setInput(item.input);
        setDate(item.date);
    };


    return (
        <div className="bg-slate-100 mt-10 mb-10 pt-4 h-[600px] w-[800px] rounded-lg shadow-lg mx-auto">
            <h1 className="text-3xl font-bold flex justify-center mb-10">To do List</h1>

            {/* input tugas */}

            <form className="grid justify-center" onSubmit={handleSubmit}>
                <label htmlFor="tugas" className="text-sm mb-2 font-medium text-center">Tambahkan Tugas</label>
                <input type="text" placeholder="Tambahkan Tugas Anda" className="border rounded-md py-2 px-6 mb-2" value={input} onChange={(e) => setInput(e.target.value)} />

                {/* input tanggal deadline */}
                <label htmlFor="date" className="text-sm mb-2 font-medium text-center">Deadline Tugas</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border rounded-md py-2 px-6 mb-2" />

                <button className="bg-blue-500 rounded-full py-2 w-20 text-white hover:bg-blue-600 justify-self-center transition duration-200 delay-150 hover:scale-105 cursor-pointer">{editId ? 'Update' : 'Tambah'}</button>
            </form>

            <TodoFilter/>
            <TodoList items={items} date={date} onDelete={handleDelete} toggleChecked={toggleChecked} onEdit={handleEdit} />
        </div>
    )
}