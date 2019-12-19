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
      <div style={{ backgroundColor: 'lightblue', height: '179px', left: '180px', width: '1168px' }}>
        {this.props.summary && (
          <div style={{ marginTop: '15px', height: '146px' }}>
            <div style={{ height: '138px', left: '12px', width: '211px', backgroundColor: 'green' }}>
              SUBSCRIBED INGREDIENTS:
              {subscribed_ingredients && subscribed_ingredients.length}
              <br /> WATCHED INGREDIENTS:
              {watched_ingredients && watched_ingredients.length}
              <br /> ACTIVE PRODUCTS:55 <br /> CONCEPT PRODUCTS:23 <br /> PRODUCT TYPE:
              {subscription_tier}
            </div>
          </div>
        )}
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
