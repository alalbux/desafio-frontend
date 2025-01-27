import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function FormInput({ labelText, buttonText }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input Value:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <TextField
        label={labelText}
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={handleInputChange}
        id="tracking-code-input"
        sx={styles.button}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={styles.button}
      >
        {buttonText}
      </Button>
    </form>
  );
}

const styles = {
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: 2,
    fontSize: '1rem',
  },
  input: {
    marginBottom: 2,
  },
};

export default FormInput;
