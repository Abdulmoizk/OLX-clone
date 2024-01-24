import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchInput = () => (
  <Space direction="vertical">
    <Search
      placeholder="Find cars, Mobile phones and more ..."
      onSearch={onSearch}
      enterButton
      style={{
        width: "100%",
        border: "2px solid black",
        borderRadius: "9px"
      }}
      className="searchinput"
      size="large"
    />
  </Space>
);
export default SearchInput;
