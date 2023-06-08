import React, { FC, useEffect } from 'react'


export const ProductsNav= ({ productsData }: any) => {
  return (
    <ul className="agri-ul product-filter-name">
      <li data-filter="*" className="active">Ver todo</li>
      { 
        productsData?.map((buttonData:any, i:number ) => {
          return <li key={i} data-filter={`.${buttonData.filter}`}>{buttonData.name}</li>
        })
      }
    </ul>
  )
}
 