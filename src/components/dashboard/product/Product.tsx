import * as React from 'react';
import { connect } from 'react-redux';

import { getSummary } from '../../../service/api/overview.service';

interface IProductProps {
  getSummary: () => void;
}

interface IProductState {}

class Product extends React.Component<IProductProps, IProductState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.props.getSummary();
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
  getSummary: () => dispatch(getSummary())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
