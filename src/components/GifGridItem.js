import React from 'react';
import { shareGifs } from '../helpers/shareGifs';

export const GifGridItem = ( { id, title, url } ) => {

    return (
        <div id={id} className="card animate__animated animate__fadeIn animate__slower 5s">
            <img src={url} alt={title} />
            <p onClick={()=>shareGifs({title:title,url:url,text:'te comparto un gif'})}> { title } </p>
        </div>
    )
}
