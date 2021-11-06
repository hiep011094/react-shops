import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
  const col = props.col ? `c-list--${props.col}` : "";
  return (
    <div className={`c-list ${col}`}>
      {props.children.map((item, index) => (
        <div key={index} className="c-list__item">
          {item.props.children}
        </div>
      ))}
    </div>
  );
};

List.propTypes = {
  col: PropTypes.number,
};
List.defaultProps = {
  col: null,
};

export default List;
