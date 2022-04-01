import React from 'react'

export default function GaleryItem({image}) {
  return (
    <div className="galery-item">
        <img src={image} alt="galery" />
    </div>
  )
}
