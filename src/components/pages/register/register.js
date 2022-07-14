import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import { db } from "./firebase";
import "./registerstyle.css";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [purpose, setPurpose] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("contacts")
            .add({
                name: name,
                email: email,
                role: role,
                purpose: purpose,
            })
            .then(() => {

                alert("Your message has been submitted👍");
            })
            .catch((error) => {
                alert(error.message);

            });

        setName("");
        setEmail("");
        setRole("");
        setPurpose("");
    };

    return (
        <Container maxWidth="lg" className="blogsContainer">
            <form className="form" onSubmit={handleSubmit}>
                <br></br><br></br><br></br>
                <h1>Register yourself as an Investor or Mentor or Incubator</h1>

                <label>Name</label>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email</label>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Are you an Investor/Mentor/Incubator?</label>
                <input
                    placeholder="Write your role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />

                <label>Why do you want to join us?</label>
                <textarea
                    placeholder="Write your Purpose"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
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

export default Register;