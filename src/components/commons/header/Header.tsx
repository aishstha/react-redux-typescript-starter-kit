import * as React from 'react';

import HeaderView from './HeaderView';
import { connect } from 'react-redux';

interface IDashboardProps {}

interface IDashboardState {
  dropdownOpen: boolean;
}

class Dashboard extends React.Component<IDashboardProps, IDashboardState> {
  constructor(props: any) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    const { dropdownOpen } = this.state;

    return <HeaderView dropdownOpen={dropdownOpen} toggle={this.toggle} />;
  }
}

const mapStateToProps = ({ session }: any) => ({
  user: session.user
});

export default connect(mapStateToProps)(Dashboard);
