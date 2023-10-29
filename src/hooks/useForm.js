import { useState } from 'react';

export default function useForm(initialState = {}, onSubmit) {
  const [formData, setFormData] = useState(initialState);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});

  function handleInputChange(evt) {
    const { name, value, validationMessage } = evt.target;
    setErrors({ ...errors, [name]: validationMessage });
    setFormData({ ...formData, [name]: value });
    setIsValid(evt.target.form.checkValidity());
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(formData);
  }

  function resetForm() {
    setErrors({});
    setFormData(initialState);
    Object.keys(initialState).length === 0 ? setIsValid(false) : setIsValid(true);
  }

  return { handleInputChange, handleSubmit, formData, errors, isValid, resetForm };
}
