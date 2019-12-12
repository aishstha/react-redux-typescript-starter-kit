import * as React from 'react';

interface IHeaderProps {
  dropdownOpen: boolean;
  toggle: () => void;
}

const HeaderView: React.SFC<IHeaderProps> = props => {
  return (
    <header role="main-header">
      <div className="site-logo">
        <a href="/strategy">
          <img src="/assets/images/barkbox-logo.svg" />
        </a>
      </div>
      Header view
    </header>
  );
};

export default HeaderView;
