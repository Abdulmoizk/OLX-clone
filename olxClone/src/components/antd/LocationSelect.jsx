import React, { useState } from "react";
import { Select } from "antd";
const OPTIONS = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
const LocationSelect = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  return (
    <div>
      <Select
        mode="single"
        placeholder="Select location"
        value={selectedItems}
        onChange={setSelectedItems}
        style={{
          width: "100%",
          border: "2px solid black",
          borderRadius: "9px"
        }}
        size="large"
        options={filteredOptions.map((item) => ({
          value: item,
          label: item,
        }))}
      />
    </div>
  );
};
export default LocationSelect;
