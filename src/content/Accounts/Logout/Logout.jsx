import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logoutUser } from "../../../slice/Accounts/Logout/Logout"; 
import LoadingProgress from "../../../components/LoadingProgress/LoadingProgress";



const LogoutButton = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const handleLogout = () => {
        setIsLoading(true)
        dispatch(logoutUser())
            .unwrap()
            .then(() => {
                navigate('/')
            })
            .catch((err) => {
                console.err('Logout failed', err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <>
            <button onClick={handleLogout}>Logout</button>
            <LoadingProgress isLoading={isLoading} />
        </>
    )
}

export default LogoutButton
