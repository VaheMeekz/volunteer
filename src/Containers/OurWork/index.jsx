import React, { useState, useEffect, useRef } from "react";
import styles from "./ourWork.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { ourWorkAction } from "../../redux/actions/ourWorkAtion";
import Slider from "react-slick";
const OurWork = () => {
  const [curentId, setCurentId] = useState(1);

  const dispatch = useDispatch();
  const messageRef = useRef();
  useEffect(() => {
    dispatch(ourWorkAction());
  }, []);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  });

  const work = useSelector((state) => state.ourworkReducer.work);

  const data = work.filter((i) => {
    return i.id == curentId;
  });

  // slider settings
  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    autoplay: true,
  };

  let Ourwork = (
    <div className={styles.big_div}>
      <img src="/assets/2.png" alt="image" />
      <div className={styles.item1}>
        Բնահեն լուծումների ռազմավարություններ, իրավակարգավորումներ
      </div>
      <div className={styles.item2}>
        Մասնավոր հատվածի սոցիալական պատասխանատվություն(ԿՍՊ, ՊՄԳ)
      </div>
      <div className={styles.item3}>Էլ - կառավարում</div>
      <div className={styles.item4}>Ֆինանսական կայուն  կառավարում</div>
      <div className={styles.item5}>Մշտադիտարկում</div>
      <div className={styles.item6}>Աղբի {`<<կանաչ>>`}  կառավարում</div>
      <div className={styles.item7}>{`<< Կանաչ >>`} տրանսպորտ</div>
      <div className={styles.item8}>
        Բնական ռեսուրսների կայուն կառավարում(ջուր,հող, անտառ)
      </div>
      <div className={styles.item9}>{`<< Կանաչ >>`} տրանսպորտ</div>
      <div className={styles.item10}>Բնապահպանական կրթություն</div>
    </div>
  );

  let x = window.screen.width;

  return (
    <>
      <section className={styles.section_1}>
        {x > 990 ? (
          <Container>
            <div className={styles.big_div}>
              <img src="/assets/2.png" alt="" />
              <div className={styles.item1} onClick={() => setCurentId(1)}>
                Բնահեն լուծումների ռազմավարություններ, իրավակարգավորումներ
              </div>
              <div className={styles.item2} onClick={() => setCurentId(2)}>
                Մասնավոր հատվածի սոցիալական պատասխանատվություն(ԿՍՊ, ՊՄԳ)
              </div>
              <div className={styles.item3} onClick={() => setCurentId(3)}>
                Էլ - կառավարում
              </div>
              <div className={styles.item4} onClick={() => setCurentId(4)}>
                Ֆինանսական կայուն  կառավարում
              </div>
              <div className={styles.item5} onClick={() => setCurentId(5)}>
                Մշտադիտարկում
              </div>
              <div className={styles.item6} onClick={() => setCurentId(6)}>
                Աղբի {`<<կանաչ>>`}  կառավարում
              </div>
              <div className={styles.item7} onClick={() => setCurentId(7)}>
                {`<< Կանաչ >>`} տրանսպորտ
              </div>
              <div className={styles.item8} onClick={() => setCurentId(8)}>
                Բնական ռեսուրսների կայուն կառավարում(ջուր,հող, անտառ)
              </div>
              <div className={styles.item9} onClick={() => setCurentId(8)}>
                {`<< Կանաչ >>`} տրանսպորտ
              </div>
              <div className={styles.item10} onClick={() => setCurentId(8)}>
                Բնապահպանական կրթություն
              </div>
            </div>
          </Container>
        ) : (
          // <div className={styles.mainDiv}>
          //   <SliderAll settings={settings} Ourwork={Ourwork} />
          // </div>
          <div>
            <Slider {...settings}>
              <div className={styles.item1} onClick={() => setCurentId(1)}>
                Բնահեն լուծումների ռազմավարություններ, իրավակարգավորումներ
              </div>
              <div className={styles.item2} onClick={() => setCurentId(2)}>
                Մասնավոր հատվածի սոցիալական պատասխանատվություն(ԿՍՊ, ՊՄԳ)
              </div>
              <div className={styles.item3} onClick={() => setCurentId(3)}>
                Էլ - կառավարում
              </div>
              <div className={styles.item4} onClick={() => setCurentId(4)}>
                Ֆինանսական կայուն  կառավարում
              </div>
              <div className={styles.item5} onClick={() => setCurentId(5)}>
                Մշտադիտարկում
              </div>
              <div className={styles.item6} onClick={() => setCurentId(6)}>
                Աղբի {`<<կանաչ>>`}  կառավարում
              </div>
              <div className={styles.item7} onClick={() => setCurentId(7)}>
                {`<< Կանաչ >>`} տրանսպորտ
              </div>
              <div className={styles.item8} onClick={() => setCurentId(8)}>
                Բնական ռեսուրսների կայուն կառավարում(ջուր,հող, անտառ)
              </div>
              <div className={styles.item9} onClick={() => setCurentId(8)}>
                {`<< Կանաչ >>`} տրանսպորտ
              </div>
              <div className={styles.item10} onClick={() => setCurentId(8)}>
                Բնապահպանական կրթություն
              </div>
            </Slider>
          </div>
        )}
      </section>
      <section>
        <Container>
          <Row>
            {data
              ? data.map((i) => {
                  return (
                    <Col key={i.id} className="mt-5" ref={messageRef}>
                      <h2>
                        {localStorage.getItem("lang") == "am"
                          ? i.titleHy
                          : i.titleEn}
                      </h2>
                      <p>
                        {localStorage.getItem("lang") == "am"
                          ? i.descriptionHy
                          : i.descriptionEn}
                      </p>
                      <div>
                        <h3>
                          Ամրագրված քաղաքականություն, մոտեցումներ ըստ լավագույն
                          փորձի
                        </h3>

                        <ul className={styles.ul}>
                          {i.WorkGoverments
                            ? i.WorkGoverments.map((j, index) => {
                                return (
                                  <li key={index}>
                                    {localStorage.getItem("lang") == "am"
                                      ? j.descriptionHy
                                      : j.descriptionEn}
                                  </li>
                                );
                              })
                            : null}
                        </ul>
                      </div>
                      <div>
                        <h3>Առկա բացերը/խոչընդոտները կամ մարտահրավերները</h3>
                        <ul className={styles.ul}>
                          {i.WorkPlus
                            ? i.WorkGoverments.map((k, index) => {
                                return (
                                  <li key={index}>
                                    {localStorage.getItem("lang") == "am"
                                      ? k.descriptionHy
                                      : k.descriptionEn}
                                  </li>
                                );
                              })
                            : null}
                        </ul>
                      </div>
                      <div>
                        <h3>Առկա բացերը/խոչընդոտները կամ մարտահրավերները</h3>
                        <ul className={styles.ul}>
                          {i.WorkWins
                            ? i.WorkGoverments.map((l, index) => {
                                return (
                                  <li key={index}>
                                    {localStorage.getItem("lang") == "am"
                                      ? l.descriptionHy
                                      : l.descriptionEn}
                                  </li>
                                );
                              })
                            : null}
                        </ul>
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

export default OurWork;
