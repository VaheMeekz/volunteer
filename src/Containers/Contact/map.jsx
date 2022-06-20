import React from "react";
const AddressMap = () => {
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d6097.5188336438205!2d44.44996562611193!3d40.1699099675779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x406abdc2a871804f%3A0x3ab2859099e9329!2sRaffi%20St%2C%20Yerevan%2C%20Armenia!3m2!1d40.1742376!2d44.448111399999995!4m3!3m2!1d40.167862299999996!2d44.459172599999995!5e0!3m2!1sen!2s!4v1654855786686!5m2!1sen!2s%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade%22%3E%3C/iframe%3E"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
};
export { AddressMap };
