import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        name: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/registro", formData);

            if (response.status === 200) {
                // Guardar los datos en el localStorage
                localStorage.setItem("userData", JSON.stringify({
                    username: formData.username,
                    email: formData.email
                }));

                // Redirigir al usuario
                navigate("/");
            } else {
                console.error("Error en el registro");
            }
        } catch (error) {
            console.error("Error en la conexión al backend:", error);
        }
    };

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Douggies</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Perferendis quia enim animi doloremque blanditiis a dignissimos consequatur aliquam 
                        commodi tenetur accusantium, in molestiae veritatis aperiam reprehenderit laborum iusto, 
                        fugiat nesciunt. </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Repeat your Password"
                            name="password2"
                            value={formData.password2}
                            onChange={handleChange}
                        />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

