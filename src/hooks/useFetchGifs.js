import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    // EJECUTA UNA SOLA VEZ LA FUNCION
    useEffect( () => {
        getGifs( category )
        .then( imgs => {
                
            setstate({
                data: imgs,
                loading: false
            })

        })
    }, [category])

    return state; // { data: [], loading: true}
}
