import * as React from 'react';
import { connect } from 'react-redux';

interface IDetailProps {}

interface IDetailState {}

class Detail extends React.Component<IDetailProps, IDetailState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="page-content">Report</div>;
  }
}

const mapStateToProps = ({  }: any) => ({});

export default connect(mapStateToProps)(Detail);
