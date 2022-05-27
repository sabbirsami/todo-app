import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const ShowNotes = ({ note }) => {
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
                        <button className="btn btn-light text-danger">
                            <AiOutlineDelete />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowNotes;
