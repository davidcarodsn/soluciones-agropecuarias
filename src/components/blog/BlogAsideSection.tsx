import React from "react";

export const BlogAsideSection = () => {
  return (
    <div className="col-lg-3 col-md-7 col-12">
      <aside>
        <div className="widget widget-author">
          <div className="widget-wrapper">
            <div className="admin-thumb">
              <img src="/assets/images/logo/circular-logo.png" alt="author" />
            </div>
            <div className="admin-content">
              <div className="scocial-media">
                <a href="https://www.facebook.com/solucionesagropecuariasintegrales" className="facebook">
                  <i className="icofont-facebook"></i>
                </a>
                <a href="https://www.instagram.com/felixmenendezsrl/" style={{ color: 'pink' }}>
                  <i className="icofont-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@lafarmaciadelcampo" style={{ color: 'red' }}>
                  <i className="icofont-youtube"></i>
                </a>
                <a href="https://linktr.ee/felixmemendezsrl" className="vimeo">
                  <i className="icofont-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="widget widget-post">
          <div className="widget-header">
            <h5>Recent Post</h5>
          </div>
          <ul className="agri-ul widget-wrapper">
            <li className="d-flex flex-wrap justify-content-between">
              <div className="post-thumb">
                <a href="blog-single.html">
                  <img src="assets/images/product/10.jpg" alt="product" />
                </a>
              </div>
              <div className="post-content">
                <a href="blog-single.html">
                  <h6>Conveniently utilize premier metho.</h6>
                </a>
                <p>04 February 2021</p>
              </div>
            </li>
            <li className="d-flex flex-wrap justify-content-between">
              <div className="post-thumb">
                <a href="blog-single.html">
                  <img src="assets/images/product/11.jpg" alt="product" />
                </a>
              </div>
              <div className="post-content">
                <a href="blog-single.html">
                  <h6>Seamlessly fashion customiz before.</h6>
                </a>
                <p>04 February 2021</p>
              </div>
            </li>
            <li className="d-flex flex-wrap justify-content-between">
              <div className="post-thumb">
                <a href="blog-single.html">
                  <img src="assets/images/product/12.jpg" alt="product" />
                </a>
              </div>
              <div className="post-content">
                <a href="blog-single.html">
                  <h6>Conveniently utilize premier metho.</h6>
                </a>
                <p>04 February 2021</p>
              </div>
            </li>
            <li className="d-flex flex-wrap justify-content-between">
              <div className="post-thumb">
                <a href="blog-single.html">
                  <img src="assets/images/product/13.jpg" alt="product" />
                </a>
              </div>
              <div className="post-content">
                <a href="blog-single.html">
                  <h6>Seamlessly fashion customiz before.</h6>
                </a>
                <p>04 February 2021</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="widget widget-instagram">
          <div className="widget-header">
            <h5>Chashi instagram</h5>
          </div>
          <ul className="agri-ul widget-wrapper d-flex flex-wrap justify-content-center">
            <li>
              <a href="#">
                <img src="assets/images/product/01.jpg" alt="product" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/images/product/02.jpg" alt="product" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/images/product/05.jpg" alt="product" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/images/product/06.jpg" alt="product" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
