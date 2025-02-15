
import React from 'react';
import ContactFormHomeOne from '@/components/forms/ContactFormHomeOne';
import contact_img_1 from "@/assets/images/resource/choose-thumb.png";
import Image from 'next/image';


const contact_area_content = {
  subtitle: 'Why Choose Us',
  title: 'Best Solution For Your',
  sm_des: "Risus commodo viverra maecenas accumsan lacus vel facilisis. Horem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
  festures: [
    "Best of Perfect Shine",
    "Geeen Energy Green Natural",
    "Solar Energy fou All The ",
  ],
  btn_text: "Get A Quout",
  phone: <>Emergency Call <span>+123956(6565)556-02</span></>,

}

const { subtitle, title, sm_des, festures, btn_text, phone } = contact_area_content

const ContactAreaHomeOne = () => {
  return (
    <>
      <div className="choose-us-section">
        <div className="container">
          <div className="row choose">
            <div className="col-lg-6 col-md-12">
              <div className="section-title wow animate__slideInUp">
                <div className="section-sub-title choose">
                  <h4>{subtitle}</h4>
                </div>
                <div className="section-main-title choose">
                  <h2>{title}</h2>
                </div>
              </div>
              <div className="choose-us-discription wow animate__slideInUp">
                <p>{sm_des}</p>
              </div>
              <div className="choose-us-content wow animate__zoomIn">
                <div className="choose-us-thumb">
                  <Image src={contact_img_1} alt="image-title" />
                </div>
                <div className="choose-us-list">
                  <ul>
                    {festures.map((item, index) => (
                      <li key={index}><i className="bi bi-check"></i> {item}</li>
                    ))} 
                  </ul>
                </div>
                <div className="choose-us-info">
                  <div className="solar-btn choose">
                    <a href="#">{btn_text} <i className="bi bi-arrow-right"></i></a>
                  </div>
                  <div className="choose-us-icon">
                    <i className="bi bi-telephone-plus"></i>
                  </div>
                  <div className="choose-us-phone">
                    <h5>{phone}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="choose-contact-box wow animate__slideInRight">
                <div className="choose-contact-title">
                  <h4>Make an Appointment</h4>
                </div>

                <ContactFormHomeOne /> 


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAreaHomeOne;