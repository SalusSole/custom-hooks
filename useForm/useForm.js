import { useState } from "react";

const useForm = (formEntries = {}) => {
    const [formState, setFormState] = useState(formEntries);

    const handleInputChange = ({ target }) => {
        const { type, value, checked, name } = target;

        setFormState({
            ...formState,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleReset = () => {
        setFormState(formEntries);
    };

    return { formState, handleInputChange, handleReset };
};

export default useForm;
