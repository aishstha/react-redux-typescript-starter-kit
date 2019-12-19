import React from 'react';

const DesignMain = () => (
  <div>
    <nav className="navbar">
      <a className="navbar__brand">
        <img
          src="https://dd7tel2830j4w.cloudfront.net/f1566859019672x307263271968271740/JFIOlogo_beta.svg"
          alt=""
          className="brand-logo"
        />
      </a>
      <ul className="navbar__menu navbar__menu--primary">
        <li className="menu-item">
          <a href="" className="menu-item-link">
            Dashboard
          </a>
        </li>
        <li className="menu-item">
          <a href="" className="menu-item-link">
            Ingredients
          </a>
        </li>
        <li className="menu-item">
          <a href="" className="menu-item-link">
            Products
          </a>
        </li>
        <li className="menu-item">
          <a href="" className="menu-item-link">
            Reports
          </a>
        </li>
      </ul>

      <ul className="navbar__menu navbar__menu--sec">
        <li className="menu-item">
          <a href="" className="menu-item-link">
            Knowledge Hub
          </a>
        </li>
        <li className="menu-item">
          <a href="" className="menu-item-link">
            Settings{' '}
          </a>
        </li>
        <li className="menu-item">
          <a href="" className="menu-item-link">
            Logout
          </a>
        </li>
      </ul>
    </nav>
    <div className="page-content">
      {/* <div className="search">search bo</div> */}
      <div className="jumbotron">
        <div>
          <h2>Journey Foods</h2>
        </div>
        <div>
          <div>
            <p>Subscribed Ingriendts</p>
            <span>18</span>
          </div>
          <div>
            <p>Watched Ingriendts</p>
            <span>18</span>
          </div>
        </div>
        <div>
          <div>
            <p>Active Products</p>
            <span>18</span>
          </div>
          <div>
            <p>Concept Prodicts</p>
            <span>18</span>
          </div>
        </div>
        <div>
          <div>
            <p>Product Types</p>
            <span>Fruit Snack</span>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="title">Subscribed Products</div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card__img">
                <img
                  src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1571381312196x387341780865173570%2Fstrawberry.png?w=192&h=291&auto=compress&fit=max"
                  alt=""
                />
              </div>
              <div className="card__body">
                <h2>Strawberry Chia</h2>
                <div>contents</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card__img">
                <img
                  src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1571381312196x387341780865173570%2Fstrawberry.png?w=192&h=291&auto=compress&fit=max"
                  alt=""
                />
              </div>
              <div className="card__body">
                <h2>Strawberry Chia</h2>
                <div>contents</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="title">Watched Products</div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card__img">
                <img
                  src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1571381312196x387341780865173570%2Fstrawberry.png?w=192&h=291&auto=compress&fit=max"
                  alt=""
                />
              </div>
              <div className="card__body">
                <h2>Strawberry Chia</h2>
                <div>contents</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card__img">
                <img
                  src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1571381312196x387341780865173570%2Fstrawberry.png?w=192&h=291&auto=compress&fit=max"
                  alt=""
                />
              </div>
              <div className="card__body">
                <h2>Strawberry Chia</h2>
                <div>contents</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DesignMain;
