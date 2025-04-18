import service_img_1 from "@/assets/images/resource/service1.png";
import service_img_2 from "@/assets/images/resource/service2.png";
import service_img_3 from "@/assets/images/resource/service3.png";

import service_icon_1 from "@/assets/images/resource/service-icon1.png";
import service_icon_2 from "@/assets/images/resource/service-icon2.png";
import service_icon_3 from "@/assets/images/resource/service-icon3.png";

import { StaticImageData } from "next/image";

interface DataType {
  id: number;
  path: string;
  category: string;
  img: StaticImageData;
  icon: StaticImageData;
  title: string;
}

const service_data: DataType[] = [
  // Revolutionizing Your Experience
  {
    id: 1,
    path: "home_1",
    category: "revolution",
    img: service_img_1,
    icon: service_icon_1,
    title: "Safety Enhancement",
  },
  {
    id: 2,
    path: "home_1",
    category: "revolution",
    img: service_img_2,
    icon: service_icon_2,
    title: "Improve the Performance of Your Existing Solar Installation",
  },
  {
    id: 3,
    path: "home_1",
    category: "revolution",
    img: service_img_3,
    icon: service_icon_3,
    title: "Enabled Real-Time Monitoring",
  },
  {
    id: 4,
    path: "home_1",
    category: "revolution",
    img: service_img_1,
    icon: service_icon_1,
    title: "Enabled Real-Time Reporting",
  },
  {
    id: 5,
    path: "home_1",
    category: "revolution",
    img: service_img_2,
    icon: service_icon_2,
    title: "System Upgrade",
  },
  {
    id: 6,
    path: "home_1",
    category: "revolution",
    img: service_img_3,
    icon: service_icon_3,
    title: "Site Inspection and Reports",
  },
  {
    id: 7,
    path: "home_1",
    category: "revolution",
    img: service_img_1,
    icon: service_icon_1,
    title: "System and Equipment Repairs",
  },

  // Other Services You Can Purchase
  {
    id: 8,
    path: "home_1",
    category: "other",
    img: service_img_2,
    icon: service_icon_2,
    title: "Total Solar Care",
  },
  {
    id: 9,
    path: "home_1",
    category: "other",
    img: service_img_3,
    icon: service_icon_3,
    title: "Energy Audits",
  },
  {
    id: 10,
    path: "home_1",
    category: "other",
    img: service_img_1,
    icon: service_icon_1,
    title: "Thermal Imaging",
  },
  {
    id: 11,
    path: "home_1",
    category: "other",
    img: service_img_2,
    icon: service_icon_2,
    title: "Panel Arrangement for Optimal Power Generation",
  },
  {
    id: 12,
    path: "home_1",
    category: "other",
    img: service_img_3,
    icon: service_icon_3,
    title: "Panel-Level Safety and Performance Monitoring",
  },
  {
    id: 13,
    path: "home_1",
    category: "other",
    img: service_img_1,
    icon: service_icon_1,
    title: "Cable Fault Detection and Performance Monitoring",
  },
  {
    id: 14,
    path: "home_1",
    category: "other",
    img: service_img_2,
    icon: service_icon_2,
    title: "Inverter Settings and Configurations",
  },
  {
    id: 15,
    path: "home_1",
    category: "other",
    img: service_img_3,
    icon: service_icon_3,
    title: "Safety and Security Standards Compliance",
  },
];

export default service_data;
