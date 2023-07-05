import React, { FC, useState } from "react";
import type { ProductData } from "../../util/types";

interface DescriptionReviewsSectionProps {
  productSelected: ProductData;
}

export const DescriptionReviewsSection: FC<DescriptionReviewsSectionProps> = ({
  productSelected,
}) => {
  const [isDescritpionActive, setIsDescriptionActive] = useState<boolean>(true);

  const handleChangeWindow = (newState: boolean) => { setIsDescriptionActive(newState) };
  return (
    <div className="review">
      {/* <ul className="agri-ul review-nav">
        <li className={`desc ${isDescritpionActive && "active"}`} onClick={() => handleChangeWindow(true)} data-target="description-show">
          Description
        </li>
        <li className={`rev ${!isDescritpionActive && "active"}`} onClick={() => handleChangeWindow(false)} data-target="review-content-show">
          Reviews
        </li>
      </ul> */}
      <div className={`review-content ${isDescritpionActive ? " description-show" : "review-content-show"}`}>
        <div className="review-showing">
          <ul className="agri-ul content">
            <li>
              <div className="post-thumb">
                <img src="assets/images/team/01.jpg" alt="shop" />
              </div>
              <div className="post-content">
                <div className="entry-meta">
                  <div className="posted-on">
                    <a href="#">Britney Doe</a>
                    <p>Posted on December 25, 2017 at 6:57 am</p>
                  </div>
                  <div className="rating">
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
                <div className="entry-content">
                  <p>
                    Enthusiast build innovativ initiatives before lonterm
                    high-impact awesome theme seo psd porta monetize covalent
                    leadership after without resource.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="post-thumb">
                <img src="assets/images/team/02.jpg" alt="shop" />
              </div>
              <div className="post-content">
                <div className="entry-meta">
                  <div className="posted-on">
                    <a href="#">Jonathan Doe</a>
                    <p>Posted on December 25, 2017 at 6:57 am</p>
                  </div>
                  <div className="rating">
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
                <div className="entry-content">
                  <p>
                    Enthusiast build innovativ initiatives before lonterm
                    high-impact awesome theme seo psd porta monetize covalent
                    leadership after without resource.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="post-thumb">
                <img src="assets/images/team/03.jpg" alt="shop" />
              </div>
              <div className="post-content">
                <div className="entry-meta">
                  <div className="posted-on">
                    <a href="#">Mack Zucky</a>
                    <p>Posted on December 25, 2017 at 6:57 am</p>
                  </div>
                  <div className="rating">
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
                <div className="entry-content">
                  <p>
                    Enthusiast build innovativ initiatives before lonterm
                    high-impact awesome theme seo psd porta monetize covalent
                    leadership after without resource.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="post-thumb">
                <img src="assets/images/team/04.jpg" alt="shop" />
              </div>
              <div className="post-content">
                <div className="entry-meta">
                  <div className="posted-on">
                    <a href="#">Jordi Albae</a>
                    <p>Posted on December 25, 2017 at 6:57 am</p>
                  </div>
                  <div className="rating">
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
                <div className="entry-content">
                  <p>
                    Enthusiast build innovativ initiatives before lonterm
                    high-impact awesome theme seo psd porta monetize covalent
                    leadership after without resource.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>Add a Review</h5>
              </div>
              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input type="text" name="name" placeholder="Full Name" />
                </div>
                <div className="col-md-4 col-12">
                  <input type="text" name="email" placeholder="Email Adress" />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="rating-title">Your Rating :</span>
                    <div className="rating">
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea rows={8} placeholder="Type Here Message"></textarea>
                </div>
                <div className="col-12">
                  <button className="defult-btn" type="submit">
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="description">
          <p>
            {/* {productSelected.description} */}
          </p>
          <div className="post-item">
            {/* <div className="post-thumb">
              <img
                src={`/assets/images/product/${productSelected.img}.png`}
                alt="shop"
              />
            </div> */}
            <div className="post-content">
              <ul className="agri-ul">
                {productSelected.features?.action && (<li><strong>Acción: </strong>{productSelected.features?.action}</li>)}
                {productSelected.features?.applicationMethod && (<li><strong>Mecanismo de acción: </strong>{productSelected.features?.applicationMethod}</li>)}
                {productSelected.features?.cultivos && (<li><strong>Cultivos: </strong>{productSelected.features?.cultivos}</li>)}
                {productSelected.features?.dosage && (<li><strong>Dosis: </strong>{productSelected.features?.dosage}</li>)}
              </ul>
            </div>
          </div>
          {
            productSelected.features?.usageRecommendations &&
            (
              <>
                <h5>Recomendaciones de uso</h5>
                <p>
                  {productSelected.features?.usageRecommendations}
                </p>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};
