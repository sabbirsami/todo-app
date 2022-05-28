import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    // CONDITION----------------
    if (googleLoading || loading || updating) {
        return <Loading></Loading>;
    }
    if (googleError || error) {
        return (
            <div>
                <p>googleError: {googleError.message}</p>
            </div>
        );
    }
    if (googleUser || user) {
        navigate("/");
    }

    const onSubmit = async (data) => {
        console.log(data);
        createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile(data.name);
    };
    return (
        <div
            className="background d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
        >
            <div className="container ">
                <div>
                    <h1 className="text-center text-light">Sign Up</h1>
                    <div className="text-light">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <div className="col-lg-5 mx-auto">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        {...register("name", {
                                            required: true,
                                            maxLength: 20,
                                        })}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <div className="col-lg-5 mx-auto">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        {...register("email", {
                                            required: true,
                                            maxLength: 20,
                                        })}
                                    />
                                </div>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <div className="col-lg-5 mx-auto">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        {...register("password", {
                                            required: true,
                                        })}
                                    />
                                </div>
                            </Form.Group>

                            <div className="col-lg-5 mx-auto">
                                <Button
                                    variant="primary"
                                    className="w-100"
                                    type="submit"
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </Form>
                        <div className="col-lg-5 mx-auto">
                            <div className="d-flex justify-content-center align-items-center pt-3">
                                <div className="col-5">
                                    <hr />
                                </div>
                                <p className="m-2">OR</p>
                                <div className="col-5">
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 mx-auto mt-1">
                            <button
                                onClick={() => signInWithGoogle()}
                                className="w-100 btn btn-outline-light"
                                type="submit"
                            >
                                <BsGoogle></BsGoogle>
                                <span className="ps-2">
                                    Sign Up With google
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
