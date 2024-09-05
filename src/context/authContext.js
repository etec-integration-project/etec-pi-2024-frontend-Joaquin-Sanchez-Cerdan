import { createContext, useEffect, useState } from "react";
import userjumozz from "../multimedia/userjumozz.jpg"; 

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
        // Aún no está listo
        setCurrentUser({
            id: 1,
            name: "Ju Mozz",
            profilePic: {userjumozz},
        });
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser,login }}>
            {children}
        </AuthContext.Provider>
    )
}   