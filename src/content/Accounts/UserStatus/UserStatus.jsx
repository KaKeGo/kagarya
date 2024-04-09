import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { userStatus } from "../../../slice/Accounts/Userstatus/userStatus";


const UserStatus = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userStatus())
    }, [dispatch])

    return (<></>)
}

export default UserStatus
