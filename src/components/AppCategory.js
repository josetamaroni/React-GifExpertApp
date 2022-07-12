import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AppCategory = ({categorias,setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const inputChange = (e) => {
        setInputValue(e.target.value);
    }
    const btnSubmit = (e) => {
        e.preventDefault();
        // BUSCO DENTRO DE LAS CATEGORIAS SI EXISTE Y NO DEVUELVO NADA
        if( categorias.includes(inputValue.trim()) ) return;

        if( inputValue.trim().length > 2 ){
            setCategories( cats => [inputValue,...cats] );
            setInputValue('');
        }
    }

    return (
        <div className="form_form">
            <h2>GifExpertApp</h2>
            <form onSubmit={ btnSubmit }>
                <span>Search: </span>
                <input 
                    type='text'
                    value= { inputValue }
                    onChange={ inputChange }
                />
            </form>
        </div>
    )
}

AppCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}