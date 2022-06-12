import * as React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/Seo/Seo'
import Header from '../components/Header/Header'
import Articles from '../components/Articles/Articles'
import Contacts from '../components/Contacts/Contacts'
import Map from '../components/Map/Map'
import Footer from '../components/Footer/Footer'
import ButtonMarkup from '../components/ButtonMarkup/ButtonMarkup'
import ScrollTopButton from '../components/ScrollTopButton/ScrollTopButton'

import ColorLogo from '../images/color-logo.png'
import WeightIcon from '../images/advantages/weight.png'
import HeartIcon from '../images/advantages/heart.png'
import LightningIcon from '../images/advantages/lightning.png'
import DumbbellIcon from '../images/advantages/dumbbell.png'

import GalleryImage1 from '../images/gallery/1.png'
import GalleryImage2 from '../images/gallery/2.png'
import GalleryImage3 from '../images/gallery/3.png'
import GalleryImage4 from '../images/gallery/4.png'
import GalleryImage5 from '../images/gallery/5.png'
import GalleryImage6 from '../images/gallery/6.png'

import StaffImage1 from '../images/staff/1.jpg'
import StaffImage2 from '../images/staff/2.jpg'
import StaffImage3 from '../images/staff/3.jpg'
import StaffImage4 from '../images/staff/4.jpg'
import StaffImage5 from '../images/staff/5.jpg'

import ClassImage1 from '../images/class/1.jpg'
import ClassImage2 from '../images/class/2.jpg'
import ClassImage3 from '../images/class/3.jpg'
import ClassImage4 from '../images/class/4.jpg'

import GymVideoMp4 from '../videos/squat-it.mp4'

const IndexPage: React.SFC<{}> = (props): JSX.Element => {
  return (
    <>
      <SEO title="Home" keywords={['Revat', 'Revat Gym', 'Revat Hard Total']} />

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
                Безкоштовне <br /> тренування
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

      <section className="advantages">
        <div className="container">
          <h3 className="red">Що ти отримаєш?</h3>

          <div className="advantages-list">
            <div className="advantages-item">
              <div className="advantage-image">
                <img src={DumbbellIcon} alt="Crossfit" />
              </div>
              <span className="advantage-title">Crossfit</span>
              <p>
                Знайдеш нових друзів, адже ми одна дружня команда де у всіх одна
                ціль - прагнути розвитку!
              </p>
            </div>

            <div className="advantages-item">
              <div className="advantage-image">
                <img src={HeartIcon} alt="Здоровя" />
              </div>
              <span className="advantage-title">Здоров'я</span>
              <p>
                Вже давно відомо, що спортивні навантаження сприяють зміцненню
                імунітету, а ще це хороша профілактика ряду захворювань!
              </p>
            </div>

            <div className="advantages-item">
              <div className="advantage-image">
                <img src={LightningIcon} alt="Силу" />
              </div>
              <span className="advantage-title">Силу</span>
              <p>
                Так так, ми виконуємо силові вправи, тут тебе навчать виконувати
                важкоатлетичні елементи а також вправи з гирями/гантелями та
                іншим інвентарем який може тобі допомогти в прогресі! А під
                пильним наглядом наших тренерів - твоя техніка буде в безпеці!
              </p>
            </div>

            <div className="advantages-item">
              <div className="advantage-image">
                <img src={WeightIcon} alt="Витривалість" />
              </div>
              <span className="advantage-title">Витривалість</span>
              <p>
                Невідємна частина нашого життя, вона потрібна нам усюди
                починаючи від походів в гори і закінчуючи підйомом на свій
                поверх коли зламався ліфт, ааа ледь не забули, ще ж потрібно
                донести пакети з Ашану. Для розвитку витривалості у нас є безліч
                унікальних тренажерів, яких немає у інших залах!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="staff classes" id="classes">
        <div className="container">
          <h3>Класи</h3>
          <div className="staff-row first-row">
            <div className="staff-item class-1">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  Групові тренування
                  <span>90 хвилин &#8226; 1200 грн</span>
                </div>
                <div className="staff-item-image-wrapper">
                  <img src={ClassImage1} />
                </div>
              </div>
              <div className="staff-item-data">
                Даєш п`ять на вході, отримуєш масу позитиву на виході!
                Тренування проходять у групах 6-12 осіб під чітким наглядом
                тренера! Тут ви освоїте всі базові навички які необхідні в
                кросфіті, а підбір тренування під кожного створює можливість для
                заняття від новачка до атлета - профі!
              </div>
            </div>
            <div className="staff-item class-2">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  Індивідуальні тренування
                  <span>90 хвилин &#8226; 1200 грн</span>
                </div>
                <div className="staff-item-image-wrapper">
                  <img src={ClassImage2} />
                </div>
              </div>
              <div className="staff-item-data">
                Тут ви отримуєте максимальний розвиток, заняття проводяться
                строго по заданих цілях, тренери підбирають оптимальну програму
                тренувань а також дають практичні рекомендації стосовно
                харчування, сну та режиму дня. що в свою чергу приводить до
                максимального прогресу!
              </div>
            </div>
            <div className="staff-item class-3">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  Crossintensity
                  <span>90 хвилин &#8226; 1200 грн</span>
                </div>
                <div className="staff-item-image-wrapper">
                  <img src={ClassImage4} />
                </div>
              </div>
              <div className="staff-item-data">
                Тренування для тих, хто хоче скинути зайву вагу, на відміну від
                звичайних груп, тут більше уваги приділяється кардіо тренуванням
                та вправам із своєю вагою, силові тренування також є проте дещо
                менше ніж у звичайних групах!
              </div>
            </div>
            <div className="staff-item class-4">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  Важка атлетика
                  <span>90 хвилин &#8226; 1200 грн</span>
                </div>
                <div className="staff-item-image-wrapper">
                  <img src={ClassImage3} />
                </div>
              </div>
              <div className="staff-item-data">
                Даний напрямок для тих, хто хоче опанувати навики та покращити
                техніку у олімпійському виді спорту. Вправи зі штангою не будуть
                здаватись такими складними під чітким керівництвом наших
                тренерів!
              </div>
            </div>
          </div>
          <div className="staff-row second-row">
            <div className="staff-item class-5">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  Підготовка до Race Nation
                  <span>90 хвилин &#8226; 1200 грн</span>
                </div>
                <div className="staff-item-image-wrapper">
                  <img src={ClassImage1} />
                </div>
              </div>
              <div className="staff-item-data">
                Безліч атлетів нашого залу приймають участь у даній гонці та
                виступають все краще і краще! Підйом по канату чи вибігання на
                рампу будуть нескладними якщо ти довіриш свою підготовку
                професіоналам!
              </div>
            </div>
            <div className="staff-item class-6">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  Crossfit для дітей
                  <span>90 хвилин &#8226; 1200 грн</span>
                </div>
                <div className="staff-item-image-wrapper">
                  <img src={ClassImage2} />
                </div>
              </div>
              <div className="staff-item-data">
                12 занять впродовж місяця в малих групах (3-4 особи). Тренер має
                змогу приділити більше уваги кожному з атлетів. Кожен особисто
                зможе взяти участь у формуванні розкладу тренувань.
              </div>
            </div>
            {/* <div className="staff-item class-7">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  Split тренування
                  <span>90 хвилин &#8226; 1200 грн</span>
                </div>
                <div className="staff-item-image-wrapper">
                  <img src={ClassImage1} />
                </div>
              </div>
              <div className="staff-item-data">
                12 занять впродовж місяця в малих групах (3-4 особи). Тренер має
                змогу приділити більше уваги кожному з атлетів. Кожен особисто
                зможе взяти участь у формуванні розкладу тренувань.
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="image-gallery" id="gallery">
        <div className="container">
          <h3 className="red">Тренуйся з нами</h3>

          <div className="image-gallery-wrapper">
            <div className="row">
              <div className="gallery-image-1">
                <img src={GalleryImage1} alt="" />
              </div>
              <div className="gallery-image-2">
                <img src={GalleryImage2} alt="" />
              </div>
              <div className="gallery-image-3">
                <img src={GalleryImage3} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="gallery-image-4">
                <img src={GalleryImage6} alt="" />
              </div>
              <div className="gallery-image-5">
                <img src={GalleryImage4} alt="" />
              </div>
              <div className="gallery-image-6">
                <img src={GalleryImage5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter">
        <div className="container">
          <span className="counter-amount">20 910 063</span>
          <h3>
            ДОКИ ТИ СИДИШ У СВОЄМУ
            <br /> КРІСЕЛКУ НАША КІЛЬКІСТЬ
            <br /> БУРПІ РОСТЕ!
          </h3>

          <a href="#contacts">
            <ButtonMarkup>
              безкоштовне <br /> тренування
            </ButtonMarkup>
          </a>
        </div>
      </section>

      <section className="staff" id="coaches">
        <div className="container">
          <h3>Revat family</h3>

          <div className="staff-row first-row">
            <div className="staff-item staff-1">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  ЮЛІЯН
                  <br />
                  ЧЕРЕВАТИЙ
                </div>
                <div className="staff-item-image-wrapper">
                  <img src={StaffImage1} />
                </div>
              </div>
              <div className="staff-item-data">
                Сертифікований тренер з кросфіту (CF-L2 trainer) Переможець та
                призер багатьох змагань з кросфіту! Гігантський тренерський
                стаж, був першим тренером з кросфіту у Львові! Серед підопічних
                - багато переможців місцевих, всеукраїнських та міжнародних
                змагань з кросфіту! Сильні сторони : підготовка атлетів до
                змагань різного рівня в тому числі і Race nation ентузіазм
                незагублений роками досвіду вміє насупити брови, так що
                захочеться викладатись більше!
              </div>
            </div>

            <div className="staff-item staff-2">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  Ольга
                  <br />
                  Черевата
                </div>
                <div className="staff-item-image-wrapper">
                  <img src={StaffImage2} />
                </div>
              </div>
              <div className="staff-item-data">
                Тренер Crossintencity та Важкої атлетики! Одна з пілігримів
                кросфіту у Львові, переможниця та призерка змагань з кросфіту ,
                Майстер Спорту з Важкої атлетики а також багаторазова чемпіонка
                України з важкої атлетики! Основний напрямок - створення
                індивідуальних тренувань для вашого максимального прогресу !
                Сильні сторони: Маленька, тендітна - тренування строгі та
                продуктивні! Ти завжди знаєш, скільки ти б не підняв - Оля
                підніме більше! Це створює мотивацію розвиватись!
              </div>
            </div>

            <div className="staff-item staff-3">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  СЕРГІЙ
                  <br />
                  ЗАХАРУК
                </div>
                <div className="staff-item-image-wrapper">
                  <img src={StaffImage3} />
                </div>
              </div>
              <div className="staff-item-data">
                Тренер з багаторічним досвідом, основний напрямок - групові
                тренування а також індивідуальні заняття. Під керівницвом даного
                тренера багато атлетів беруть участь у змаганнях з кросфіту та
                Race nation! Сильні сторони : Має ряд коронних фраз , які
                змотивують тебе викладатись більше Інколи вдягає авторську
                футболку, якщо таке трапляється, твоїм слабким сторонам прийшов
                кінець
              </div>
            </div>

            <div className="staff-item staff-4">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  СЕРГІЙ
                  <br />
                  Репетюк
                </div>
                <div className="staff-item-image-wrapper">
                  <img src={StaffImage4} />
                </div>
              </div>
              <div className="staff-item-data">
                Тренер має змогу приділити більше уваги кожному з атлетів. Кожен
                особисто зможе взяти участь у формуванні розкладу тренувань.
              </div>
            </div>
          </div>

          <div className="staff-row second-row">
            <div className="staff-item staff-5">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  ВІТАЛІЙ
                  <br />
                  ГУМЕНЮК
                </div>
                <div className="staff-item-image-wrapper">
                  <img src={StaffImage5} />
                </div>
              </div>
              <div className="staff-item-data">
                Тренер має змогу приділити більше уваги кожному з атлетів. Кожен
                особисто зможе взяти участь у формуванні розкладу тренувань.
              </div>
            </div>

            <div className="staff-item staff-6">
              <div className="staff-item-container">
                <div className="staff-item-label">Ольга Заяць</div>
                <div className="staff-item-image-wrapper">
                  <img src={StaffImage2} />
                </div>
              </div>
              <div className="staff-item-data">
                Тренер має змогу приділити більше уваги кожному з атлетів. Кожен
                особисто зможе взяти участь у формуванні розкладу тренувань.
              </div>
            </div>

            <div className="staff-item staff-7">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  ТУТ МОЖЕШ
                  <br />
                  ТРЕНУВАТИ ТИ!
                </div>
                <div className="staff-item-image-wrapper">
                  <img src={StaffImage2} />
                </div>
              </div>
              <div className="staff-item-data">
                Приєднуйся до сім’ї REVAT! Для детальнішої інформації
                звертайтесь за вказаними контактами.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Articles />
      <Contacts />
      <Map />
      <Footer />
      <ScrollTopButton />
    </>
  )
}

// export const query = graphql`
//   {
//     posts: allStrapiPost {
//       edges {
//         node {
//           id
//           title
//           text
//         }
//       }
//     }

//     classes: allStrapiClass {
//       edges {
//         node {
//           id
//           title
//           description
//         }
//       }
//     }

//     coaches: allStrapiCoach {
//       edges {
//         node {
//           name
//           desctiption
//         }
//       }
//     }
//   }
// `

export default IndexPage
