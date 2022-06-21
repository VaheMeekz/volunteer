import React, { useEffect } from "react";
import styles from "./about.module.css";
import { SliderAll } from "../../Components";
import settings from "./slider";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { projectAction } from "../../redux/actions/projectAction";
import { useTranslation } from "react-i18next";

import {
  aboutAction,
  aboutBannerAction,
} from "../../redux/actions/aboutAction";
import { useSelector, useDispatch } from "react-redux";
const About = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(aboutAction());
    dispatch(aboutBannerAction());
    dispatch(projectAction());
  }, []);

  const data = useSelector((state) => state.aboutReducer.about);
  const banner = useSelector((state) => state.aboutReducer.banner);
  const project = useSelector((state) => state.projectReducer.project);

  const ABOUTE_SLIDER = banner?.map((i) => {
    return (
      <div key={i.id} className={styles.best_sale_box}>
        <div className={styles.sal_img_blco}>
          <h3 className={styles.title_slider}>
            {localStorage.getItem("lang") == "am" ? i.titleHy : i.titleEn}
          </h3>
          <img src={i.video} alt="" />
          <div className={styles.subtitle_blcok}>
            <h4 className={styles.subtitle_slider}>
              {localStorage.getItem("lang") == "am" ? i.titleHy : i.titleEn}
            </h4>
            <div className={styles.line}></div>s
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <section className={styles.section}>
        <div className={styles.mainDiv}>
          <SliderAll settings={settings} ABOUTE_SLIDER={ABOUTE_SLIDER} />
        </div>
      </section>
      <section>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.name_two_block}>
                <div className={styles.line_two}></div>
                <h3 className={styles.just_name}>{t("aboutUs")}</h3>
              </div>
              <h2 className={styles.title_two}>
                {localStorage.getItem("lang") == "am"
                  ? data?.titleHy
                  : data?.titleEn}
              </h2>
              <p className={styles.text_two}>
                {localStorage.getItem("lang") == "am"
                  ? data?.descriptionHy
                  : data?.descriptionEn}
              </p>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.img_two}>
                <img src={data?.image} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*<section className={styles.section_two}>*/}
      {/*  <Container>*/}
      {/*    <Row>*/}
      {/*      <Col sm={12} md={6} lg={6}>*/}
      {/*        <div className={styles.mission_block}>*/}
      {/*          <h2 className={styles.mission_title}>our mission</h2>*/}
      {/*          <h5 className={styles.mission_subTitile}>*/}
      {/*            We make the world we save our own environment*/}
      {/*          </h5>*/}
      {/*          <p className={styles.mission_text}>*/}
      {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
      {/*            Suspendisse varius enim in eros elementum tristique. Duis*/}
      {/*            cursus, mi quis viverra ornare, eros dolor interdum nulla, ut*/}
      {/*            commodo diam libero vitae erat. Aenean faucibus nibh et justo*/}
      {/*            cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus*/}
      {/*            tristique posuere.*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*      </Col>*/}
      {/*      <Col sm={12} md={6} lg={6}>*/}
      {/*        <div className={styles.mission_block}>*/}
      {/*          <h2 className={styles.mission_title}>our mission</h2>*/}
      {/*          <h5 className={styles.mission_subTitile}>*/}
      {/*            We make the world we save our own environment*/}
      {/*          </h5>*/}
      {/*          <p className={styles.mission_text}>*/}
      {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
      {/*            Suspendisse varius enim in eros elementum tristique. Duis*/}
      {/*            cursus, mi quis viverra ornare, eros dolor interdum nulla, ut*/}
      {/*            commodo diam libero vitae erat. Aenean faucibus nibh et justo*/}
      {/*            cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus*/}
      {/*            tristique posuere.*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*      </Col>*/}
      {/*    </Row>*/}
      {/*  </Container>*/}
      {/*</section>*/}
      <section>
        <Container>
          <Row>
            <div className={styles.proect_block}>
              <div className={styles.project_name_block}>
                <div className={styles.project_line}></div>
                <h5 className={styles.project_name}>{t("proj")}</h5>
              </div>
              <h5 className={styles.project_name_two}>{t("aboutTiT")}</h5>
            </div>
            {project
              ? project.slice(0, 3).map((i) => {
                  return (
                    <Col sm={12} md={6} lg={4} key={i.id} className="mb-5">
                      <div
                        className={styles.card}
                        style={{
                          height: "400px",
                          backgroundImage: `url(${i.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "50% 50%",
                          backgroundRepeat: "no-repeat",
                          borderRadius: "20px",
                        }}
                      >
                        <h4 className={styles.card_name}>
                          {localStorage.getItem("lang") == "am"
                            ? i.titleOneHy
                            : i.titleOneEn}
                        </h4>
                        <p className={styles.text}>
                          {localStorage.getItem("lang") == "am"
                            ? i.descriptionOneHy.substring(0, 30)
                            : i.descriptionOneEn.substring(0, 30)}
                        </p>
                        <Link to={`/details/${i.id}`}>
                          <button className={styles.see_more}>See More</button>
                        </Link>
                      </div>
                    </Col>
                  );
                })
              : null}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
