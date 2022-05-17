import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Button, InputGroup, FormControl } from 'react-bootstrap'

function link1() {
    const [temp, setTem] = useState('hello')
    const router = useRouter()

    const handleChangeText = (event) => {
        setTem(event.target.value)
    }

    const handleClickHome = () => {
        router.push('/')
    }

    const handleClickLink = () => {
        router.push({
            pathname: '/routing/ex1/[pid]',
            query: { pid: temp },
        }, '/routing/ex1')
    }

    console.log(temp);
    return (
        <div className='container mt-5'>
            <InputGroup>
                <FormControl style={{ width: "50%" }} value={temp} onChange={handleChangeText}></FormControl>
            </InputGroup>

            <br />
            <Link
                href={{
                    pathname: '/routing/ex1/[pid]',
                    query: { pid: temp },
                }}
            >
                <a>show path : {temp}</a>
            </Link>
            <br />
            <Link
                as='/routing/ex1'
                href={{
                    pathname: '/routing/ex1/[pid]',
                    query: { pid: temp },
                }}
            >
                <a>hide path : {temp}</a>
            </Link>
            <br />
            <Button variant="success" onClick={() => handleClickLink()}>Go to Link</Button>
            <Button variant="primary" onClick={() => handleClickHome()}>Go to Home</Button>
        </div>
    )
}

export default link1