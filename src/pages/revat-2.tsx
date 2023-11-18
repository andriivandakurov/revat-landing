import * as React from 'react';
import SEO from '../components/Seo/Seo';
import Header from '../components/Header/Header';
import Contacts from '../components/Contacts/Contacts';
import Map from '../components/Map/Map';
import Footer from '../components/Footer/Footer';
import ButtonMarkup from '../components/ButtonMarkup/ButtonMarkup';
import ScrollTopButton from '../components/ScrollTopButton/ScrollTopButton';
import ImageGallery from '../components/ImageGallery/ImageGallery';

import NewsSection from '../sections/News';
import ScheduleSection from '../sections/Schedule';
import PricesSection from '../sections/Prices';
import StaffSection from '../sections/Staff';
import CounterSection from '../sections/Counter';
import ClassesSection from '../sections/Classes';
import AdvantagesSection from '../sections/Advantages';

import ColorLogo from '../images/color-logo.png';
import GymVideoMp4 from '../videos/squat-it.mp4';

const IndexPage: React.SFC<{}> = (props): JSX.Element => {
  return (
    <>
      <SEO
        keywords={[
          'кросфіт',
          'кросфіт Львів',
          'кроссфіт',
          'заняття з кросфіту',
          'crossfit',
          'crosfit',
          'кросфіт тренування',
          'зал для кросфіту',
          'Revat',
          'Реват',
        ]}
      />

      <section className="main-screen">
        <div className="container">
          <Header />

          <div className="main-screen-content">
            <img alt="Revat" src={ColorLogo} />
            <h1>
              Ставай кращим <br /> разом з нами!
            </h1>
            <a href="#contacts">
              <ButtonMarkup>
                Записатись на безкоштовне <br /> тренування
              </ButtonMarkup>
            </a>
          </div>
        </div>

        <div className="video-wrapper">
          <video
            className="video-inner"
            autoPlay={true}
            playsInline={true}
            muted={true}
            loop={true}
          >
            <source src={GymVideoMp4} type="video/mp4" />
            {/* <source src={GymVideoWebm} type="video/webm" /> */}
            {/* <source
              src="http://thenewcode.com/assets/videos/polina.mp4"
              type="video/mp4"
            /> */}
          </video>
        </div>
      </section>

      <AdvantagesSection />
      <ClassesSection/>
      <ImageGallery />
      <CounterSection />
      <StaffSection/>
      <PricesSection />
      <ScheduleSection/>
      <NewsSection/>
      <Contacts />
      {/* <Map /> */}
      <Footer />
      <ScrollTopButton />
    </>
  )
}

export default IndexPage
