import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const defaultProfilePic = "https://www.w3schools.com/howto/img_avatar2.png"; 

    const login = async (inputs) => {
        try {
            const response = await axios.post("/api/login", inputs);
            if (response.data.success) {
                const profilePic = response.data.user.profilePic || defaultProfilePic;
                
                setCurrentUser({
                    id: response.data.user.id,
                    name: response.data.user.name,
                    profilePic, 
                });
            } else {
                console.error("Error al iniciar sesión");
            }
        } catch (error) {
            console.error("Error en la solicitud de inicio de sesión:", error);
        }
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};
