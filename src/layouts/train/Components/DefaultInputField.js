import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types'; // Import PropTypes

function DefaultInputField({ setting, value, onChange }) {
  return (
    <TextField
      id={setting.name}
      name={setting.name}
      label={setting.name}
      type={setting.type}
      value={value}
      onChange={onChange}
      // other props
    />
  );
}

// Define PropTypes
DefaultInputField.propTypes = {
  setting: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DefaultInputField;
