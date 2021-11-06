import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const Social = (props) => {
  return (
    <ul className="c-social">
      {props.data.map((item) => (
        <li key={item.id}>
          <a href={item.url} className={item.icon}>
            <FontAwesomeIcon icon={["fab", item.icon]} />
          </a>
        </li>
      ))}
    </ul>
  );
};

Social.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Social;
