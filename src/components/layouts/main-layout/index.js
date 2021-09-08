import * as React from 'react';
import classNames from 'classnames';

import "../../../pages/style/global.scss";
import { wrap, top, innerwrap, mid, end } from './style.module.scss';
import Navigation from '../../navigation';

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>{pageTitle}</title>

      <div className={classNames(wrap, top)}>
        <div className={innerwrap}>
          <h2>{pageTitle}</h2>
        </div>
      </div>

      <div className={classNames(wrap, mid)}>
        <div className={innerwrap}>
          <Navigation />
          {children}
        </div>
      </div>

      <div className={classNames(wrap, end)}>
        <div className={innerwrap}>
          <p>Made by me using <a href="#">Netlify</a> and <a href="#">Some cms</a></p>
        </div>
      </div>
    </>
  )
}

export default Layout