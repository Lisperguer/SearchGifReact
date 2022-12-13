import { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    }
    setInputValue('')
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit} aria-label='form'>
      <input
        placeholder="Escribe aquí el gif que deseas buscar"
        type="text"
        onChange={onInputChange}
        value={inputValue}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
