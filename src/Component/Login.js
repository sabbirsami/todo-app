import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div
            className="background d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
        >
            <div className="container ">
                <div>
                    <h1 className="text-center text-light">Login</h1>
                    <div className="text-light">
                        <Form>
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
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
