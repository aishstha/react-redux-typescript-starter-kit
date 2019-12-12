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
    return <React.Fragment>Detail</React.Fragment>;
  }
}

const mapStateToProps = ({ session }: any) => ({
  user: session.user
});

export default connect(mapStateToProps)(Detail);
