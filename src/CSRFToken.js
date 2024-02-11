import { useState, useEffect } from "react";
import axios from 'axios'
import Cookies from 'js-cookie'


const CSRFToken = () => {
    const [csrftoken, setCsrfToken] = useState('')

    useEffect(() => {
        const fetchCSRFToken = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8000/accounts/getcsrftoken/',
                )
                const csrfToken = response.data
                Cookies.set('kakusie', csrfToken)
                setCsrfToken(csrfToken)
            } catch (error) {
                console.error('Failed to fetch CSRFToken', error)
            }
        }
        fetchCSRFToken()
    }, [])

    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken}/>
    )
}

export default CSRFToken
