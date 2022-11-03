import React from "react";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const ProductCard = ({item}) => {

  const price = new Intl.NumberFormat ('id-ID', {
    style : 'currency',
    currency : 'IDR'
  }).format(item.price)

  return (
    <Col lg="3" md="4">
      <div className="product_item">
        <div className="produk_img">
          <motion.img whileHover={{scale : 0.9}} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product_info" >
          <h3 className="product_name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
          <span>{item.category}, {item.color}</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">{price}</span>
          <motion.span whileTap={{scale : 1.2}}>
            <i class="ri-add-line"></i>
          </motion.span>
        </div>  
      </div>
    </Col>
  );
};

export default ProductCard;
