import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({dataId, onChecked, id, name, value}) => {
  return (
    <input data-id={dataId} onChange={onChecked} className="checkbox" type='checkbox' id={id} name={name} value={value} />
  )
};

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  dataId: PropTypes.number
};

export default Checkbox
