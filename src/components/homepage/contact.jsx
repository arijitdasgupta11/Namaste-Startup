import { Container } from "@material-ui/core";
import React from "react";
import "./contactstyles.css";

const Contact = () => {

    return (
        <Container className="blogsContainer">
            <form className="form">
                <h1>CONTACT US 📧</h1>

                <label>Name</label>
                <input
                    placeholder="Name"
                />
                <label>Email</label>
                <input
                    placeholder="Email"
                />
                <label>Message</label>
                <textarea
                    placeholder="Write your Message"
                ></textarea>
                <button
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </Container>
    );
};

export default Contact;