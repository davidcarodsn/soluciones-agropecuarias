import React, { FC, useEffect, useState } from 'react';
import { getPlaceholder } from 'src/util/getPlaceholder';
import { PATH_ROUTES } from 'src/util/pages';

interface CardCartComponentProps {
  title: string;
  description: string;
  img: string | undefined;
  filter: string[];
  isProductDetail?: boolean;
  formulacion?: string;
  isActiveSubstance?: boolean
}

const CardButton = ({ link }: {link: string}) => (
  <a 
    href={`/${PATH_ROUTES.PRODUCTS_PATH}/${link}`}
    style={{ width: '120px', height: '30px', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0', border: 'none' }}
    className='lab-btn'
  >
    <span>Consultar</span>
  </a>
)

export const CardCartComponent:FC<CardCartComponentProps> = ({ title,  description, img , filter, formulacion, isActiveSubstance }) => {
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
              ><i className="icofont-eye"></i></a>
          </div>
        </div>
        <div className="product-content row">
          <div className='col-12' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Nuevo</span>
            <span style={{ textTransform: 'capitalize', color: '#78bd41' }}>{filter[0]}</span>
          </div>
          <h6 className='col-12 mt-2' style={{ fontWeight: '450', textAlign: 'start' }}>
            <a href={`/${PATH_ROUTES.PRODUCTS_PATH}/${title.split(' ').join('')}`}>
              {title} 
              {isActiveSubstance && <span style={{ fontWeight: '350', color: 'gray', fontSize: '13px' }}> (Principio activo)</span>}
            </a>
          </h6>
          {
            formulacion && (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Formulación: { formulacion }</span>
              </div>
            )
          }
          {/* <div>
            <p style={{ overflow: 'hidden', whiteSpace: 'pre-wrap', textOverflow: 'ellipsis', width: '300px', height: '100px' }}>{description}</p>
          </div> */}
          <div className='col-12 mt-1'>
            <CardButton link={title.split(' ').join('')} />
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
            <CardButton link={title.split(' ').join('')} />
          </div>
        </div>
      </div>
    </div>
  )
}
