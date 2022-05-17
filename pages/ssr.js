import React from 'react'

function ssr(props) {
  return (
    <div>
      static page
      <br />
      name: {props.name}
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/hello?random=1')
  const data = await res.json()

  console.log('--->', data[0]);

  return {
    props: { name: data[0] }
  }
}

export default ssr