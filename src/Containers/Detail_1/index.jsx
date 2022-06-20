import react, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styles from "./detail_1.module.css";
import news from "../../utils/newsList";
import { useDispatch, useSelector } from "react-redux";
import { newsAction } from "../../redux/actions/newsAction";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(newsAction());
  }, []);

  const newsdata = useSelector((state) => state.newsReducer.news);
  const data = newsdata?.products.filter((i) => i.id == id);

  console.log("data", data);
  const newsData = newsdata?.products
    ? newsdata?.products.slice(0, 3).map((i) => {
        return (
          <Col sm={12} md={6} lg={3} key={i.id}>
            <Link to={`/detail/${i.id}`}>
              <div key={i.id} className={styles.news_item_block}>
                <img src={i.image} alt="img" />
                <h3>
                  {localStorage.getItem("lang") == "am" ? i.titleHy : i.titleEn}
                </h3>
                <p>
                  {localStorage.getItem("lang") == "am" ? i.titleHy : i.titleEn}
                </p>
              </div>
            </Link>
          </Col>
        );
      })
    : null;
  return (
    <>
      <section>
        <Container>
          <div className={styles.detail_title}>
            <div className={styles.detail_info}>
              <div className={styles.line}></div>
              <h3>{t("ourN")}</h3>
            </div>
          </div>

          {data
            ? data.map((data) => {
                return (
                  <>
                    <div className={styles.image_slice}>
                      <img src={data?.image} alt="image" />
                    </div>
                    <div className={styles.title_slice}>
                      <p className={styles.title}>
                        <h3 className={styles.title_text}>
                          {localStorage.getItem("lang") == "am"
                            ? data.titleHy
                            : data.titleEn}
                        </h3>
                      </p>
                    </div>
                    <div className={styles.description_slice}>
                      <p>
                        {localStorage.getItem("lang") == "am"
                          ? data.titleHy
                          : data.titleEn}
                      </p>
                    </div>
                  </>
                );
              })
            : null}
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <Row>{newsData}</Row>
        </Container>
      </section>
    </>
  );
};

export default Detail;
