import React, { useState } from 'react';
import { Select } from 'antd';
const OPTIONS = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta'];
const LocationSelect = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  return (
    <Select
      mode="single"
      placeholder="Select location"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{
        width: '100%',
      }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
};
export default LocationSelect;