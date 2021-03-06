import React from 'react'
import { useFecthGifs } from '../hooks/useFecthGifs'
// import { useEffect } from 'react';
// import { useState } from 'react/cjs/react.development';
import { GifGridItem } from './GifGridItem';
// import {getGifs} from '../helpers/getGifs'

export const GifGrid = ({ category }) => {


    // const [images, setImages] = useState([])
    const {data:images, loading} = useFecthGifs(category);
    // useEffect(()=> {
    //     getGifs(category)
    //         .then(setImages)
            
    // }, [category])

   

   

    return (
        <>
        <h3> {category} </h3>
        {loading && <p>Loading...</p>}
        <div className="card-grid ">
            
            {
                images.map(img =>(
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                ))
            }
            
            
        </div>
        </>
    )
}
