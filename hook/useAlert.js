import { useEffect } from 'react'

export default function useAlert(text) {

    useEffect(() => {
        console.log(text)
        if (text === '456') {
            alert('== 456 ==')
        }
    })

}
