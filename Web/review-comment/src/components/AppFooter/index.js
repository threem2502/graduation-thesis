import { Component } from "react";
import './index.scss';
import { Input, Button, Space } from "antd";
import { FacebookLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";

class AppFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer-containers">
        <div className="footer-contact">
          <div className="app-logo">
            <img src="/assets/image/logo.png" alt="logo" />
          </div>
          <div className="footer-contact-right">
            <h3 className="contact-title">Hãy giữ liên lạc nhé</h3>
            <p className="contact-description">Đăng ký nhận tin để được cập nhật các thử nghiệm sắp tới của chúng tôi</p>
                <Space.Compact style={{width: 450 }}>
                <Input className="contact-input" placeholder="Địa chỉ email" type="email"/>
                <Button className="btn-submit" type="sumary">ĐĂNG KÝ</Button>
                </Space.Compact>
          </div>
        </div>
        <div className="footer-content">
            <div className="footer-content-col">
              <div className="footer-logo">
                <img src="/assets/image/logo_white.png"></img>
              </div>
            </div>
            <div className="social-link">
              <FacebookLogo size={40} />
              <TwitterLogo size={40} />
              <LinkedinLogo size={40} />
            </div>
            <div className="footer-content-col">
              <a className="footer-content-txt">VỀ CHÚNG TÔI</a>
              <a className="footer-content-txt">REVIEW COMMENT FOR BRAND</a>
            </div>
            <div className="footer-content-col">
              <a className="footer-content-txt">HƯỚNG DẪN</a>
              <a className="footer-content-txt">LIÊN HỆ</a>
            </div>
        </div>
      </div>
    );
  }
}


export default AppFooter;