import React, { useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import ShowNotes from "./ShowNotes";

const Home = () => {
    const [notes, setNotes] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    console.log(notes);
    fetch("http://localhost:5000/note")
        .then((res) => res.json())
        .then((data) => setNotes(data));

    const onSubmit = (data) => {
        fetch("http://localhost:5000/note", {
            method: "POST",
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
        <div className="background" style={{ height: "100vh" }}>
            <div className="header_text text-light text-center py-5">
                <h1 className=" mt-lg-5 ">
                    To Do Notes <MdOutlineStickyNote2 />
                </h1>
                <p className="text-secondary">Add your list hare</p>
            </div>
            <div className="to_do_form mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="note_input_field mx-auto  text-center">
                        <div className=" px-2 py-3 rounded-3 d-inline">
                            <div className=" bg-success d-inline py-2 rounded-3">
                                <input
                                    className="border-0 me-3 px-3 pb-1 fs-5 bg-light rounded-3"
                                    placeholder="Write your note hare..."
                                    {...register("note")}
                                />
                                <button
                                    type="submit"
                                    className="border-0 mb-2 bg-white shadow rounded-3 "
                                >
                                    <FiPlus></FiPlus>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {notes.map((note, index) => (
                <ShowNotes key={index} note={note}></ShowNotes>
            ))}
        </div>
    );
};

export default Home;
