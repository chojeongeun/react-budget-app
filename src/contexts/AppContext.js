import { createContext, useReducer, useState } from "react";

export const AppContext = createContext();

export const AppReducer = (state, action)=>{
    switch (action.type) {
        case 'ADD_EXPENSE':
            return{
                ...state,
                expenses:[...state.expense, action.payload]
            }
        case 'DELETE_EXPENSE':
            return{
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                )
            }
        case 'SET_BUDGET':
            return{
                ...state, 
                budget: action.payload
            }

            default:
                return state;
    }
}

const initialState = {
    budget: 30000,
    expenses: [
        {id:crypto.randomUUID(), name: '밥먹기', const: 1000},
        {id:crypto.randomUUID(), name: '카드비', const: 3000},
        {id:crypto.randomUUID(), name: '교통비', const: 7000}
    ]
}

export const AppContextProvider = (props) => {


    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (
        <AppContext.Provider value={{
            expenses: state.expenses,
            budget: state.budget,
            dispatch
        }} {...props} />

    )
}
