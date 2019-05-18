import React, { createContext, useReducer, useEffect } from 'react'

const initialState = {
    theme: { primary: 'green' },
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'changeTheme':
            return {
                ...state,
                theme: action.newTheme,
            }

        default:
            return state
    }
}

const StoreContext = createContext(initialState)

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // show state when updating
    useEffect(() => console.log({ newState: state }), [state])

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreContext, StoreProvider }
