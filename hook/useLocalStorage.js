import { useState, useEffect } from 'react'

export default function useForTest(key, init) {
    const [text, setText] = useState(() => {
        return getLocalStorage(key, init)
    })

    useEffect(() => {
        // console.log(process.browser);
        if (process.browser) {
            localStorage.setItem(key, text);
        }
    }, [text])

    return [text, setText]
}

function getLocalStorage(key, init) {
    // console.log(process.browser);
    if (process.browser && localStorage.getItem(key)) {
        return localStorage.getItem(key)
    }
    return init
}