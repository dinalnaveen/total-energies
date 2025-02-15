
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CopyRight, TeamSocialLinks } from '@/components/common/SocialLinks';

import footer_logo from  "@/assets/images/resource/footer-logo.png";
import footer_thumb from  "@/assets/images/resource/footer-thumb.png";


const footer_content = {
  sm_info: "Feugiat a ligula rutrum luctus primis ultrice nteger congue magna at pretium purus a pretium ligula rutrum and luctus risus",
  list_title: "Industry Sectors",
  list_items: [
    {
      title: "Contact us",
      link: "/contact",
    },
    {
      title: "How it Works",
      link: "#",
    },
    {
      title: "Office Create",
      link: "#",
    },
    {
      title: "Residential Explore",
      link: "#",
    },
    {
      title: "Terms & Services",
      link: "#",
    },
  ],
  title: "Get In Touch",
  address: "Valentin, Street Road 24, New York, USA - 67452",
  phone: "(+02) 574 - 328 - 30",
  email: "example@email.com",
  bootom_links: [
    'Privercy',
    'Term & Conditions',
    'Legal',
  ]
}
const { sm_info, list_title, list_items, title, address, phone, email, bootom_links } = footer_content;

const FooterOne = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-wiget wow animate__zoomIn">
                <div className="footer-wiget-log">
                  <Link href="/"><Image src={footer_logo} alt="image-title" /></Link>
                </div>
                <div className="footer-wiget-text">
                  <p>{sm_info}</p>
                </div>
                <div className="footer-wiget-social">
                  <ul>
                    <TeamSocialLinks /> 
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-wiget wow animate__slideInDown">
                <div className="footer-wiget-title">
                  <h4>{list_title}</h4>
                </div>
                <div className="footer-wiget-menu">
                  <ul>
                    {list_items.map((item, i) => (
                      <li key={i}><Link href={item.link}>{item.title}</Link></li>
                    ))} 
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-wiget-quick-contanct wow animate__slideInUp">
                <div className="footer-wiget-title">
                  <h4>{title}</h4>
                </div>
                <div className="footer-wiget-contact-menu">
                  <ul>
                    <li>{address}</li>
                    <li>{phone}</li>
                    <li><a href="#">{email}</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-thumb wow animate__slideInDown">
                <Image src={footer_thumb} alt="image-title" />
              </div>
            </div>
          </div>
          <div className="row footer-line">
            <div className="col-lg-3 col-md-6">
              <div className="copyright-text wow animate__slideInUp">
                <p><CopyRight /></p>
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-condition wow animate__slideInDown">
                <ul>
                  {bootom_links.map((item, i) => (
                    <li key={i}><Link href="#">{item}</Link></li>
                  ))} 
                </ul>
              </div>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;