import React from "react";

const Footer = ({ things, auth }) => {
  return (
    <div className="footer_container">
      <div className="footer_box">
        <div>
          <span>Copyright by CodersLab</span>
        </div>
        <div className="footer_icons__box">
          <div className="facebook" />
          <div className="instagram" />
        </div>
      </div>
      <div>
        {!things
          ? null
          : things.map(el =>
              el.authorId !== auth.uid ? null : (
                <div key={el.id}>
                  <span>{el.id}</span>
                  <span>{el.bags}</span>
                </div>
              )
            )}
      </div>
    </div>
  );
};

export default Footer;
