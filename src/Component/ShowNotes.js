import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
            <div
                className="bg-light mx-auto shadow rounded-3"
                style={{ width: "600px" }}
            >
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <p className="py-2 m-0 ps-3 ">{note.note}</p>
                    </div>
                    <div>
                        <button
                            onClick={() => handleDelete(note._id)}
                            type="submit"
                            className="btn btn-light text-danger"
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
