import React from 'react'
import './richtext.scss'

const RichText = (props) => {
  return (
    <div className='richtext'>
        <div className='richtext-container'>
          <h2 className='title'>{props.titleRich}</h2>
            <div className='richtext-content'>
                <p className='accapit'>{props.accapit1}</p>
                <p className='accapit'>{props.accapit2}</p>
                <p className='accapit'>{props.accapit3}</p>
                <p className='accapit'>{props.accapit4}</p>
            </div>
        </div>
    </div>
  )
}

export default RichText
