import service_data from '@/data/ServiceData';
import Image from 'next/image';
import React from 'react';

const services = service_data.filter(item => item.path === "home_1");

const ServiceAreaHomeOne = ({ style, style_2 }: any) => {
  const data = style ? service_data : services;

  const revolutionServices = data.filter(item => item.category === "revolution");
  const otherServices = data.filter(item => item.category === "other");

  const renderServiceSection = (subtitle: string, title: string) => (
    <div className="row ">
      <div className="col-lg-12">
        <div className="section-title text-center">
          <div className="section-sub-title wow slideInLeft">
            <h4>{subtitle}</h4>
          </div>
          <div className="section-main-title wow slideInLeft">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCards = (list: typeof data) => (
    <div className="row">
      {list.map((item, index) => (
        <div key={index} className="col-lg-4 col-md-6 d-flex">
          <div className={`service-box ${style ? "style-two" : ""} wow animate__backInUp w-100 d-flex flex-column`}>
            <div className="service-thumb d-flex flex-column h-100">
              <Image src={item.img} style={{ height: 'auto' }} alt={item.title} />
              <div className="service-content d-flex flex-column justify-content-between flex-grow-1">
                <div className="service-icon-thumb" style={{ flexShrink: 0 }}>
                  <Image src={item.icon} alt="icon" />
                </div>
                <div className="service-text text-center">
                  <h4>{item.title}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`service-section ${style ? "style-two" : style_2 ? "style-three" : ""}`}>
      <div className="container">
        {/* {!style_2 && (
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title wow slideInLeft">
                  <h4>Our Most Service</h4>
                </div>
                <div className="section-main-title wow slideInLeft">
                  <h2>Provide Solar Solution</h2>
                </div>
              </div>
            </div>
          </div>
        )} */}

        {/* Section 1 */}
        {renderServiceSection("From Broacher", "Revolutionizing Your Experience")}
        {renderCards(revolutionServices)}

        {/* Section 2 */}
        {renderServiceSection("TOTAL SOLAR CARE", "Other Services You Can Purchase")}
        {renderCards(otherServices)}
      </div>
    </div>
  );
};

export default ServiceAreaHomeOne;
