// import * as React from 'react';

// const ProductDetail: React.SFC<{}> = () => {
//   return (
//     <div style={{ backgroundColor: 'lightblue', height: '179px', left: '180px', width: '1168px' }}>
//       <div style={{ marginTop: '15px', height: '146px' }}>
//         <div style={{ height: '138px', left: '12px', width: '211px', backgroundColor: 'green' }}>
//           SUBSCRIBED INGREDIENTS:22 <br /> WATCHED INGREDIENTS: 23 <br /> ACTIVE PRODUCTS:55 <br /> CONCEPT PRODUCTS:23{' '}
//           <br /> PRODUCT TYPE:Fruit Snack
//           {/* <div style={{ box-sizing: 'border-box', z-index: 46, height: '135px', width: '240.427px', left: '1.42109e-14px', top: '6px', border-radius: '0px'}}> */}
//           {/* <div style={{margin-top: 8px; height: 40px; height: '138px', left: '12px', width: '211px', backgroundColor: 'green' }}>HELLO</div> */}
//           {/* </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

import * as React from 'react';
import { connect } from 'react-redux';

import { getSubscribedIngredients } from '../../../../service/api/overview.service';

interface IProductDetail {
  email: string;
  watched_ingredients: Array<string>;
  subscribed_ingredients: Array<string>;
  products: Array<string>;
  subscription_tier: string;
}

interface IProductDetailProps {
  getSubscribedIngredients: () => void;
  subscribedIngredients: any;
}

interface IProductDetailState {}

class ProductDetail extends React.Component<IProductDetailProps, IProductDetailState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getSubscribedIngredients();
  }

  render() {
    console.log('his.props.subscribedIngredient', this.props.subscribedIngredients);
    // const { name } = this.props.subscribedIngredients;
    return (
      // <div style={{ backgroundColor: 'lightblue', height: '179px', left: '180px', width: '1168px' }}>

      <React.Fragment>
        hello
        {this.props.subscribedIngredients.length > 0 &&
          this.props.subscribedIngredients.map((ingredient: any) => {
            // return <p>{ingredient.name}</p>;
          })}
      </React.Fragment>
      // </div>
    );
  }
}

const mapStateToProps = (store: any) => {
  const {
    overviewReducer: { subscribedIngredients }
  } = store;
  return {
    subscribedIngredients
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getSubscribedIngredients: () => dispatch(getSubscribedIngredients())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
