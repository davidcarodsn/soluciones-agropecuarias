import React, { FC, useEffect, useState } from 'react';
import { getPlaceholder } from 'src/util/getPlaceholder';
import { PATH_ROUTES } from 'src/util/pages';

interface CardCartComponentProps {
  title: string;
  description: string;
  img: string | undefined;
  filter: string[];
  isProductDetail?: boolean;
}

export const CardCartComponent:FC<CardCartComponentProps> = ({ title,  description, img , filter }) => {
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
              href={`/${PATH_ROUTES.PRODUCTS_PATH}/${title.split(' ').join('')}`}
              // data-rel="lightcase"
              ><i className="icofont-eye"></i></a>
          </div>
        </div>
        <div className="product-content">
          <h6><a href={`/${PATH_ROUTES.PRODUCTS_PATH}/${title.split(' ').join('')}`}>{title}</a></h6>
          <p style={{ paddingLeft: '10px', maxWidth: '200px', maxHeight: '40px', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            {description}
          </p>
          <div>
            <button type='button' style={{ width: '120px', height: '50px', fontSize: '15px', textAllign: 'center', padding: '0', border: 'none', color: '#fff' }} className='lab-btn'>
              <span>Consultar</span>
            </button>
          </div>
        </div>
      </div>
      <div className="product-list-item">
        <div className="product-thumb">
          <img src={ `/assets/images/product/${image}/${image}.png`} alt="item" />
          <div className="product-action-link">
            <a
              href={`/${PATH_ROUTES.PRODUCTS_PATH}/${title.split(' ').join('')}`}
              ><i className="icofont-eye"></i>
            </a>
          </div>
        </div>
        <div className="product-content">
          <h6><a href="#">{title}</a></h6>
          <p style={{ maxHeight: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{description}</p>
          <div>
            <button type='button' style={{ width: '120px', height: '50px', fontSize: '15px', textAllign: 'center', padding: '0', border: 'none', color: '#fff' }} className='lab-btn'>
              <span>Consultar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
