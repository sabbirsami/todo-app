import React from "react";

const Loading = () => {
    return (
        <div
            className="background d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
        >
            <div
                className="spinner-grow bg-light"
                style={{ height: "5rem", width: "5rem" }}
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
