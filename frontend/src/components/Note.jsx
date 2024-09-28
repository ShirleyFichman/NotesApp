import React from "react";

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
        <div className="text-white bg-gray-300 h-44 w-52 rounded p-1 flex flex-col justify-between">
            <div>
                <h1 className="mb-2 font-bold">{note.title}</h1>
                <p className="mb-6">{note.content}</p>
            </div>
            <div className="flex justify-between items-end mt-auto">
                <p className="text-xs">{formattedDate}</p>
                <button className="text-white rounded-full text-sm bg-black size-11" onClick={() => onDelete(note.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Note