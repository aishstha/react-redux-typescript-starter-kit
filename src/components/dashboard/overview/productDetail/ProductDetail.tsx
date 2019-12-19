import * as React from 'react';
import { connect } from 'react-redux';

import { getSubscribedIngredients, moveToWatchList } from '../../../../service/api/overview.service';
import { IWatchList } from '../../../interface/overview.interface';

interface IProductDetail {
  name: string;
  ingredient_list: any;
  version: string;
  product_type: string;
  product_size: string;
  id: string | number;
}

interface IProductDetailProps {
  getSubscribedIngredients: () => void;
  subscribedIngredients: Array<IProductDetail>;
  moveToWatchList: (data: IWatchList) => void;
}

interface IProductDetailState {
  subscribedIngredients: any;
}

class ProductDetail extends React.Component<IProductDetailProps, IProductDetailState> {
  constructor(props: any) {
    super(props);
    this.state = {
      subscribedIngredients: this.props.subscribedIngredients
    };
  }

  componentDidMount() {
    this.props.getSubscribedIngredients();
  }

  unsubscribe() {}

  render() {
    const { subscribedIngredients } = this.props;
    return (
      <React.Fragment>
        <div className="section">
          <div className="title">Subscribed Products</div>
          <div className="row">
            {subscribedIngredients.length != 0 ? (
              subscribedIngredients.map((item: any, i: any) => {
                return (
                  <div className="col">
                    <div className="card">
                      <div className="card__img">
                        <img
                          src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1571381312196x387341780865173570%2Fstrawberry.png?w=192&h=291&auto=compress&fit=max"
                          alt=""
                        />
                      </div>
                      <div className="card__body">
                        <h2>{item.name}</h2>
                        <div>contents</div>
                        <input type="button" value="Unsubscribe" onClick={this.unsubscribe} />
                        <input
                          type="button"
                          value="Move to Watchlist"
                          onClick={() => this.props.moveToWatchList({ name: item.name })}
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>'Test'</p>
            )}
          </div>
        </div>
      </React.Fragment>
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
  getSubscribedIngredients: () => dispatch(getSubscribedIngredients()),
  moveToWatchList: (data: IWatchList) => dispatch(moveToWatchList(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
