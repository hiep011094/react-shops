import React from "react";
import Helmet from "./Helmet";
import Section, { SectionTitle, SectionBody } from "../Components/Section";
import List from "../Components/List";
import MainVisual from "../Components/MainVisual";
import Social from "../Components/Social";
import SlideHero from "../Components/SlideHero";
import PolicyCart from "../Components/PolicyCart";
import ProductCart from "../Components/ProductCart";
import Blog from "../Components/Blog";

import { dataMainVisual } from "../FakeData/FakaMainvisual";
import { dataSocial } from "../FakeData/FakeSocial";
import dataSlideHero from "../FakeData/FakeSlideHero";
import dataPolicy from "../FakeData/FakePolicy";
import FakeProductData from "../FakeData/FakeProduct";
import FakeblogData from "../FakeData/FakeBlog";

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
        <MainVisual data={dataMainVisual} />
        {/** end MainVisual */}

        <div className="p-top__inner">
          {/** Social */}
          <Social data={social} />
          {/** end Social */}
          {/** SlideHero  */}
          <SlideHero data={dataSlideHero} autoPlay={true} speed={5000} />
          {/** end  */}
          {/** PolicyCart  */}
          <Section>
            <SectionBody>
              <List col={4}>
                {dataPolicy.map((item, index) => (
                  <div key={index}>
                    <PolicyCart
                      name={item.name}
                      description={item.description}
                      icon={item.icon}
                    />
                  </div>
                ))}
              </List>
            </SectionBody>
          </Section>
          {/** end Slide */}
          {/** Product  */}
          <Section className="p-top__product1">
            <SectionTitle>Top sản Phẩm Bán Chạy Trong Tuần</SectionTitle>
            <SectionBody>
              <List col={4}>
                {FakeProductData.getProducts(4).map((item, index) => (
                  <div key={index}>
                    <ProductCart
                      name={item.title}
                      img01={item.image01}
                      img02={item.image02}
                      price={item.price}
                      priceOld={item.price_old}
                      slug={item.slug}
                    />
                  </div>
                ))}
              </List>
            </SectionBody>
          </Section>
          <Section className="p-top__product2">
            <SectionTitle>Sản Phẩm Mới</SectionTitle>
            <SectionBody>
              <List col={4}>
                {FakeProductData.getProducts(8).map((item, index) => (
                  <div key={index}>
                    <ProductCart
                      name={item.title}
                      img01={item.image01}
                      img02={item.image02}
                      price={item.price}
                      priceOld={item.price_old}
                      slug={item.slug}
                    />
                  </div>
                ))}
              </List>
            </SectionBody>
          </Section>
          {/** end  */}
          {/** Blog  */}
          <Section className="p-top__blog">
            <SectionTitle>Bài Viết Blog</SectionTitle>
            <SectionBody>
              <List col={2}>
                {FakeblogData.getblogs(4).map((item, index) => (
                  <div key={index}>
                    <Blog
                      name={item.title}
                      img={item.image01}
                      slug={item.slug}
                      description={item.description}
                      cate={item.cate}
                    />
                  </div>
                ))}
              </List>
            </SectionBody>
          </Section>
          {/** end  */}
          Home
        </div>
      </div>
    </Helmet>
  );
};

export default Home;
