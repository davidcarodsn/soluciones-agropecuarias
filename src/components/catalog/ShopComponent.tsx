import React, { FC, useEffect, useState } from 'react';
import { CardCartComponent } from './CardCartComponent.js';
import type { ProductData, NavData } from 'src/util/types.js';
import { db } from 'src/util/catalogData';
import { SearcherComponent } from './SearcherComponent.js';
import { ShopNavComponentNew } from './ShopNavComponentNew.js';
import { ShopNavComponent } from './ShopNavComponent.js';
import ReactPaginate from "react-paginate";
import '../../../public/assets/css/paginationBlogPosts.css';
interface ShopComponentProps {
  filter: string | undefined;
}

const ShopComponent: FC<ShopComponentProps> = ({ filter }) => {
  const [ProductData, setProductData] = useState<ProductData[] | undefined>(db);

  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 6; // Número de publicaciones por página

  //TODO:refactor function by responsibility 
  const handleFilterNav = (productType: string, isName: boolean) => {
    let newData: ProductData[];
    if (isName) {
      newData = db.filter(product => product.name === productType)
    } else {
      newData = db.filter(product => product.filters.includes(productType))
    }
    setProductData(newData);
  }

  const updateFilteredData = (filteredData: ProductData[]) => {
    setProductData(filteredData);
  };


  const getCurrentPagePosts = () => {
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return ProductData?.slice(startIndex, endIndex);
  };

  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

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
                <ShopNavComponentNew handleFilterNav={handleFilterNav} updateFilteredData={updateFilteredData} />
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
                    getCurrentPagePosts()?.map((data, i) => {
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
              <div className="" style={{ height: '150px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ReactPaginate
                  pageCount={Math.ceil(ProductData?.length ?? 0 / postsPerPage)}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={1}
                  onPageChange={(selected) => handlePageChange(selected.selected)}
                  containerClassName="pagination"
                  activeClassName="active"
                  nextLabel=">"
                  previousLabel="<"
                  // pageClassName="page-item"
                  pageLinkClassName="page-num"
                  previousLinkClassName="page-num"
                  // previousClassName="page-item"
                  nextLinkClassName="page-num"
                  breakLabel="..."
                  // breakClassName="page-item"
                  // breakLinkClassName="page-link"
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default ShopComponent;
