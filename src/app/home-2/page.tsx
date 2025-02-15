
import HomeTwo from '@/components/homes/home-2';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'Home two - SolerPanel-Solar & Renewable Energy React Next js Template',
  description: 'The Solar Panel React Next js template is a modern and responsive design specifically created for websites related to solar energy and renewable energy solutions',
}


const index = () => {
  return (
    <Wrapper>
      <HomeTwo />
    </Wrapper>
  );
};

export default index;