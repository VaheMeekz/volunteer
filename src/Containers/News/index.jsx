//style
import styles from "./news.module.css";

import React, {useEffect, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

// custom imports
import {newsAction} from "../../redux/actions/newsAction";

const News = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const [page,setPage] = useState(1)

    const newsdata = useSelector((state) => state.newsReducer.news);
    useEffect(() => {
        dispatch(newsAction(page));
    }, [page]);

    const newsData = newsdata?.products
        ? newsdata?.products?.map((i) => {
            return (
                <Col sm={12} md={6} lg={3} key={i.id} className="mb-5">
                    <Link to={`/detail/${i.id}`}>
                        <div key={i.id} className={styles.news_item_block}>
                            <img src={i.image} alt="img"/>
                            <h3>
                                {localStorage.getItem("lang") == "am" ? i.titleHy : i.titleEn}
                            </h3>
                            <p>
                                {localStorage.getItem("lang") == "am" ? i.descriptionHy.substr(0, 80) : i.descriptionEn.substr(0, 80)}...
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
                <Container className={styles.news_section}>
                    <div className={styles.news_title}>
                        <div className={styles.line}></div>
                        <p>{t("read")}</p>
                    </div>
                    <h3 className={styles.read_news}>{t("latest")}</h3>
                    <Row>{newsData}</Row>
                </Container>
               <div className={styles.seeMoreBox}>
                   {
                       newsdata?.count !== newsdata?.products?.length && (
                           <button className={styles.seeMoreBtn} onClick={()=>setPage(page+1)}>
                               {t('seeMore')}
                           </button>
                       )
                   }

               </div>
            </section>
        </>
    );
};

export default News;
