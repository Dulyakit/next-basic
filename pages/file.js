import React from 'react'
import Image from 'next/image'

function file(props) {
    console.log(props);
    return (
        <div className='container' >
            Next Image <br />
            <Image src="/dulyakit.jpg" alt="" width={280} height={300} />
            <br />
            <br />
            HTML image <br />
            <img src="/dulyakit.jpg" alt="" width={280} height={300} />
        </div>
    )
}

export default file