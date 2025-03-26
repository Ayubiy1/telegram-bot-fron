import axios from "axios";
import { useEffect, useState } from "react";

const AudioUpload = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [authors, setAuthors] = useState([]);
    const [selectedAuthor, setSelectedAuthor] = useState("");

    useEffect(() => {
        fetch("http://localhost:5002/api/admin/authors")
            .then((res) => res.json())
            .then((data) => setAuthors(data));
    }, []);

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("audio", file);
        formData.append("title", title);
        formData.append("authorId", selectedAuthor);

        try {
            const response = await fetch("http://localhost:5002/api/admin/upload-audio", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const errorText = await response.text(); // JSON bo‘lmasa, matn sifatida chiqarish
                throw new Error(`Server xatosi: ${response.status} - ${errorText}`);
            }

            const data = await response.json(); // JSON formatida javob olish
            console.log("Natija:", data);
        } catch (error) {
            console.error("Xatolik:", error);
        }
    };


    // const handleUpload = async () => {
    //     if (!file || !title || !selectedAuthor) {
    //         return alert("Barcha maydonlarni to‘ldiring!");
    //     }

    //     const formData = new FormData();

    //     formData.append("title", title);
    //     formData.append("audio", file); // 📌 Fayl yuklash
    //     formData.append("authorId", selectedAuthor);
    //     console.log(formData);

    //     try {
    //         const res = await fetch("http://localhost:5002/api/admin/upload-audio", {
    //             method: "POST",
    //             body: formData, // ❌ JSON.stringify(formData) EMAS!
    //             // headers: { "Content-Type": "multipart/form-data" } ❌ SHART EMAS!
    //         });

    //         const data = await res.json();
    //         console.log(data);

    //         alert(data.message);
    //     } catch (error) {
    //         console.error("Xatolik:", error);
    //     }
    // };


    // const handleUpload = async () => {
    //     if (!file || !title || !selectedAuthor) {
    //         return alert("Barcha maydonlarni to‘ldiring!");
    //     }

    //     const formData = new FormData();
    //     formData.append("title", title);
    //     formData.append("audio", file);
    //     formData.append("authorId", selectedAuthor);

    //     console.log("FormData-ni tekshirish:");
    //     for (let pair of formData.entries()) {
    //         console.log("📝", pair[0], pair[1]);
    //     }

    //     try {
    //         console.log(formData);

    //         const res = await axios.post("http://localhost:5002/api/admin/upload-audio", formData);

    //         const data = await res.json();
    //         alert(data.message);
    //     } catch (error) {
    //         console.error("Xatolik:", error);
    //     }
    // };


    // const handleUpload = async () => {
    //     if (!file || !title || !selectedAuthor) {
    //         return alert("Barcha maydonlarni to‘ldiring!");
    //     }

    //     const formData = new FormData();
    //     formData.append("title", title);
    //     formData.append("audio", file);
    //     formData.append("authorId", selectedAuthor);

    //     console.log(formData);


    //     // **FormData ni tekshiramiz**
    //     for (let pair of formData.entries()) {
    //         console.log("📝 FormData:", pair[0], pair[1]);
    //     }

    //     try {
    //         const res = await fetch("http://localhost:5001/api/admin/upload-audio", {
    //             method: "POST",
    //             body: JSON.stringify(formData),
    //         });

    //         const data = await res.json();
    //         alert(data.message);
    //     } catch (error) {
    //         console.error("Xatolik:", error);
    //     }
    // };

    return (
        <div>
            <input type="text" placeholder="Audio nomi" onChange={(e) => setTitle(e.target.value)} />
            <select onChange={(e) => setSelectedAuthor(e.target.value)}>
                <option value="">Muallif tanlang</option>
                {authors.map((author) => (
                    <option key={author._id} value={author._id}>
                        {author.name}
                    </option>
                ))}
            </select>
            <input type="file" accept="audio/*" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Yuklash</button>
        </div>
    );
};

export default AudioUpload;
{
    // const handleUpload = async () => {
    //     if (!file || !title || !selectedAuthor) return alert("Barcha maydonlarni to‘ldiring!");

    //     const formData = new FormData();
    //     formData.append("title", title);
    //     formData.append("audio", file);
    //     formData.append("authorId", selectedAuthor);

    //     try {
    //         const res = await fetch("http://localhost:5001/api/admin/upload-audio", {
    //             method: "POST",
    //             body: formData,
    //         });

    //         const data = await res.json();
    //         alert(data.message);
    //     } catch (error) {
    //         console.error("Xatolik:", error);
    //     }
    // };
}