import { useState, createContext } from "react";

export const UserContext = createContext({});

export default function UserProvider({children})  {
    const [ nomes, setNomes ] = useState([]);

    return (
        <UserContext.Provider value={{ nomes, setNomes }}>
            {children}
        </UserContext.Provider>
    );
}