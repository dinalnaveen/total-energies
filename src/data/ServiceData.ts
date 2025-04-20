

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
  // home 01
  {
    id: 1,
    path: "home_1",
    img: service_img_1,
    icon: service_icon_1,
    title: "Solar Panels Services",
    sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  },
  {
    id: 2,
    path: "home_1",
    img: service_img_2,
    icon: service_icon_2,
    title: "Roof Solar Panels",
    sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  },
  {
    id: 3,
    path: "home_1",
    img: service_img_3,
    icon: service_icon_3,
    title: "Commercial Roofing",
    sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  },

  // service
  {
    id: 1,
    path: "service",
    img: service_img_2,
    icon: service_icon_2,
    title: "Roof Solar Panels",
    sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  },
  {
    id: 2,
    path: "service",
    img: service_img_3,
    icon: service_icon_3,
    title: "Commercial Roofing",
    sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  },
  {
    id: 3,
    path: "service",
    img: service_img_1,
    icon: service_icon_1,
    title: "Solar Panels Services",
    sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  },


]
export default service_data