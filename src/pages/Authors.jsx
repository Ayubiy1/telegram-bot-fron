import axios from "axios";
import { useEffect, useState } from "react";

const Authors = () => {
    const [name, setName] = useState("");
    const [authors, setAuthors] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:5002/api/admin/authors").then((res) => {
            setAuthors(res?.data)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const handleAddAuthor = () => {
        const data = { name };
        console.log("Yuborilayotgan body:", data);

        fetch("http://localhost:5002/api/admin/authors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Xatolik: ${response.status}`); // ❌ Xatolik bo‘lsa
                }
                setName("")
                return response.json();
            })
            .then(data => console.log("Serverdan javob:", data))
            .catch(error => console.error("Xatolik:", error));
    };

    return (
        <div>
            <div>
                <h2>Muallif qo‘shish</h2>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Muallif nomi"
                />
                <button onClick={handleAddAuthor}>Qo‘shish</button>
            </div>
            <div>
                {authors?.map(a => {
                    return <div key={a?._id}>{a?.name}</div>
                })}
            </div>
        </div>
    );
};

export default Authors;