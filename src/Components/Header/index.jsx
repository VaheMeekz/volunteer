import React from "react";
import styles from "./header.module.css";
import {Container} from "react-bootstrap";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import Languages from "./Languages";
import {useTranslation} from "react-i18next";
import ResponseNav from "../ResponseNav";

const Header = () => {
    const {t} = useTranslation();
    const {pathname} = useLocation();
    const navigate = useNavigate();
    return (
        <>
            <section className={styles.media}>
                <ResponseNav/>
            </section>
            <section className={styles.web}>
                <Container>
                    <div className={styles.header}>
                        <div className={styles.logo} onClick={()=>navigate('/')}>
                            <p>Logo</p>
                        </div>
                        <div className={styles.menu_items}>
                            <ul className={styles.ul}>
                                <li>
                                    <Link
                                        to="/"
                                        className={`${pathname == "/" ? styles.linkMian : null}`}
                                    >
                                        {t("home")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className={`${
                                            pathname == "/about" ? styles.linkMian : null
                                        }`}
                                    >
                                        {t("about")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/our"
                                        className={`${pathname == "/our" ? styles.linkMian : null}`}
                                    >
                                        {t("work")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/news"
                                        className={`${
                                            pathname == "/news" ? styles.linkMian : null
                                        }`}
                                    >
                                        {t("news")}
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/project"
                                        className={`${
                                            pathname == "/project" ? styles.linkMian : null
                                        }`}
                                    >
                                        {t("project")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className={`${
                                            pathname == "/contact" ? styles.linkMian : null
                                        }`}
                                    >
                                        {t("contact")}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/*
          <div className={styles.language}>Arm Eng</div> */}
                        <Languages/>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Header;
