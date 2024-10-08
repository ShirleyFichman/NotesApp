import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import CreateNoteForm from "../components/CreateNoteForm";
import SearchBar from "../components/SearchBar";

function Home() {
    const [notes, setNotes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState(""); 

    useEffect(() => {
        getNotes();
    }, [notes, showModal]);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col justify-between space-y-5">
            <h2 className="font-extrabold text-xl bg-gray-300 p-2">Notes App</h2>
            <SearchBar onSearch={setSearchQuery}/> 
            <div className="flex flex-wrap space-x-5 p-2">
                {filteredNotes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                ))}
            </div>
            <div className="flex flex-col justify-center items-center">
                {showModal ? (
                    <>
                        <CreateNoteForm />
                        <button onClick={() => setShowModal(false)} className="mt-2 bg-black text-white text-sm rounded w-12 h-6">Close</button>
                    </>
                ) : (
                <button className="rounded w-36 h-10 ml-2 bg-gray-300 font-semibold" onClick={() => setShowModal(true)}>
                    Create New Note
                </button>
                )}
            </div>
        </div>
    );
}

export default Home;
