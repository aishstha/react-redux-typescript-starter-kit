import * as React from 'react';
import { connect } from 'react-redux';

// import { getAllProducts } from '../../../service';
import { getAllProducts } from '../../../service/api/sample.service';

interface IProductProps {
  getAllProducts: () => void;
}

interface IProductState {}

class Product extends React.Component<IProductProps, IProductState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllProducts();
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
  // getAllProducts: () => {
  //   dispatch(getAllProducts());
  // }
  getAllProducts: () => dispatch(getAllProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
