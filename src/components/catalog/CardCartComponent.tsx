import React, { FC, useEffect, useState } from 'react';
import { getPlaceholder } from 'src/util/getPlaceholder';

interface CardCartComponentProps {
  title: string;
  description: string;
  img: string | undefined;
  filter: string[];
  isProductDetail?: boolean;
}

export const CardCartComponent:FC<CardCartComponentProps> = ({ title,  description, img , filter, isProductDetail = false}) => {
  const [ image, setImage ] = useState<string>('solubles');
  const [ show, setShow ] = useState('block');

  useEffect(() => {
    if (img) {
      setImage(img);
    } else {
      setImage(getPlaceholder(filter));
    }
  }, [img])

  useEffect(() => {
    isProductDetail && setShow('none')
  }, [isProductDetail])

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="product-item">
        <div className="product-thumb">
          <img src={`/assets/images/product/${image}/${image}.png`} alt="item" />
          <div className="product-action-link">
            <a
              href={`/products/${title.split(' ').join('')}`}
              // data-rel="lightcase"
              ><i className="icofont-eye"></i></a>
          </div>
        </div>
        <div className="product-content">
          <h6><a href={`/products/${title.split(' ').join('')}`}>{title}</a></h6>
          <p style={{ paddingLeft: '10px', maxWidth: '200px', maxHeight: '40px', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            {description}
          </p>
        </div>
      </div>
      <div className="product-list-item" style={{ display: show  }}>
        <div className="product-thumb">
          <img src={ `/assets/images/product/${image}/${image}.png`} alt="item" />
          <div className="product-action-link">
            <a
              href={`/products/${title.split(' ').join('')}`}
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
