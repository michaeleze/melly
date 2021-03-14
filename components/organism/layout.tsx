import Footer from '../molecule/footer'
import Meta from '../molecule/meta'
import styles from '../../styles/navigation-styles.module.css';
import SideNav from "../molecule/side-nav";
import Header from "../atom/header";
import * as React from "react";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="max-h-screen">
        {/*<Alert preview={preview} />*/}
          <Header />
          <div className={styles.mainWithSideNav}>
            <SideNav />
          <main>{children}</main>
          </div>
      <Footer />
      </div>
    </>
  )
}
