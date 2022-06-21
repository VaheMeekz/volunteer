import React, {useState, useEffect} from "react";
import styles from "./contact.module.css";
import {Container, Row, Col} from "react-bootstrap";
import {AddressMap} from "./map";
import {ReactComponent as LI} from "../../svg/li.svg";
import {ReactComponent as Fb} from "../../svg/fb.svg";
import axios from "axios";
import {keys} from "../../keys";
import Swal from "sweetalert2";
import {useTranslation} from "react-i18next";

const Contact = () => {
    const [value, setValue] = useState({});
    const [data, setData] = useState(null);
    const {t} = useTranslation();

    useEffect(() => {
        axios
            .get(`${keys.API_URI}/api/v1/contacts`)
            .then((resp) => {
                setData(resp.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handlerGetContact = (e) => {
        value[e.target.name] = e.target.value;
        setValue(value);
    };

    const sendContactInfo = (e) => {
        e.preventDefault();
        axios
            .post(`${keys.API_URI}/api/v1/contactUs`, value)
            .then((resp) => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setTimeout(() => {
                    window.location.reload(false);
                }, 500);
                setValue({})
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <section className={styles.section}>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <div className={styles.title_block}>
                                <div className={styles.name_block}>
                                    <div className={styles.line_name}></div>
                                    <p className={styles.name_item}>{t("contactUS")}</p>
                                </div>
                                <h5 className={styles.subName}>{t("hear")}</h5>
                                <p className={styles.text}>{t("question")}</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <div className={styles.title_second_blok}>
                                <h4 className={styles.secont_title_name}>{t("contacts")}</h4>
                                <div className={styles.phone}>
                                    <p>{data !== null && data[0]?.phone}</p>
                                    <p>{data !== null && data[0]?.email}</p>
                                </div>
                                <h4 className={styles.sub_title_name}>{t('location')}</h4>
                                <div className={styles.office}>
                                    <p>{data !== null && data[0].location}</p>
                                </div>
                                <div className={styles.networks}>
                                    <a href={data !== null && data[0]?.linkedin} target="blank">
                                        <LI/>
                                    </a>
                                    <a href={data !== null && data[0]?.facebook} target="blank">
                                        <Fb/>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className={styles.section_two}>
                <Container>
                    <form
                        className={styles.form_contact}
                        action=""
                        onChange={handlerGetContact}
                        onSubmit={sendContactInfo}
                    >
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <label htmlFor="" className={styles.lable}>
                                    {t("name")}
                                </label>
                                <input
                                    type="text"
                                    required
                                    className={styles.input}
                                    name="firstName"
                                />
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <label htmlFor="" className={styles.lable}>
                                    {t('lastName')}
                                </label>
                                <input
                                    type="text"
                                    required
                                    className={styles.input}
                                    name="lastName"
                                />
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <label htmlFor="" className={styles.lable}>
                                    {t('email')}
                                </label>
                                <input
                                    type="email"
                                    required
                                    className={styles.input}
                                    name="email"
                                />
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <label htmlFor="" className={styles.lable}>
                                    {t('subject')}
                                </label>
                                <input
                                    type="text"
                                    required
                                    className={styles.input}
                                    name="subject"
                                />
                            </Col>
                            <Col sm={12} md={12} lg={12}>
                                <label htmlFor="" className={styles.lable}>
                                    {t('message')}
                                </label>
                                <textarea
                                    id=""
                                    cols="30"
                                    required
                                    rows="7"
                                    className={styles.textarea}
                                    name="message"
                                ></textarea>
                            </Col>
                        </Row>
                        <div className={styles.button_block}>
                            <button className={styles.submit} type="submit">
                                {t('send')}
                            </button>
                        </div>
                    </form>
                </Container>
            </section>
            <section>
                <AddressMap/>
            </section>
        </>
    );
};

export default Contact;
