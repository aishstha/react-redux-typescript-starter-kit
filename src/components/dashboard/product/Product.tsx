import * as React from 'react';
import { connect } from 'react-redux';

import { getAllProducts } from '../../../service';

interface IProductProps {}

interface IProductState {}

class Product extends React.Component<IProductProps, IProductState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return <React.Fragment>Product</React.Fragment>;
  }
}

const mapStateToProps = (store: any) => {
  const {
    router: { location }
  } = store;
  return {
    location
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  setTenant: () => {
    dispatch(getAllProducts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
