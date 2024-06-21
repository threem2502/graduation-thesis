import { Component } from "react";
import "./index.scss";

class AboutUsView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-us-wrapper">
        <div className="about-us-left">
          <span className="about-us-title">Về chúng tôi</span>
          <span className="about-us-text">
            Tại Review Comment, chúng tôi dùng sức mạnh cộng đồng của mình, cùng
            với trí tuệ nhân tạo để mang đến những lựa chọn tốt nhất đến với các
            thành viên của chúng tôi.
          </span>
        </div>
        <div className="about-us-right">
          <div className="about-us-content">
            <span className="about-us-title title-big">
              Khởi đầu của chúng tôi
            </span>
            <span className="about-us-text">
              Trong thế giới kỹ thuật số hiện đại ngày nay, người tiêu dùng liên
              tục bị tấn công dồn dập bởi vô số quảng cáo sản phẩm. Điều này có
              thể làm họ bị quá tải và hoang mang khi quyết định nhãn hàng nào
              xứng đáng với nhu cầu của mình.
            </span>
            <span className="about-us-text">
              Người tiêu dùng muốn được lắng nghe. Hiểu rõ điều này, Maëlle
              Pochat và Alexia Sichère muốn trao cho họ cơ hội để chia sẻ ý kiến
              của mình trong một cộng đồng được xác thực và hướng đến người tiêu
              dùng, mà ở đó, lợi ích được chia đều cho cả người mua hàng và các
              nhãn hàng. Vào tháng 5 năm 2024, Review Comment được ra đời. Hai
              nhà sáng lập là Nguyễn Đức Mạnh và Lê Thị Huế đã phát triển nền
              tảng này với 3 mục đích:
            </span>
            <ol>
              <li className="about-us-text">
                1. Trao quyền cho cộng đồng người tiêu dùng để họ chia sẻ những
                đánh giá khách quan và trung thực.
              </li>
              <li className="about-us-text">
                2. Giúp người tiêu dùng thu hẹp được lựa chọn mua sắm của họ.
              </li>
              <li className="about-us-text">
                3. Quảng bá các doanh nghiệp đánh giá cao tầm quan trọng của
                những đánh giá xác thực.
              </li>
            </ol>
          </div>

          <div className="about-us-content">
            <span className="about-us-title title-big">
              Tầm nhìn của chúng tôi
            </span>
            <span className="about-us-text">
              Khuếch trương tầm ảnh hưởng của những bài đánh giá từ người dùng,
              đồng thời, định hình lại cách làm marketing cho sản phẩm của các
              nhãn hàng trên khắp thế giới.
            </span>
            <span className="about-us-text">
              Tầm nhìn của chúng tôi là tạo ra một nền tảng lớn mạnh toàn cầu,
              mà ở đó, mọi người có thể tham khảo để đưa ra quyết định mua hàng
              cho mình, đồng thời cũng là nơi khiến họ thỏa mãn về sản phẩm.
              Ngày nay, với lượng thông tin được cung cấp, xem quảng cáo không
              còn là cách đủ để người mua đưa ra quyết định mua hàng nữa rồi.
              Với Try and Review, chúng tôi hy vọng xây dựng một nền tảng giúp
              người dùng đúng đắn trong việc đưa ra những lựa chọn mua hàng tốt
              nhất. Cùng với đó, hy vọng tác dụng của hình thức “truyền miệng”
              sẽ được các nhãn hàng tôn trọng và được đưa vào quảng cáo trong
              tương lai.
            </span>
          </div>

          <div className="about-us-content">
            <span className="about-us-title title-big">
              Giá trị của chúng tôi
            </span>
            <span className="about-us-title">Tính xác thực</span>
            <span className="about-us-text">
              Try and Review giúp người tiêu dùng hiểu được đánh giá và ý kiến
              từ người mua hàng như bạn. Chúng tôi khuyến khích đưa ra phản hồi
              xác thực, nên đó là lý do cộng đồng người tiêu dùng toàn cầu của
              chúng tôi trở thành nơi trải nghiệm sản phẩm và nhãn hàng đáng tin
              cậy.
            </span>
            <span className="about-us-title">Tính minh bạch</span>
            <span className="about-us-text">
              Chúng tôi hiểu được rằng, người khác có thể tin tưởng nguồn đánh
              giá sản phẩm cũng như tính hợp pháp của nội dung được đăng tải là
              điều rất quan trọng. Tại Try and Review, chúng tôi tạo điều kiện
              để bài đánh giá được thưc hiện hoàn toàn minh bạch bằng cách cho
              phép người tiêu dùng gia nhập cộng đồng, mà ở đó, họ có thể thoải
              mái chia sẻ ý kiến của mình. Bằng cách này, các thành viên khác
              trên Try and Review tiếp nhận thêm nhiều thông tin khi đưa ra
              quyết định mua hàng. Chúng tôi cũng tuân theo một bộ Quy tắc cụ
              thể để đảm bảo rằng, tất cả đánh giá được đăng lên đều phù hợp,
              xác đáng, hữu ích và nguyên bản. Đọc quy tắc đánh giá của chúng
              tôi tại đây.
            </span>
            <span className="about-us-title">Cộng đồng</span>
            <span className="about-us-text">
              Sẽ không có Try and Review nếu chúng tôi không có cộng đồng trực
              tuyến người dùng, người đăng ký và các nhãn hàng. Với việc cung
              cấp hàng ngàn đánh giá tại nhà, người dùng đến với chúng tôi để
              tham khảo thông tin và mua hàng tốt hơn. Người đăng ký thử nghiệm
              sản phẩm và chia sẻ đánh giá của họ để giúp mọi người mua sắm
              thông minh hơn. Những đánh giá này được xem là thông tin vô giá để
              phát triển sản phẩm tốt hơn nữa cho thị trường. Nhãn hàng hợp tác
              với chúng tôi để tăng độ nhận diện, xây dựng danh tiếng trên cộng
              đồng trực tuyến và tiếp cận nguồn khách hàng mới.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUsView;
