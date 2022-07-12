import React, {useState} from 'react'
import { AppCategory,GifGrid } from './components';


export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categorias, setCategoria] = useState(['One Punch']);

    return (
        <>
            <AppCategory setCategories={ setCategoria } categorias={categorias}/>
            <hr/>
            {
                categorias.map( cat => (
                    <GifGrid 
                        key={cat}
                        category={cat} 
                    />
                ))
            }
        </>
    )
}
