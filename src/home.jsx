import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './components/ui/button'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'
import OwnersImage from './components/OwnersImage'
import SearchByOption from './search'
import ALLCarsHere from './components/AllCarsHere'
import HappyCustomers from './components/HappyCustomers'

const Home = () => {
  return (
    <div>
      {/* <SignInButton mode='modal' forceRedirectUrl='/'>
        <Button>Sign In</Button>
      </SignInButton> */}
      {/* header */}
      <Header/>
      {/* hero */}
      <Hero/>
      {/* Category */}
      <Category/>
      {/* New comp create  */}
      <ALLCarsHere/>
      {/* InfoSection */}
      <InfoSection/>
      {/* Owners images  */}
      <OwnersImage/>
      <HappyCustomers/>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Home
