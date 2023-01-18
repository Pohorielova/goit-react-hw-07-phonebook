import { Box } from 'components/Box';
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Box as="div" flexDirection="column">
    <Label htmlFor="" >
      Filter{' '}
    </Label>
    <Input type="text" value={value} onChange={onChange} />
  </Box>
);
export default Filter;
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
