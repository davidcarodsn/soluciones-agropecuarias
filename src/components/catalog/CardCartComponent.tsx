import React, { FC, useEffect, useState } from 'react';
import { getPlaceholder } from 'src/util/getPlaceholder';

interface CardCartComponentProps {
  title: string;
  description: string;
  img: string | undefined;
  filter: string[];
}

export const CardCartComponent:FC<CardCartComponentProps> = ({ title,  description, img , filter}) => {
  const [ image, setImage ] = useState<string>('solubles');

  useEffect(() => {
    if (img) {
      setImage(img);
    } else {
      setImage(getPlaceholder(filter));
    }
  }, [img])

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="product-item">
        <div className="product-thumb">
          <img src={`/assets/images/product/${image}/${image}.png`} alt="item" />
          <div className="product-action-link">
            <a
              href={`/products/${title}`}
              // data-rel="lightcase"
              ><i className="icofont-eye"></i></a>
          </div>
        </div>
        <div className="product-content">
          <h6><a href="#">{title}</a></h6>
        </div>
      </div>
      <div className="product-list-item">
        <div className="product-thumb">
          <img src={ `/assets/images/product/${image}/${image}.png`} alt="item" />
          <div className="product-action-link">
            <a
              href={`/products/${title}`}
              ><i className="icofont-eye"></i>
            </a>
          </div>
        </div>
        <div className="product-content">
          <h6><a href="#">{title}</a></h6>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
