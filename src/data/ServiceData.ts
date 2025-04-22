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
  img: StaticImageData;
  icon: StaticImageData;
  title: string;
  sm_des: string;
}

const service_data: DataType[] = [
  // ===== From Brochure =====
  {
    id: 1,
    path: "brochure",
    img: service_img_1,
    icon: service_icon_1,
    title: "Safety Enhancement",
    sm_des: "Enhance the overall safety of your existing solar system.",
  },
  {
    id: 2,
    path: "brochure",
    img: service_img_2,
    icon: service_icon_2,
    title: "Improve Existing Solar Performance",
    sm_des: "Boost performance using expert optimization and upgrades.",
  },
  {
    id: 3,
    path: "brochure",
    img: service_img_3,
    icon: service_icon_3,
    title: "Real-Time Monitoring",
    sm_des: "Monitor your system live to ensure consistent energy generation.",
  },
  {
    id: 4,
    path: "brochure",
    img: service_img_1,
    icon: service_icon_1,
    title: "Real-Time Reporting",
    sm_des: "Get immediate reports on your solar system’s performance.",
  },
  {
    id: 5,
    path: "brochure",
    img: service_img_2,
    icon: service_icon_2,
    title: "System Upgrade",
    sm_des: "Upgrade older solar components to the latest technology.",
  },
  {
    id: 6,
    path: "brochure",
    img: service_img_3,
    icon: service_icon_3,
    title: "Site Inspection and Reports",
    sm_des: "Detailed inspections with professional evaluations and reports.",
  },
  {
    id: 7,
    path: "brochure",
    img: service_img_1,
    icon: service_icon_1,
    title: "System and Equipment Repairs",
    sm_des: "Fast and reliable repairs for any solar-related hardware.",
  },

  // ===== Other Services You Can Purchase =====
  {
    id: 8,
    path: "addon",
    img: service_img_2,
    icon: service_icon_2,
    title: "Total Solar Care",
    sm_des: "Full-service care plan for your solar system’s lifecycle.",
  },
  {
    id: 9,
    path: "addon",
    img: service_img_3,
    icon: service_icon_3,
    title: "Energy Audits",
    sm_des: "Assess your energy usage and optimize efficiency.",
  },
  {
    id: 10,
    path: "addon",
    img: service_img_1,
    icon: service_icon_1,
    title: "Thermal Imaging",
    sm_des: "Detect thermal inefficiencies and hidden faults.",
  },
  {
    id: 11,
    path: "addon",
    img: service_img_2,
    icon: service_icon_2,
    title: "Optimal Panel Arrangement",
    sm_des: "Strategically arrange panels to maximize solar output.",
  },
  {
    id: 12,
    path: "addon",
    img: service_img_3,
    icon: service_icon_3,
    title: "Panel-Level Monitoring",
    sm_des: "Monitor performance and safety at the individual panel level.",
  },
  {
    id: 13,
    path: "addon",
    img: service_img_1,
    icon: service_icon_1,
    title: "Cable Fault Detection",
    sm_des: "Identify wiring issues affecting solar performance.",
  },
  {
    id: 14,
    path: "addon",
    img: service_img_2,
    icon: service_icon_2,
    title: "Inverter Settings & Configs",
    sm_des: "Tune inverter settings for optimal functionality.",
  },
  {
    id: 15,
    path: "addon",
    img: service_img_3,
    icon: service_icon_3,
    title: "Safety & Compliance Checks",
    sm_des: "Ensure system adheres to all safety and legal standards.",
  },
];

export default service_data;
