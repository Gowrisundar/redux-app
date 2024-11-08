import { useState, useContext, createContext } from "react";

const UserContext = createContext()
const SecurityContext = createContext({sso:'', role:''})

export default function ContextDemo() {
    const [user, setUser] = useState('Gowri')
    return(
        <UserContext.Provider value = {user}>
            <h3>{ `Welcome ${user}! to Bank Of America` }</h3>
            <Family/>
        </UserContext.Provider>
    )
}
///-----------------

const Family=() => {
    return(<div className="bg-info container">
        <h3>I am Family Component</h3>
        <Child1/>
    </div>
    )
}

const Child1=() => {
    const user = useContext(UserContext)
    return(<div className="bg-success text-light container">
        <h3>I am Grand child Component</h3>
        <h3>{`Welcome ${user}! to Bank Of America`}</h3>
    </div>
    )
}