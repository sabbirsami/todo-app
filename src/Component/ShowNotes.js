import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const ShowNotes = ({ note }) => {
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
    return (
        <div className=" pt-2 ps-1">
            <div className="container">
                <div className="col-lg-6 mx-auto">
                    <div class="input-group mb-1">
                        <input
                            value={note.note}
                            readOnly
                            class="form-control bg-light"
                            placeholder="Write your note hare..."
                            aria-describedby="basic-addon2"
                        />
                        <button
                            onClick={() => handleDelete(note._id)}
                            type="submit"
                            class="btn btn-light text-danger"
                        >
                            <AiOutlineDelete />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowNotes;
