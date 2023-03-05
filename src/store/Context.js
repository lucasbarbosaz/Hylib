import { createContext } from "react";

const StoreContext = createContext({
    config: {},
    user: {},
    setUser: () => {},
    token: '',
    setToken: () => {},
})

export default StoreContext;