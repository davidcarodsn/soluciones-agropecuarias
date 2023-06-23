import React, { useState } from 'react';
import { CardCartComponent } from './CardCartComponent.js';
import type { CatalogData, NavData } from 'src/util/types.js';
import { fungicidasDataMock, herbicidasDataMock, hermicidasDataMock, insecticidasDataMock, semillasDataMock } from 'src/util/catalogData.js';
import { SearcherComponent } from './SearcherComponent.js';

const navData: NavData[]= [
  {
    name:'Herbicidas',
    filter: 'herbicidas',
    products: herbicidasDataMock.map(product => product.title) 
  },
  {
    name:'Insecticidas',
    filter: 'insecticidas',
    products: insecticidasDataMock.map(product => product.title) 
  },
  {
    name:'Fungicidas',
    filter: 'fungicidas',
    products: fungicidasDataMock.map(product => product.title) 
  },
  {
    name:'Semillas',
    filter: 'semillas',
    products: semillasDataMock.map(product => product.title) 
  },
  {
    name:'Hermicidas',
    filter: 'hermicidas',
    products: hermicidasDataMock.map(product => product.title) 
  },
]

const allData: CatalogData[] = [
  ...herbicidasDataMock, 
  ...insecticidasDataMock, 
  ...semillasDataMock,
  ...fungicidasDataMock,
  ...hermicidasDataMock
];

const initialState: CatalogData[] = [
  ...herbicidasDataMock, 
  ...insecticidasDataMock, 
  ...semillasDataMock,
  ...fungicidasDataMock,
  ...hermicidasDataMock
]

const ShopComponent = () => {
  const [catalogData,  setCatalogData] = useState<CatalogData[] | undefined>(initialState);
    
  const handleFilterNav = (productType: string, isName: boolean) => {
    let newData: CatalogData[];
    if (isName) {
      newData = allData.filter(product => product.title === productType)
    } else {
      newData = allData.filter(product => product.productType === productType)
    }

    setCatalogData(newData);
  }

  return (
    <div className="shop-page padding-tb">
      <div className="container">
        <div className="section-wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-12">
              <article>
              <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{catalogData?.length} Resultados de {allData.length}</p>
                  <div className="product-view-mode">
                      <a className="active" data-target="grids"><i className="icofont-ghost"></i></a>
                      <a data-target="lists"><i className="icofont-listing-box"></i></a>
                  </div>
              </div>
                <div className="shop-product-wrap grids row justify-content-center">
                  {
                    catalogData?.map((data, i) => {
                      return (
                        <CardCartComponent 
                          key={i}  
                          title={data.title} 
                          description={data.description} 
                          img={`${data.img}`}  
                        />
                      )
                    })
                  }
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-7 col-12">
              <aside>
                <SearcherComponent setCatalogData={setCatalogData} allData={allData} />
                <div className="widget widget-category">
                  <div className="widget-header">
                    <h5>Productos</h5>
                  </div>
                  <div className="widget-wrapper">
                    <ul className="agri-ul shop-menu">
                      {
                        navData.map((link, i) => {
                          return (
                            <li key={i}>
                              <a style={{ cursor: "pointer" }}>{link.name}</a>
                              <ul className="agri-ul shop-submenu">
                                <li onClick={() => handleFilterNav(link.filter, false)} style={{ cursor: "pointer" }}><a>Mostrar todos los {link.name}</a></li>
                                {
                                  link.products.map((product, i) => {
                                    return (<li key={i} onClick={()=> handleFilterNav(product, true)} style={{ cursor: "pointer" }}><a>{product}</a></li>)
                                  })
                                }
                              </ul>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopComponent;
