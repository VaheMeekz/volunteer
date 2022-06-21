import React, {useEffect, useState} from "react";
import styles from "./footer.module.css";
import {Container, Row, Col} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {ReactComponent as Tw} from "../../svg/tw.svg";
import {ReactComponent as LI} from "../../svg/li.svg";
import {ReactComponent as Fb} from "../../svg/fb.svg";
import {ReactComponent as Phone} from "../../svg/phone.svg";
import {ReactComponent as Location} from "../../svg/location.svg";
import {ReactComponent as Mail} from "../../svg/mail.svg";
import axios from "axios";
import {keys} from "../../keys";

const Footer = () => {
    const {pathname} = useLocation();
    const {t} = useTranslation();
    const [data, setData] = useState(null);
    useEffect(() => {
        axios
            .get(`${keys.API_URI}/api/v1/contacts`)
            .then((resp) => {
                setData(resp.data);
            })
            .catch((error) => {
                console.log(error);
            });

        console.log("object");
    }, []);

    return (
        <section className={styles.bacground}>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={3}>
                        <div>
                            <p className={styles.logo}>logo</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <ul className={styles.ul}>
                            <li>
                                <h5 className={styles.titleFoo}>{t("info")}</h5>
                            </li>
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
                                    to="/our"
                                    className={`${pathname == "/our" ? styles.linkMian : null}`}
                                >
                                    {t("work")}
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    <Col sm={12} md={6} lg={3}>
                        <ul className={styles.ul}>
                            <li>
                                <h5 className={styles.titleFoo}>{t("contact")}</h5>
                            </li>
                            <li>
                                <Link
                                    to="/news"
                                    className={`${pathname == "/news" ? styles.linkMian : null}`}
                                >
                                    {t("news")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className={`${pathname == "/about" ? styles.linkMian : null}`}
                                >
                                    {t("about")}
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
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <ul className={styles.network_block}>
                            <li>
                                <a href={data !== null && data[0]?.facebook} target="blank">
                                    <Fb/>
                                </a>
                            </li>
                            <li>
                                <a href={data !== null && data[0]?.linkedin} target="blank">
                                    <LI/>
                                </a>
                            </li>
                        </ul>
                        <ul className={styles.ull}>
                            <li>
                                <Location/>
                                <p>{data !== null && data[0]?.location}</p>
                            </li>
                            <li>
                                <Phone/>

                                <p>{data !== null && data[0]?.phone}</p>
                            </li>
                            <li>
                                <Mail/>
                                <p>{data !== null && data[0]?.email}</p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
