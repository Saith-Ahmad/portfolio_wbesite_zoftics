import React from "react";
import Card from "../card";
import Web from "../../../app/assets/web.png";
import Seo from "../../../app/assets/seo.png";
import Marketing from "../../../app/assets/marketing.png";

const Services = () => {

  return (
    <div className="container mx-auto py-12 px-4 my-20" id="services">
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-primary active">Find the best services in the town</p>
        <h2 className="heading-2 text-white text-center mb-8">What Our Clients Say!</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card image={Web} description="Custom websites tailored to your business needs." serviceName="Web Development"/>
        <Card image={Seo} description="Boost your website's visibility on search engines." serviceName="SEO Optimization"/>
        <Card image={Marketing} description="Effective strategies to grow your business online." serviceName="Digital Marketing"/>
      </div>
    </div>
  );
};

export default Services;
