import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faAngleLeft, faAngleRight);

const SlideHero = (props) => {
  const data = props.data;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const cls = document.querySelectorAll(".c-slider01 .ani");
    const cls1 = document.querySelectorAll(".c-slider01__item.active .ani");
    const cls3 = document.querySelectorAll(".c-slider01 .ani-img");
    const cls4 = document.querySelectorAll(".c-slider01__item.active .ani-img");
    let delay = 0.1;

    cls1.forEach((element, index) => {
      // console.log(index);
      if (index !== 0) {
        delay = delay + 0.2;
        element.style.transitionDelay = delay + "s";
      }
      element.classList.add("animation");
    });
    cls4.forEach((element) => {
      element.classList.add("img-animation");
    });

    return () => {
      cls.forEach((element) => {
        element.classList.remove("animation");
      });
      cls3.forEach((element) => {
        element.classList.remove("img-animation");
      });
    };
  }, [active]);

  return (
    <div className="c-slider01">
      {data.map((item, index) => (
        <SlideHeroItem key={index} data={item} active={index === active} />
      ))}
      <ul className="c-slider01__control">
        <li
          onClick={() => setActive(active === 0 ? 2 : active - 1)}
          className="prev"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </li>
        <li>
          {active + 1}/{data.length}
        </li>
        <li
          onClick={() => setActive(active === data.length - 1 ? 0 : active + 1)}
          className="next"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </li>
      </ul>
    </div>
  );
};

SlideHero.propTypes = {
  data: PropTypes.array.isRequired,
};

const SlideHeroItem = (props) => {
  const divStyle = {
    color: {
      color: props.data.color,
    },
    bg: {
      background: props.data.color,
    },
  };
  //   console.log(props.active);

  return (
    <div className={`c-slider01__item ${props.active ? "active" : ""}`}>
      <div className="c-slider01__info">
        <div className={`c-ttl01 ani`}>
          <span style={divStyle.color}>{props.data.title}</span>
        </div>
        <div className={`description ani`}>
          <span>{props.data.description}</span>
        </div>
        <div style={divStyle.bg} className="c-btn01 ani">
          <Link to="/">Xem Chi Tiết</Link>
        </div>
      </div>
      <div className="c-slider01__img">
        <img className="ani-img" src={props.data.img} alt={props.data.title} />
        <div style={divStyle.bg} className="shape"></div>
      </div>
    </div>
  );
};

export default SlideHero;
