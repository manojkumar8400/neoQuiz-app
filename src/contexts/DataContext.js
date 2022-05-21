import { createContext, useContext, useState } from "react";
import { iplData } from "../dataBase/Data";

const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [data, setData] = useState(iplData);
    const [name, setName] = useState("");
    const [count, setCount] = useState(0);
    const [marks, setMarks] = useState(0);
    const [ checkAnswer, setCheckAnswer ] = useState([]);

    return (
        <DataContext.Provider value={{ data, setData, name, setName, count, setCount, marks, setMarks, checkAnswer, setCheckAnswer }}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext);

export { useData, DataProvider }