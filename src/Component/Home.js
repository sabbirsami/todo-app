import React from "react";
import "./style.css";
import { useForm } from "react-hook-form";

const Home = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="background" style={{ height: "100vh" }}>
            <div className="header_text py-5">
                <h1 className="text-center mt-lg-5 text-light">To Do Notes</h1>
            </div>
            <div className="to_do_form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue="test" {...register("example")} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Home;
