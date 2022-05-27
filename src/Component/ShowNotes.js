import React from "react";

const ShowNotes = ({ note }) => {
    return (
        <div className=" pt-2 ps-1">
            <div
                className="bg-light mx-auto rounded-3"
                style={{ width: "600px" }}
            >
                <p className="py-2 ps-3 fs-5">{note.note}</p>
            </div>
        </div>
    );
};

export default ShowNotes;
