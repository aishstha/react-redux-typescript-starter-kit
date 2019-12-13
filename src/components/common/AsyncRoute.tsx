import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface IAsyncRouteState {
  isLoaded: boolean;
}

interface IAsyncRouteProps {
  defaultProps: RouteComponentProps<{}>;
  loadModulePromise: Promise<{
    default: React.ComponentType<RouteComponentProps<{}>> | React.ComponentType<{}>;
  }>;
}

class AsyncRoute extends React.Component<IAsyncRouteProps, IAsyncRouteState> {
  constructor(props: Readonly<IAsyncRouteProps>) {
    super(props);

    this.component = null;

    this.state = {
      isLoaded: false
    };
  }

  component: null | React.ComponentType<RouteComponentProps<{}>> | React.ComponentType<{}>;

  async componentDidMount() {
    const module = await this.props.loadModulePromise;
    this.component = module.default;

    this.setState({
      isLoaded: true
    });
  }

  render() {
    let LoadedComponent = this.component as React.ComponentType<RouteComponentProps<{}>>;

    return (
      <React.Fragment>
        {this.state.isLoaded && this.component && <LoadedComponent {...this.props.defaultProps} />}
      </React.Fragment>
    );
  }
}

export default AsyncRoute;
