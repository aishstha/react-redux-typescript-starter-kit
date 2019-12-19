import * as React from 'react';
import { connect } from 'react-redux';

import { getSummary } from '../../../../service/api/overview.service';

interface ISummary {
  email: string;
  watched_ingredients: Array<string>;
  subscribed_ingredients: Array<string>;
  products: Array<string>;
  subscription_tier: string;
}

interface ISummaryProps {
  getSummary: () => void;
  summary: ISummary;
}

interface ISummaryState {}

class Summary extends React.Component<ISummaryProps, ISummaryState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getSummary();
  }

  render() {
    const { subscription_tier, watched_ingredients, subscribed_ingredients } = this.props.summary;
    return (
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
    );
  }
}

const mapStateToProps = (store: any) => {
  const {
    router: { location },
    overviewReducer: { summary }
  } = store;
  return {
    location,
    summary
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getSummary: () => dispatch(getSummary())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
