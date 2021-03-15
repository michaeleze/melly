import styles from "../../styles/navigation-styles.module.css";
import Link from "next/link";
import {SIDE_NAV} from '../../lib/constants';

export default function SideNav ({nav = SIDE_NAV}) {
  return (
    <nav className={styles.sideNavContainer}>
      {nav.map(item => <Link href={item.href} key={item.text}>{item.text}</Link> )}
    </nav>
  )
};
