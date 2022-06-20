import React, { useEffect } from "react";
import styles from "./project.module.css";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { projectAction } from "../../redux/actions/projectAction";
import { Link } from "react-router-dom";
const Project = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(projectAction());
  }, []);

  const project = useSelector((state) => state.projectReducer.project);
  console.log(project, "projectsdsdsdsd");
  return (
    <>
      <section className={styles.project_section}>
        <Container>
          <Row>
            {project
              ? project.map((i) => {
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
              : null}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Project;


// our_events