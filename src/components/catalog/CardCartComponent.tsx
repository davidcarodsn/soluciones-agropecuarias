import React, { FC } from 'react';

interface CardCartComponentProps {
  title: string;
  price: string;
  description: string;
  img: string;
}

export const CardCartComponent:FC<CardCartComponentProps> = ({ title, price, description, img }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="product-item">
        <div className="product-thumb">
          <img src={`/assets/images/product/${img}`} alt="asd" />
          <div className="product-action-link">
            <a
              href={`/assets/images/product/${img}`}
              data-rel="lightcase"><i className="icofont-eye"></i></a
            >
          </div>
        </div>
        <div className="product-content">
          <h6><a href="#">{title}</a></h6>
          <h6>${price}</h6>
        </div>
      </div>
      <div className="product-list-item">
        <div className="product-thumb">
          <img src={`/assets/images/product/${img}`} alt="shope" />
          <div className="product-action-link">
            <a
              href={`/assets/images/product/${img}`}
              data-rel="lightcase"><i className="icofont-eye"></i></a
            >
          </div>
        </div>
        <div className="product-content">
          <h6><a href="#">{title}</a></h6>
          <h6>${price}</h6>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
