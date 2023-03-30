import React, { useState, useEffect } from 'react'

export default function Error({errorMessage}) {
    // const [showError, setShowError] = useState(false)
    // useEffect(() => {
    //     setShowError(true)
    
    //     const timeoutId = setTimeout(() => {
    //       setShowError(false)
    //     }, 5000)
    
    //     return () => {
    //       clearTimeout(timeoutId)
    //     }
    //   }, [errorMessage])
    return (
        <div>
            <div className="alert alert-danger" role="alert">
               {errorMessage}
            </div>
        </div>
    )
}
