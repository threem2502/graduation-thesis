import { PureComponent } from "react";
import SearchBar from "../Searchbar";
import { Button } from "antd";
import './index.scss'
class AppHeader extends PureComponent {
  handleLogin() {

  }

  goHome() {
    window.location.href= '/'
  }
  render() {
    return (
      <div id="header-containers">
        <div className="app-logo" onClick={this.goHome}>
          <img src="/assets/image/logo.png" alt="logo"/>
        </div>
        <SearchBar/>
        <div className="user-button">
          <Button 
          onClick={this.handleLogin}
          size="large"
          style={{width: 120, color: '#4007E4', background:'#F2FAF8', fontWeight: 700}}
          >Đăng nhập</Button>
          
          <Button 
          onClick={this.handleLogin}
          type="primary"
          size="large"
          style={{width: 120, color: 'white', background:'#FF7B00', fontWeight: 700}}
          >Đăng kí</Button>
        </div>
      </div>
    )
  }

}

export default AppHeader;