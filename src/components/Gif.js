import React from 'react'

const Gif = (props) => {
  console.log(props)
  return (
    <li className='gif-wrap'>
      <img src={props.url} />
    </li>
  )
}
export default Gif;