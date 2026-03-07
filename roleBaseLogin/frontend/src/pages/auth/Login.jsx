import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:8000/okey/login",
                formData,
                { withCredentials: true }
            );

            if (res.data.success) {
                console.log(res.data);
                localStorage.setItem("role", res.data.user.role);
                alert("Login Successful");
            }

            let role = localStorage.getItem("role");
            if (role === "admin") return navigate("/admin/dashboard");
            if (role === "user") return navigate("/user/dashboard");

        } catch (error) {
            console.log(error);
            alert("Login Failed");
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    width: "300px",
                    padding: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "10px"
                }}
            >

                <h2 style={{ textAlign: "center" }}>Login</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Login</button>

            </form>

        </div>
    );
}

export default Login;