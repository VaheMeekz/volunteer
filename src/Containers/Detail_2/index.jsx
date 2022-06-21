import React, { useEffect } from "react";
import styles from "./detail_2.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { projectAction } from "../../redux/actions/projectAction";
import { useTranslation } from "react-i18next";
const Detail2 = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const projectitem = useSelector((state) => state.projectReducer.project);
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(projectAction());
  }, []);
  const getItem =
    projectitem &&
    projectitem.filter((i) => {
      return id == i.id;
    });

  return (
    <>
      <section className={styles.section_deteil_two}>
        <Container>
          <div className={styles.name_two_block}>
            <div className={styles.line_two}></div>
            <h3 className={styles.just_name}>{t("ourP")}</h3>
          </div>
          <Row>
            {getItem
              ? getItem.map((i) => {
                  return (
                    <Col key={i.id}>
                      <h3 className={styles.title_1}>
                        {localStorage.getItem("lang") == "am"
                          ? i.titleOneHy
                          : i.titleOneEn}
                      </h3>

                      <p className={styles.text_1}>
                        {localStorage.getItem("lang") == "am"
                          ? i.descriptionOneHy
                          : i.descriptionOneEn}
                      </p>

                      <div className={styles.img_item_block}>
                        <img src={i.image} alt="" />
                      </div>

                      <h2 className={styles.title_1}>
                        {localStorage.getItem("lang") == "am"
                          ? i.titleTwoHy
                          : i.titleTwoEn}
                      </h2>
                      <p className={styles.text_1}>
                        {localStorage.getItem("lang") == "am"
                          ? i.descriptionTwoHy
                          : i.descriptionTwoEn}
                      </p>
                    </Col>
                  );
                })
              : null}
          </Row>

          <Row>
            {projectitem
              ? projectitem.slice(0, 3).map((i) => {
                  return (
                    <Col sm={12} md={6} lg={4} key={i.id} className={`mt-5 ${styles.projBox}`}>
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
                          {localStorage.getItem("lang") == "am "
                            ? i.titleOneHy
                            : i.titleOneEn}
                        </h4>
                        <p className={styles.text}>
                          {localStorage.getItem("lang") == "am "
                            ? i?.descriptionOneHy.substring(0, 30)
                            : i?.descriptionOneEn.substring(0, 30)}
                        </p>
                        <Link to={`/details/${i?.id}`}>
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

export default Detail2;
