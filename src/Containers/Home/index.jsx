import React, { useEffect } from "react";
import styles from "./home.module.css";
import { SliderAll } from "../../Components";
import settings from "./slider";
import slider from "../../utils/slider";
import { Container, Row, Col } from "react-bootstrap";
import { bannerInfo } from "../../redux/actions/bannerAction";
import { homeAboutAction } from "../../redux/actions/homeAboutAction";
import { homeBuildActin } from "../../redux/actions/homeBuildAction";
import { partnersAction } from "../../redux/actions/partnerAction";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Icon } from "../../svg/1.svg";
import { ReactComponent as Icon2 } from "../../svg/2.svg";
import { ReactComponent as Icon3 } from "../../svg/3.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { keys } from "../../keys";
import { downloadAction } from "../../redux/actions/dowunloadAction";
// import Languages from "./Languages";
import { useTranslation } from "react-i18next";
import { projectAction } from "../../redux/actions/projectAction";
import {
  getEventsAC,
  getSingleEventsAC,
} from "../../redux/actions/aboutAction";
import EventModal from "./EventNodal";
const Home = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    dispatch(bannerInfo());
    dispatch(homeAboutAction());
    dispatch(homeBuildActin());
    dispatch(partnersAction());
    dispatch(downloadAction());
    dispatch(projectAction());
    dispatch(getEventsAC());
  }, []);
  const data = useSelector((state) => state.BannerinfoReducer.bannerData);
  const homeAboutData = useSelector((state) => state.homeAboutReducer.homabout);
  const build = useSelector((state) => state.homeBuildReducer.build);
  const partners = useSelector((state) => state.partnersReducer.partners);
  const projectitem = useSelector((state) => state.projectReducer.project);
  const loadData = useSelector((state) => state.downloadReducer.load);
  const evets = useSelector((state) => state.aboutReducer.events);
  const loading = useSelector((state) => state.aboutReducer.loading);

  const getSingleEvent = (id) => {
    dispatch(getSingleEventsAC(id));
    setModalShow(true);
  };
  // =============================dowunload=========================
  // const DowunLoadPDF = (name) => {
  //   axios
  //     .get(`${keys.API_URI}/${name}`)
  //     .then((resp) => {
  //       console.log(resp.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // =============================dowonload=========================
  //==​🔥​🔥​🔥​================SLIDER DESIGN CODE========​🔥​🔥​🔥​========
  const BEST_SALE_SLIDER = data?.map((i) => {
    return (
      <div key={i.id} className={styles.best_sale_box}>
        <div className={styles.sal_img_blco}>
          <h3 className={styles.title_slider}>
            {localStorage.getItem("lang") == "am" ? i.titleHy : i.titleEn}
          </h3>
          <img src={i.video} alt="" />
          <div className={styles.subtitle_blcok}>
            <h4 className={styles.subtitle_slider}>"asdasdasd"</h4>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>
    );
  });
  // ===​🔥​🔥​🔥​=================HOME UI CODE============​🔥​🔥​🔥​===========
  return (
    <>
      <section className={styles.section}>
        <div className={styles.mainDiv}>
          <SliderAll settings={settings} BEST_SALE_SLIDER={BEST_SALE_SLIDER} />
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
                  ? homeAboutData?.titleHy
                  : homeAboutData?.titleEn}
              </h2>
              <p className={styles.text_two}>
                {localStorage.getItem("lang") == "am"
                  ? homeAboutData?.textHy
                  : homeAboutData?.textEn}
              </p>
              <button className={styles.more}>{t("learn_more")}</button>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.img_two}>
                <img src={homeAboutData?.image} alt="image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.section_two}>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div className={styles.partner_name_block}>
                <p className={styles.partner_title}>{t("support")}</p>
                <div className={styles.partner_line}></div>
              </div>
            </Col>
            {partners
              ? partners.map((i) => {
                  return (
                    <Col sm={12} md={6} lg={2} key={i.id}>
                      <div className={styles.partner_block}>
                        <img src={i.image} alt="" />
                        <p>{i.namee}</p>
                      </div>
                    </Col>
                  );
                })
              : null}
          </Row>
        </Container>
      </section>

      <section className={styles.section_three}>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.name_two_block}>
                <div className={styles.line_two}></div>
                <h3 className={styles.just_name}>{t("aboutUs")}</h3>
              </div>
              <h2 className={styles.title_two}>
                {localStorage.getItem("lang") == "am"
                  ? build?.titleHy
                  : build?.titleEn}
              </h2>
              <p className={styles.text_two}>
                {localStorage.getItem("lang") == "am"
                  ? build?.textHy
                  : build?.textEn}
              </p>
              <div className={styles.items_blok}>
                <div className={styles.item_name_block}>
                  <Icon />

                  <h5 className={styles.item_name}>
                    {localStorage.getItem("lang") == "am"
                      ? build.titleOneHy
                      : build.titleOneEn}
                  </h5>
                </div>
                <p className={styles.infotext}>
                  {localStorage.getItem("lang") == "am"
                    ? build.descriptionOneHy
                    : build.descriptionOneEn}
                </p>
              </div>
              <div className={styles.items_blok}>
                <div className={styles.item_name_block}>
                  <Icon2 />
                  <h5 className={styles.item_name}>
                    {localStorage.getItem("lang") == "am"
                      ? build.titleTwoHy
                      : build.titleTwoEn}
                  </h5>
                </div>
                <p className={styles.infotext}>
                  {localStorage.getItem("lang") == "am"
                    ? build.descriptionTwoHy
                    : build.descriptionTwoEn}
                </p>
              </div>
              <div className={styles.items_blok}>
                <div className={styles.item_name_block}>
                  <Icon3 />
                  <h5 className={styles.item_name}>
                    {localStorage.getItem("lang") == "am"
                      ? build.titleThreeHy
                      : build.titleThreeEn}
                  </h5>
                </div>
                <p className={styles.infotext}>
                  {localStorage.getItem("lang") == "am"
                    ? build.descriptionThreeHy
                    : build.descriptionThreeEn}
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.img_two}>
                <img src={build?.image} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className={styles.question_title}>{t("help")}</h2>
          <Row>
            {loadData &&
              loadData.map((i) => {
                return (
                  <Col sm={12} md={12} lg={12}>
                    <div className={styles.question_block}>
                      <img
                        src="https://toppng.com/uploads/preview/pdf-icon-11549528510ilxx4eex38.png"
                        alt=""
                      />

                      <a
                        href={`https://volunteer002.herokuapp.com/${i.fileName}`}
                        target="_blank"
                      >
                        <p>
                          {localStorage.getItem("lang") == "am"
                            ? i.nameHy
                            : i.nameEn}
                        </p>
                      </a>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <div className={styles.proect_block}>
            <div className={styles.project_name_block}>
              <div className={styles.project_line}></div>
              <h5 className={styles.project_name}>{t("proj")}</h5>
            </div>
            <h5 className={styles.project_name_two}>{t("aboutTiT")}</h5>
          </div>
          <Row>
            {projectitem
              ? projectitem.slice(0, 3).map((i) => {
                  return (
                    <Col sm={12} md={6} lg={4} key={i.id} className="mt-5">
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
              : "null"}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className={styles.red_news_title}>{t("redNews")}</h2>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <div className={styles.news_block}>
                <div className={styles.news_img_block}>
                  <img
                    src="https://thumbs.dreamstime.com/b/man-dog-gardening-work-working-garden-55783074.jpg"
                    alt=""
                  />
                </div>
                <h5 className={styles.news_title}>
                  Don’t destroy greenery and don’t spoil scenery
                </h5>
                <p className={styles.news_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className={styles.news_block}>
                <div className={styles.news_img_block}>
                  <img
                    src="https://thumbs.dreamstime.com/b/man-dog-gardening-work-working-garden-55783074.jpg"
                    alt=""
                  />
                </div>
                <h5 className={styles.news_title}>
                  Don’t destroy greenery and don’t spoil scenery
                </h5>
                <p className={styles.news_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className={styles.news_block}>
                <div className={styles.news_img_block}>
                  <img
                    src="https://thumbs.dreamstime.com/b/man-dog-gardening-work-working-garden-55783074.jpg"
                    alt=""
                  />
                </div>
                <h5 className={styles.news_title}>
                  Don’t destroy greenery and don’t spoil scenery
                </h5>
                <p className={styles.news_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className={styles.news_block}>
                <div className={styles.news_img_block}>
                  <img
                    src="https://thumbs.dreamstime.com/b/man-dog-gardening-work-working-garden-55783074.jpg"
                    alt=""
                  />
                </div>
                <h5 className={styles.news_title}>
                  Don’t destroy greenery and don’t spoil scenery
                </h5>
                <p className={styles.news_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <div className={styles.name_block}>
            <h2 className={styles.events_title}>{t("our_events")}</h2>
            <div className={styles.naem_line}></div>
          </div>
          <Row>
            {!loading &&
              evets !== null &&
              evets?.map((i) => {
                return (
                  <Col
                    key={i.id}
                    onClick={() => getSingleEvent(i.id)}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <div className={styles.Eventd_First_block}>
                      <div className={styles.title_block}>
                        <h3>{i.day}</h3>
                        <p>Next Events</p>
                        <div className={styles.events_lines}></div>
                      </div>
                      <div className={styles.subtitle_block}>
                        <p>{i.month}</p>
                        <h4>
                          {localStorage.getItem("lang") == "am"
                            ? i?.titleHy
                            : i?.titleEn}
                        </h4>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
        <EventModal show={modalShow} onHide={() => setModalShow(false)} />
      </section>
    </>
  );
};

export default Home;
