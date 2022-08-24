import { createContext, useState } from "react"
import { useFetch } from "../hooks/useFetch";


export const dataContextProvider = createContext();

const DataProvider = ({ children }) => {

    const [ pass, setPass ] = useState([])

    const { data, loading } = useFetch('http://localhost:3000/data.json');

    return (
        <dataContextProvider.Provider value={{ data, loading, setPass, pass }}>
            {children}
        </dataContextProvider.Provider>
    )
}

export default DataProvider
