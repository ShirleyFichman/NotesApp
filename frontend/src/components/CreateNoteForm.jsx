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
                getNotes();
            })
            .catch((err) => alert(err));
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
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
            <input
                type="submit"
                value="Submit"
                className=""
            />
        </form>
    );
}

export default CreateNoteForm;
