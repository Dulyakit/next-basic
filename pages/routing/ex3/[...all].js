import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// use serversideprops
function paramsAll() {
    const router = useRouter()
    const [temp, setTemp] = useState()

    useEffect(() => {
        setTemp(router.query.all)
    })

    console.log(router.query.all);
    return (
        <div>
            {
                temp && temp.map((items, idx) => (
                    <li key={idx}>{items}</li>)
                )
            }
        </div>
    )
}

export default paramsAll