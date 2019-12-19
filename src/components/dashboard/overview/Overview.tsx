import * as React from 'react';

import Summary from './summary';
import ProductDetail from './productDetail';

const Overview: React.SFC<{}> = () => {
  return (
    <div>
      {/* Keep search box here */}
      {/* <div className="search">search box</div> */}
      <Summary />
      <ProductDetail />
    </div>
  );
};

export default Overview;
