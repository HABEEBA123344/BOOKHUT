import { BookContext } from "../Context/BookContext";
import { useContext } from "react";
export const useBookContext=()=>{
    const context=useContext(BookContext)
    if(!context){
        throw Error("UseBookcontext must be used inside BookcontextProvider")
    }
    return context
}