import React, {createContext, useState, useContext} from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userName, setUserName] = useState("");
    const [userData, setUserData] = useState("");

    const changeUserName = (newUser) => {
        setUserName(newUser);
    }

    const getUser = async () => {
        const baseUrl = "https://api.github.com/users/"
        const newUser = await axios.get(baseUrl + userName)
        const newUserData = newUser.data;
        setUserData(newUserData);
    }

    return (
        <UserContext.Provider value={{userName, userData, changeUserName, getUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useGetUser = () => useContext(UserContext);