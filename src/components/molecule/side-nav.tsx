import styles from "../../../styles/navigation-styles.module.css";
import Link from "next/link";
import React from "react";

interface NavProps {
    href: string;
    text: string;
};

interface SideNavProps {
    nav: Array<NavProps>
};

const SideNav: React.FC<SideNavProps> = (props) => {
    const { nav } = props;
    return (
        <nav className={styles.sideNavContainer}>
            {nav?.map(item => <Link href={item.href} key={item.text}>{item.text}</Link>)}
        </nav>
    )
};

export default SideNav;
