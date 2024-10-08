import { useState } from "react";
import api from "../api";

function CreateNoteForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createNote({ title, content });
        setTitle("");
        setContent("");
    };

    const createNote = ({ title, content }) => {
        api.post("/api/notes/", { title, content })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
            })
            .catch((err) => alert(err));
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md w-72">
            <label htmlFor="title">Title:</label>
            <br />
            <input
                type="text"
                id="title"
                name="title"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="w-full p-2 mb-4 border rounded"
            />
            <label htmlFor="content">Content:</label>
            <br />
            <textarea
                id="content"
                name="content"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
            ></textarea>
            <br />
            <button type="submit" className="bg-gray-300 font-semibold rounded text-sm  w-28 h-7 text-white">Add New Note</button>
        </form>
    );
}

export default CreateNoteForm;
