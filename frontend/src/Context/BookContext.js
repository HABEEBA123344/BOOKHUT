import {createContext,useReducer} from 'react'
export const BookContext = createContext()

export const BookReducer = (state,action)=>{
    switch(action.type){
        case 'SET_BOOK':
            return{
                book:action.payload
            }
        case 'DELETE_BOOK':
            return{
                book:state.book.filter((w)=>w._id!==action.payload._id)
            }
        default:
            return state
    }
}

export const BookContextProvider=({children})=>{
    const [state,dispatch]=useReducer(BookReducer,{
        book:{}
    })
    return(
        <BookContext.Provider value={{state,dispatch}}>
            {children}
        </BookContext.Provider>
    )
}
