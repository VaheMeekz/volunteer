// styles
import styles from "./ResponseNav.module.css";

import React, { useCallback, useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import Languages from "./Languages";
import { useTranslation } from "react-i18next";

// custom imports

const ResponseNav = () => {
   const { t } = useTranslation();
  const [active, setActive] = useState(false);
  // const [name, setName] = useState("Ամբողջ Տեսականի");
  // const [categoryNamee, setCategoryNamee] = useState();

  // const dispatch = useDispatch();

  const handleClick = () => {
    setActive(!active);
  };

  console.log(active, "asdasdasd");
  // const getNameHeader = (name) => {
  //   setName(name);
  //   dispatch(buyserGet(name));
  //   setActive(!active);
  // };

  // const getCategoryNameHeader = (name, categoryNamee) => {
  //   setCategoryNamee(categoryNamee);
  //   dispatch(buyserGet(name, categoryNamee));
  //   setActive(!active);
  // };

  const backMenu = useCallback(
    (e) => {
      e.stopPropagation();
      setActive(!active);
    },
    [active]
  );

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.burger_block}>
          <div className={styles.responseStyle}>
            <Link to="/">
              <h5>LOGO</h5>
            </Link>
            <div>
              <Languages />
            </div>
          </div>
          <p
            className={active ? "fas fa-times" : "fas fa-bars"}
            onClick={handleClick}
          >
            {/* <i class="fa-solid fa-bars"></i> */}
          </p>
        </div>

        <ul className={active ? styles.activ_nav : styles.just_nav}>
          <Link onClick={backMenu} to="/">
            {t("home")}
          </Link>
          <Link onClick={backMenu} to="/about">
            {t("about")}
          </Link>
          <Link onClick={backMenu} to="/our">
            {t("work")}
          </Link>
          <Link onClick={backMenu} to="/news">
            {t("news")}
          </Link>
          <Link onClick={backMenu} to="/contact">
            {t("contact")}
          </Link>
          <Link onClick={backMenu} to="/project">
            {t("project")}
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default ResponseNav;
