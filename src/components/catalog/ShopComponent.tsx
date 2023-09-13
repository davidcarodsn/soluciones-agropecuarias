import React, { FC, useEffect, useState } from 'react';
import { CardCartComponent } from './CardCartComponent.js';
import type { ProductData, NavData } from 'src/util/types.js';
import { db } from 'src/util/catalogData';
import { SearcherComponent } from './SearcherComponent.js';
import { ShopNavComponentNew } from './ShopNavComponentNew.js';
import { ShopNavComponent } from './ShopNavComponent.js';

interface ShopComponentProps {
  filter: string | undefined;
}

const ShopComponent:FC<ShopComponentProps> = ({ filter }) => {
  const [ProductData,  setProductData] = useState<ProductData[] | undefined>(db);
    
  const handleFilterNav = (productType: string, isName: boolean) => {
    let newData: ProductData[];
    if (isName) {
      newData = db.filter(product => product.name === productType)
    } else {
      newData = db.filter(product => product.filters.includes(productType))
    }

    setProductData(newData);
  }

  useEffect(() => {
    if (filter) {
      handleFilterNav(filter, false);
    }    
  }, [filter])

  return (
    <div className="shop-page padding-tb">
      <div className="container">
        <div className="section-wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-7 col-12">
              <aside>
                <SearcherComponent setProductData={setProductData} allData={db} />
                {/* <ShopNavComponent handleFilterNav={handleFilterNav} /> */}
                <ShopNavComponentNew handleFilterNav={handleFilterNav} />
              </aside>
            </div>
            <div className="col-lg-9 col-12">
              <article>
              <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{ProductData?.length} Resultados de {db.length}</p>
                  <div className="product-view-mode">
                      <a className="active" data-target="grids"><i className="icofont-ghost"></i></a>
                      <a data-target="lists"><i className="icofont-listing-box"></i></a>
                  </div>
              </div>
                <div className="shop-product-wrap grids row justify-content-center">
                  {
                    ProductData?.map((data, i) => {
                      return (
                        <CardCartComponent 
                          key={i}  
                          title={data.name} 
                          description={data.specs?.description ?? ''} 
                          img={data.img}
                          filter={data.filters}  
                          formulacion={data.formulacion}
                          isActiveSubstance={data.isActiveSubstance}
                        />
                      )
                    })
                  }
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopComponent;
