import React from "react";
import { db } from "src/util/catalogData";
import { ProductTypes } from "src/util/types";

const mainNavData = [
  {
    name: 'Herbicidas',
    filter: ProductTypes.HERBICIDAS,
    length: db.filter(product => product.filters.includes(ProductTypes.HERBICIDAS)).length,
  },
  {
    name: 'Fertilizantes',
    filter: ProductTypes.FERTILIZANTES,
    length: db.filter(product => product.filters.includes(ProductTypes.FERTILIZANTES)).length,
  },
  {
    name: 'Insecticidas',
    filter: ProductTypes.INSECTICIDAS_GENERAL,
    length: db.filter(product => product.filters.includes(ProductTypes.INSECTICIDAS_GENERAL)).length,
  },
  {
    name: 'Fungicidas',
    filter: ProductTypes.FUNGICIDAS,
    length: db.filter(product => product.filters.includes(ProductTypes.FUNGICIDAS)).length,
  },
  {
    name: 'Hermicidas',
    filter: ProductTypes.HERMICIDAS,
    length: db.filter(product => product.filters.includes(ProductTypes.HERMICIDAS)).length,
  },
  {
    name: 'Semilla',
    filter: ProductTypes.SEMILLA,
    length: db.filter(product => product.filters.includes(ProductTypes.SEMILLA)).length,
  },
];

const secondaryNavData = [

]

export const ShopNavComponentNew = ({ handleFilterNav }: any) => {
  return (
    <>
      <div className="widget widget-category">
        <div className="widget-header">
          <h5>Tipos de productos</h5>
        </div>
        <ul className="agri-ul widget-wrapper">
          <li>
            <a href="#" className="d-flex flex-wrap justify-content-between">
              <span>
                <i className="icofont-double-right"></i>Ver Todos
              </span>
              <span>({db.length})</span>
            </a>
          </li>
          { mainNavData.map(data => {
            return (
              <li>
                <a href="#" className="d-flex flex-wrap justify-content-between">
                  <span>
                    <i className="icofont-double-right"></i>{data.name}
                  </span>
                  <span>({ data.length })</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="widget widget-category">
        <div className="widget-header">
          <h5>Formulacion</h5>
        </div>
        <ul className="agri-ul widget-wrapper">
          <li>
            <a href="#" className="d-flex flex-wrap justify-content-between">
              <span>
                <i className="icofont-double-right"></i>Ver Todos
              </span>
              <span>({db.length})</span>
            </a>
          </li>
          { mainNavData.map(data => {
            return (
              <li>
                <a href="#" className="d-flex flex-wrap justify-content-between">
                  <span>
                    <i className="icofont-double-right"></i>{data.name}
                  </span>
                  <span>({ data.length })</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="widget widget-category">
        <div className="widget-header">
          <h5>Principio Activo</h5>
        </div>
        <ul className="agri-ul widget-wrapper">
          <li>
            <a href="#" className="d-flex flex-wrap justify-content-between">
              <span>
                <i className="icofont-double-right"></i>Ver Todos
              </span>
              <span>({db.length})</span>
            </a>
          </li>
          { mainNavData.map(data => {
            return (
              <li>
                <a href="#" className="d-flex flex-wrap justify-content-between">
                  <span>
                    <i className="icofont-double-right"></i>{data.name}
                  </span>
                  <span>({ data.length })</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
};
