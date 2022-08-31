import * as React from 'react';
import classNames from 'classnames';
import "../../../pages/style/global.scss";
import { wrap, top, innerwrap, siteTitle, demoTitle, frame } from './style.module.scss';
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {

  return (
    <>
      <title>{pageTitle}</title>

      <div className={classNames(wrap, top)}>
        <div className={innerwrap}>
          <h2 className={siteTitle}>
            <Link to="/">jnr<span>78</span></Link>
            <span className={demoTitle}>{pageTitle}</span>
          </h2>
        </div>
      </div>  
      <div className={frame}>
        {children}
      </div>          
    </>
  )
}

export default Layout