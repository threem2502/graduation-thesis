import {    PureComponent } from "react";
import './index.scss';
import { Button, Rate } from "antd";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
class ReviewAIView extends PureComponent {

    componentDidMount() {
        this.lightbox = new PhotoSwipeLightbox({
            gallery: '#gallery-img-product',
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        this.lightbox.init();
    }
    componentWillUnmount() {
        if (this.lightbox) {
            this.lightbox.destroy();
        }
    }
    renderMorePhoto() {
        // Render photo thumbnails inside this function
        return (
            <>
                <a href="/assets/image/image1.png" data-pswp-width="600" data-pswp-height="600" target="_blank" rel="noopener noreferrer">
                    <img className="thumbnail-img" src="/assets/image/image1.png" alt="Thumbnail 1" />
                </a>
                <a href="/assets/image/image2.jpeg" data-pswp-width="600" data-pswp-height="600" target="_blank" rel="noopener noreferrer">
                    <img className="thumbnail-img" src="/assets/image/image2.jpeg" alt="Thumbnail 2" />
                </a>
                <a href="/assets/image/image3.jpeg" data-pswp-width="600" data-pswp-height="600" target="_blank" rel="noopener noreferrer">
                    <img className="thumbnail-img" src="/assets/image/image3.jpeg" alt="Thumbnail 2" />
                </a>
            </>
        );
    }

    render() {
        return (
            <div className="review-ai-containers">
                <div className="image-col">
                    <div className="product-img">
                        <img className="" src="/assets/image/image1.png" alt="Product Image"/>
                    </div>
                    <div className="more-product-img" id="gallery-img-product">
                        {this.renderMorePhoto()}
                    </div>
                </div>
                <div className="review-col">
                    <span className="point-review">4.8</span>
                    <Rate style={{color: '#4007E4'}} disabled allowHalf defaultValue={4.8} />
                    <span className="ai-review">Rất tốt, đáng mua</span>
                    <Button className="buy-btn">Mua hàng</Button>
                </div>
                <div className="info-col">
                    <span className="product-name">bọt rửa tay lifebuoy</span>
                    <span className="product-brand">lifebuoy</span>
                    <span className="product-type">Dung dịch sát khuẩn tay</span>
                    <span className="product-price">100.000đ</span>
                    <span className="product-property">Size: 250ml</span>
                    <span className="product-describe">Giới thiệu dòng sản phẩm Bọt rửa tay và Bọt tắm Lifebuoy HOÀN TOÀN MỚI, với công nghệ tạo bọt sánh mịn từ Nhật Bản và bổ sung gấp 10 lần chất dưỡng ẩm cùng hương Lô Hội Thiên Nhiên, giúp bảo vệ khỏi 99,9% vi khuẩn mà vẫn dịu nhẹ chăm sóc trên da, an toàn với cả làn da nhạy cảm của bé yêu.</span>
                </div>
            </div>
        );
    }
}

export default ReviewAIView;
