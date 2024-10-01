import { useState } from "react";
const useForm = (initialForm = {} ) => {
 
    // {
    //     username: '',
    //     email: '',
    //     password: ''
    // }
    const [formState, setFormState] = useState(initialForm)

    const {username, email, password} = formState;


    const onInputChange = ({target}) => { // el parametro del onChange por defecto es el "e" evento, entonces se destructura
        const {name, value} = target;
        setFormState({
            ...formState,
            [name] : value
        })
    }

    const onResetForm = () => {
        setFormState( initialForm )
    }


    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}

export default useForm