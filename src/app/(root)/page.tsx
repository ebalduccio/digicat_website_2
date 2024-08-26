'use client'

import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import DigitalTransformation from './components/DigitalTransformation'
import PartnershipSection from './components/Partners'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <DigitalTransformation />
      <PartnershipSection />
    </>
  )
}

export default HomePage