import React from "react";
import Helmet from "./Helmet";
// import MainVisual from "../Components/MainVisual";
import Social from "../Components/Social";
import SlideHero from "../Components/SlideHero";

// import { dataMainVisual } from "../FakeData/FakaMainvisual";
import { dataSocial } from "../FakeData/FakeSocial";
import dataSlideHero from "../FakeData/FakeSlideHero";

const Home = () => {
  const socialDatafun = () => {
    const social = [];
    dataSocial.forEach((item) => {
      const dt = { ...item, icon: item.name.toLowerCase() };
      social.push(dt);
    });
    return social;
  };
  const social = socialDatafun();

  return (
    <Helmet title="Trang chủ">
      <div className="p-top">
        {/** Hero MainVisual */}
        {/* <MainVisual data={dataMainVisual} /> */}
        {/** end MainVisual */}
        <div className="p-top__inner">
          {/** Hero Slide */}
          <SlideHero data={dataSlideHero} />
          {/** end Slide */}
          {/** Hero Social */}
          {/* <Social dataSocial={social} /> */}
          {/** end Social */}
          {/** Hero Social */}
          <Social data={social} />
          {/** end Social */}
          Home
        </div>
      </div>
    </Helmet>
  );
};

export default Home;
