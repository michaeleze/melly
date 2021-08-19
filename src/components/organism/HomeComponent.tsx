import styles from "../../../styles/HomeComponent.module.css";
import React from "react";

export interface Contentprops {
    header: string;
    src: string;
    text: string
}

export interface HomeComponentProps {
    content: Contentprops[];
}

const HomeComponent: React.FC<HomeComponentProps> = (props) => {
    const { content = [] } = props;

    return (
        <section className={styles.container}>
            <>
                {
                    content?.map(item => (
                        <div className={styles.imgContainer} key={item.src}>
                            <img alt='Michael Eze' className={styles.img} src={item?.src} />
                        </div>
                    ))
                }
            </>
        </section>
    )
}

export default HomeComponent;
