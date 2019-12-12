import React from 'react';

import { noResultImage } from '../../../assets/images';

const Empty = () => (
  <div className="Error-wrap text-center">
    <div className="Error-wrap__image">
      <img src={noResultImage} alt="" />
    </div>
    <div className="Error-wrap__msg mt-25"> No results found!</div>
  </div>
);

export default Empty;
