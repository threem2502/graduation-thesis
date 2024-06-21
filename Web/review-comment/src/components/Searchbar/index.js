import React, { Component } from "react";
import { Outlined } from "@ant-design/icons";
import { Input } from "antd";
import './index.scss'
class SearchBar extends Component {
  onSearch() {
    
  }
  render() {
    const {Search} = Input
    return (
      <Search 
      className="search-input"
      placeholder="Tìm kiếm" 
      onSearch={this.onSearch} 
      enterButton 
      style={{width: 500}}/>
    )
  }
}

export default SearchBar;