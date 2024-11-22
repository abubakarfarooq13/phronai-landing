import React from 'react'
import LightNav from "../Shared/Nav/LightNav";
import FooterLighter from "../Shared/Footer/LightFooter";
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import { Box } from '@chakra-ui/react';
const OpenPhron = () => {
  return (
    <>
    <LightNav />
    <Box className='openbg'>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    </Box>
    <FooterLighter />
    </>
  )
}

export default OpenPhron