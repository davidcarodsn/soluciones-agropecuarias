import React, { FC, useState } from "react";
import type { ProductData } from "../../util/types";
import { db } from "src/util/catalogData";
import { CardCartComponent } from "@components/catalog/CardCartComponent";

interface RelatedProductsSectionProps {
  productSelected: ProductData;
}

export const RelatedProductsSection: FC<RelatedProductsSectionProps> = ({
  productSelected,
}) => {
  console.log(productSelected.filters)
  return (
    <div className="shop-product-wrap row">
      <h5>Productos Relacionados</h5>
      {
        db.filter((product: ProductData) => (product.filters.includes(productSelected.filters[0])) && !(product.name === productSelected.name))
        .map((relatedProduct: ProductData, i: number) => {
          if (i > 5) {
            return;
          }
          return (
            <CardCartComponent 
              description={relatedProduct.name} 
              filter={relatedProduct.filters} 
              img={relatedProduct.img} 
              title={relatedProduct.name} 
              key={`${i}-related-card`}
              isProductDetail={true}
            />
          )
        })
      }
    </div>
  );
};
