import React from 'react'

export const GifGridItem = ({title, url}) => {
    
    return (
        <div className="card animate__animated animate__jackInTheBox animate__delay-0.9s">
            <img src={url} alt={title} />
            <p> {title}</p>
        </div>
    )
}
