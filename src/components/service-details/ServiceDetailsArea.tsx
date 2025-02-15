'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Accordion from '../common/Accordion';

import service_details_thumb_1 from '@/assets/images/resource/service-details.png';
import service_details_thumb_2 from '@/assets/images/resource/service-details2.png';
import service_details_thumb_3 from '@/assets/images/resource/service-details3.png';

interface DataType {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
  title_2: string;
  categories: string[];
  help_title: string;
  help_info: string;
  phone: string;
  email: string;
}


const service_details_content: DataType = {
  title: "This service overview",
  sm_des_1: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  dolore magna ali Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irures dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat nonm proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor.",
  sm_des_2: "sit amet, consectetur adipisoftwareit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Duis fvUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
  title_2: "This service overview Everyone",

  categories: [
    "Commercial Building ",
    "Installation ",
    "Renewable Energy ",
    "Solar Energy ",
    "Wind Generators ",
    "Financial Investment ",
    "Solar Panels ",
  ],
  help_title: "Need Help?",
  help_info: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  phone: "(123) 456-7890",
  email: "example@gmail.com",
}
const { title, sm_des_1, sm_des_2, title_2, categories, help_title, help_info, phone, email } = service_details_content


const ServiceDetailsArea = () => {
  return (
    <>
      <div className="service-details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="service-details-thumb">
                <Image src={service_details_thumb_1} style={{ width: '100%', height: 'auto' }} alt="service-details" />
              </div>
              <div className="service-details-title">
                <h4>{title}</h4>
              </div>
              <div className="service-details-discription">
                <p>{sm_des_1}</p>
                <p>{sm_des_2}</p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="service-details-thumb-two">
                    <Image src={service_details_thumb_2} style={{height: "auto"}} alt="image-title" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="service-details-thumb-two">
                    <Image src={service_details_thumb_3} style={{height: "auto"}} alt="image-title" />
                  </div>
                </div>
              </div>
              <div className="service-details-title">
                <h4>{title_2}</h4>
              </div>
              <div className="service-details-discription">
                <p>{sm_des_1}</p>
              </div>
              <Accordion />
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <!-- widget search --> */}
              <div className="widget_search box mb-30">
                <form onSubmit={e => e.preventDefault()} method="get">
                  <input type="text" name="s" value="" placeholder="Search Here" title="Search for:" />
                    <button type="submit" className="icons">
                      <i className="fa fa-search"></i>
                    </button>
                </form>
              </div>
              <div className="widget-categories-box two">
                {/* <!-- widget categories menu --> */}
                <div className="widget-categories-menu asd">
                  <ul>
                    {categories.map((item, i) => (
                      <li><Link href="/service-details" style={{ color: "#000" }}>{item}<span><i className="bi bi-arrow-right"></i></span></Link></li>                      
                    ))} 
                  </ul>
                </div>
              </div>
              <div className="widget-help-box">
                <div className="widget-content">
                  <h4>{help_title}</h4>
                  <p>{help_info}</p>
                  <div className="widget-info-social-link">
                    <ul>
                      <li><a href="tel:(555)123-4567"><i className="bi bi-telephone"></i> <span>{phone}</span></a></li>
                      <li><a href="mailto:support@sertom.com"><i className="bi bi-envelope"></i> <span>{email}</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;