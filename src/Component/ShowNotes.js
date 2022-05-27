import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineDelete } from "react-icons/ai";

const ShowNotes = ({ note }) => {
    const { handleSubmit, reset } = useForm();
    const [deletedId, setDeletedId] = useState([]);

    const onSubmit = (data) => {
        fetch(`http://localhost:5000/note/${data._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                reset();
            });
    };
    return (
        <div className=" pt-2 ps-1">
            <div
                className="bg-light mx-auto shadow rounded-3"
                style={{ width: "600px" }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <p className="py-2 m-0 ps-3 ">{note.note}</p>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="btn btn-light text-danger"
                            >
                                <AiOutlineDelete />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ShowNotes;
