import React, { useEffect, useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import ShowNotes from "./ShowNotes";

const Home = () => {
    const [notes, setNotes] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch("http://localhost:5000/note")
            .then((res) => res.json())
            .then((data) => setNotes(data));
    }, []);

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
        <div className="background pt-5" style={{ height: "100vh" }}>
            <div className="pt-3">
                <div className="header_text text-light text-center py-5">
                    <h1 className=" mt-lg-5 ">
                        To Do Notes <MdOutlineStickyNote2 />
                    </h1>
                    <p className="text-secondary">Add your list hare</p>
                </div>
                <div className="to_do_form mx-auto py-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="container">
                            <div className=" ">
                                <div className="col-lg-6 mx-auto">
                                    <div class="input-group input-group-lg mb-3">
                                        <input
                                            {...register("note")}
                                            type="text"
                                            class="form-control input-group-lg"
                                            placeholder="Write your note hare..."
                                            aria-describedby="basic-addon2"
                                        />
                                        <button
                                            type="submit"
                                            class="btn btn-success "
                                            id="basic-addon2"
                                        >
                                            <FiPlus></FiPlus>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {notes.map((note, index) => (
                    <ShowNotes key={index} note={note}></ShowNotes>
                ))}
            </div>
        </div>
    );
};

export default Home;
