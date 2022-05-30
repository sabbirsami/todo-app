import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineDelete } from "react-icons/ai";
import auth from "../firebase.init";

const ShowNotes = ({ note, notes, setNotes, index }) => {
    console.log(notes);

    const [user, loading, error] = useAuthState(auth);
    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/note/${id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            });
    };
    const handleTempoDelete = (index) => {
        console.log(index);
        const newArray = notes.filter((n) => notes.indexOf(n) !== index);
        setNotes(newArray);
    };
    return (
        <div className=" pt-2 ps-1">
            <div className="container">
                <div className="col-lg-6 mx-auto">
                    <div className="input-group mb-1">
                        <input
                            value={note.note}
                            readOnly
                            className="form-control bg-light"
                            placeholder="Write your note hare..."
                            aria-describedby="basic-addon2"
                        />
                        {user ? (
                            <button
                                onClick={() => handleDelete(note._id)}
                                type="submit"
                                className="btn btn-light text-danger"
                            >
                                <AiOutlineDelete />
                            </button>
                        ) : (
                            <button
                                onClick={() => handleTempoDelete(index)}
                                type="submit"
                                className="btn btn-light text-danger"
                            >
                                <AiOutlineDelete />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowNotes;
