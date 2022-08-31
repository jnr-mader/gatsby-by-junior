import * as React from 'react';
import classNames from 'classnames';
import "../../../pages/style/global.scss";
import { wrap, top, innerwrap, mid, end, siteTitle, backToTop } from './style.module.scss';
import { Link } from 'gatsby';
import Navigation from '../../navigation';

const Layout = ({ pageTitle, children }) => {
  const toTop = (e) => {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <title>{pageTitle}</title>

      <div className={classNames(wrap, top)}>
        <div className={innerwrap}>
        <h2 className={siteTitle}><Link to="/">jnr<span>78</span></Link></h2><h2>{pageTitle}</h2>
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
          <p>Made by me using <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a> and <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</a></p>
          <p className={backToTop}><a href='#' onClick={toTop}>back to top</a></p>
        </div>
      </div>
    </>
  )
}

export default Layout