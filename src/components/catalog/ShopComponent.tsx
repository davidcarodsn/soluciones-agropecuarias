import React, { useState } from 'react'
import { CardCartComponent } from './CardCartComponent.js'

interface CatalogData {
  img: string,
  title: string;
  price:  string;
  description: string;
  productType: string;
}

interface NavData {
  name: string;
  filter: string;
  products: string[];
}

const herbicidasDataMock: CatalogData[] = [
  {
    img: '01.png',
    title: 'Bio-Forge',
    price: '200',
    description: 'Un potente herbicida',
    productType: 'herbicida',
  }, 
  {
    img: '02.png',
    title: 'Mulan',
    price: '500',
    description: 'Un potente herbicida',
    productType: 'herbicida',
  }
];

const navData: NavData[]= [
  {
    name:'Herbicidas',
    filter: 'herbicida',
    products: herbicidasDataMock.map(product => product.title) 
  }
]

const allData: CatalogData[] = [...herbicidasDataMock];

const ShopComponent = () => {
  const [catalogData,  setCatalogData] = useState<CatalogData[] | undefined>(allData);
    
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
                <div className="shop-product-wrap grids row justify-content-center">
                  {
                    catalogData?.map((data, i) => {
                      return (
                        <CardCartComponent 
                          key={i}  
                          title={data.title} 
                          description={data.description} 
                          price={data.price}
                          img={data.img}  
                        />
                      )
                    })
                  }
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-7 col-12">
              <aside>
                <div className="widget widget-category">
                  <div className="widget-header">
                    <h5>Productos</h5>
                  </div>
                  <div className="widget-wrapper">
                    <ul className="agri-ul shop-menu">
                      {
                        navData.map(link => {
                          return (
                            <li>
                              <a style={{ cursor: "pointer" }}>{link.name}</a>
                              <ul className="agri-ul shop-submenu">
                                <li onClick={() => handleFilterNav(link.filter, false)} style={{ cursor: "pointer" }}><a>Mostrar todos los {link.name}</a></li>
                                {
                                  link.products.map(product => {
                                    return (<li onClick={()=> handleFilterNav(product, true)} style={{ cursor: "pointer" }}><a>{product}</a></li>)
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
