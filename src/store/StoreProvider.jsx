import React from "react";
import Context from "./Context";
import useStorage from "../utils/useStorage";

const StoreProvider = (props) => {
    const [token, setToken] = useStorage('token');
    const [user, setUser] = useStorage('user');

    return (
        <Context.Provider
            value={{
                config: props.config,
                token,
                setToken,
                user,
                setUser
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export default StoreProvider;