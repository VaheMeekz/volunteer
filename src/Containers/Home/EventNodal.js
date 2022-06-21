import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import {useTranslation} from "react-i18next";
import styles from "./home.module.css"
const EventModal = (props) => {
  const event = useSelector((state) => state.aboutReducer.singleEvent);
  const loading = useSelector((state) => state.aboutReducer.singleLoading);
  const { t } = useTranslation();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {!loading && localStorage.getItem("lang") == "am"
            ? event?.titleHy
            : event?.titleEn}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          {!loading && event.month} {!loading && event.day}
        </h4>
        {!loading && localStorage.getItem("lang") == "am"
          ? event?.descriptionHy
          : event?.descriptionEn}
      </Modal.Body>
      <Modal.Footer>
        <button className={styles.more} onClick={props.onHide}>{t('close')}</button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventModal;
