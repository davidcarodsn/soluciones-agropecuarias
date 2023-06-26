import React, { useState } from 'react'
import type { CatalogData } from "src/util/types";
import { ProductsNav } from "./ProductsNav";
import { fungicidasDataMock, herbicidasDataMock, insecticidasDataMock, semillasDataMock } from "src/util/catalogData";

interface NavType {
  filter: string;
  name: string;
}

const allData:CatalogData[] = [
  herbicidasDataMock[0], 
  herbicidasDataMock[1], 
  insecticidasDataMock[0], 
  insecticidasDataMock[1], 
  fungicidasDataMock[0],
  fungicidasDataMock[1],
]

const ProductsComponent = () => {
  const navData: NavType[] = allData
    .map(product => (
      { 
        filter: product.productType, 
        name: product.productType[0].toUpperCase()+product.productType.substring(1),
      }
    ))
    .filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.filter === value.filter && t.name === value.name
      ))
    )
  
  return (
    <section className="product-section padding-tb" style={{backgroundColor: '#f7f7f7'}}>
    <div className="container">
      <div className="section-header wow fadeInUp" data-wow-delay="0.4s">
        <h3>Algunos de nuestros productos</h3>
        <p>Mire nuestro catálogo completo.</p>
        <a style={{ color: '#ffb11f' }} href="/catalog">Click aquí para ver catáogo completo.</a>
      </div>
      <div className="section-wrapper wow fadeInUp" data-wow-delay="0.5s">
        <ProductsNav productsData={navData}  /> 
        <div className="grid">
          {
            allData.map((img, i) => {
                return (
                  <div key={i} className={`product-item ${img.productType}`}>
                    <div className="product-inner">
                      <div className="product-thumb">
                        <img
                          src={`/assets/images/product/${img.img}.png`}
                          alt="product"
                        />
                      </div>
                      <div className="product-content">
                        <a href={`/products/catalog/${img.productType}`} style={{ fontSize: '25px' }} className="product-name">
                          {img.productType}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
            )
          }
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProductsComponent;
