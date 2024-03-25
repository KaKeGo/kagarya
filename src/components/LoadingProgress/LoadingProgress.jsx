import React, { useEffect } from "react";
import nprogress from 'nprogress'

import 'nprogress/nprogress.css'
import './LoadingProgress.css'



const LoadingProgress = ({ isLoading }) => {
    useEffect(() => {
        if (isLoading) {
            nprogress.start()
        } else {
            nprogress.done()
        }
    }, [isLoading])

    return null
}

export default LoadingProgress
