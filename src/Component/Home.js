import React from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

const Home = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="background" style={{ height: "100vh" }}>
            <div className="header_text text-light text-center py-5">
                <h1 className=" mt-lg-5 ">
                    To Do Notes <MdOutlineStickyNote2 />
                </h1>
                <p>Add your list hare</p>
            </div>
            <div className="to_do_form mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="note_input_field mx-auto  text-center">
                        <div className=" px-2 py-3 rounded-3 d-inline">
                            <div className=" bg-success d-inline py-2 rounded-3">
                                <input
                                    className="border-0 me-3 ps-3 fs-5 bg-light rounded-3"
                                    placeholder="Write your note hare..."
                                    {...register("example")}
                                />
                                <button
                                    type="submit"
                                    className="border-0 pb-1  bg-light rounded-3 "
                                >
                                    <FiPlus></FiPlus>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Home;
