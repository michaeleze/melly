import Footer from '../molecule/footer'
import Meta from '../molecule/meta'
import styles from '../../../styles/layout.module.css';
import SideNav from "../molecule/side-nav";
import Header from "../atom/header";
import * as React from "react";
import { SIDE_NAV } from '../../../lib/constants';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className={styles.layout}>
        <Header />
        <div className={styles.mainWithSideNav}>
          <main>{children}</main>
          <SideNav nav={SIDE_NAV} />
        </div>
        <Footer />
      </div>
    </>
  )
}
