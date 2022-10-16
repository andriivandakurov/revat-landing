import * as React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/Seo/Seo'
import BurpeeCounter from '../components/BurpeeCounter/BurpeeCounter'
import Header from '../components/Header/Header'
import Contacts from '../components/Contacts/Contacts'
import Map from '../components/Map/Map'
import Footer from '../components/Footer/Footer'
import ButtonMarkup from '../components/ButtonMarkup/ButtonMarkup'
import ScrollTopButton from '../components/ScrollTopButton/ScrollTopButton'
import Image from '../components/Image/Image'
import ImageGallery from '../components/ImageGallery/ImageGallery'

import ColorLogo from '../images/color-logo.png'
import RevatTeam from '../images/advantages/revat-team.jpg'
import RevatTeam2 from '../images/advantages/revat-team_2.jpg'
import RevatTeam3 from '../images/advantages/revat-team_3.jpg'
// import WeightIcon from '../images/advantages/weight.png'
// import HeartIcon from '../images/advantages/heart.png'
// import LightningIcon from '../images/advantages/lightning.png'
// import DumbbellIcon from '../images/advantages/dumbbell.png'

import StaffImage1 from '../images/staff/1.jpg'
import StaffImage2 from '../images/staff/IMG_8324.jpg'
import StaffImage3 from '../images/staff/3.jpg'
import StaffImage4 from '../images/staff/4.jpg'

import ClassImage1 from '../images/class/1.jpg'
import ClassImage2 from '../images/class/2.jpg'
import ClassImage3 from '../images/class/IMG_7845.jpg'
import ClassImage4 from '../images/class/mobility.jpg'

import GymVideoMp4 from '../videos/squat-it.mp4'
import Carousel, { CarouselItem } from '../components/Carousel/Carousel'

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

      <section className="advantages">
        <div className="container">
          <h3 className="red">REVAT - велика кросфіт сім'я</h3>
          <div className="advantages-team-photo-container">
            <Carousel>
              <CarouselItem>
                <img src={RevatTeam} />
              </CarouselItem>
              <CarouselItem>
                <img src={RevatTeam2} />
              </CarouselItem>
              <CarouselItem>
                <img src={RevatTeam3} />
              </CarouselItem>
            </Carousel>
          </div>
          <h1>REVAT - перший кросфіт зал у Львові.</h1>
          &nbsp;
          <p>
            Наша команда - професійні, сертифіковані тренери, які живуть
            спортом. Індивідуаьний підхід до кожного атлета забезпечує
            відповідний результат. У нас займаються як новачки, які ніколи не
            тримали гирі в руках, так і професійні спортсмени та тренери для
            підтримання власної форми і знань. Особлива увага приділяється тим,
            хто прийшов вперше на заняття з crossfit щоб розвіяти міф, що такий
            спорт тільки для дужих спортсменів. Ми гуртуємо спільноту, нас
            об'єднало прагнення до розвитку яке переросло у щось більше ніж
            тренування, постійні виїзди на змагання, спільний відпочинок,
            поїздки до нових місць та підтримка одне одного - ми стали чимось
            більшим ніж просто зал!
          </p>
          {/* <div className="advantages-list">
            <div className="advantages-item">
              <div className="advantage-image">
                <img src={DumbbellIcon} alt="Crossfit" />
              </div>
              <span className="advantage-title">Crossfit</span>
              <p>
                Знайдеш нових друзів, адже ми одна дружня команда де у всіх одна ціль -  розвиток!
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
                Невід'ємна частина нашого життя! Вона потрібна нам усюди, починаючи від походів
                в гори і закінчуючи підйомом на свій поверх коли зламався ліфт! Для розвитку витривалості
                у нас є безліч унікальних тренажерів, які вміло комбінуються у комплексі нашими тренерами!
              </p>
            </div>
          </div> */}
        </div>
      </section>

      <section className="staff classes" id="classes">
        <div className="container">
          <h3>Тренування</h3>
          <div className="staff-row first-row">
            <div className="staff-item class-1">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  Групові тренування
                  <span>60 хвилин &#8226; 1550 грн &#8226; 12 занять</span>
                </div>
                <div className="staff-item-image-wrapper">
                  <Image src={ClassImage1} />
                </div>
              </div>
              <div className="staff-item-data">
                Даєш п`ять на вході, отримуєш масу позитиву на виході!
                Тренування проходять у групах 6-12 осіб за стабільним графіком.
                Кожна група відбувається під чітким наглядом тренера! Тут ви
                вивчите всі базові навички які необхідні в кросфіті, а підбір
                навантаження під кожного, створює можливість для заняття від
                новачка до атлета - профі!
              </div>
            </div>
            <div className="staff-item class-2">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  Індивідуальні тренування
                  <span>60+ хвилин &#8226; 4000 грн &#8226; 10 занять</span>
                </div>
                <div className="staff-item-image-wrapper">
                  <Image src={ClassImage2} />
                </div>
              </div>
              <div className="staff-item-data">
                Даний тип тренувань сприяє максимальному розвитку, заняття
                проводяться строго по заданих цілях, тренери підберуть
                оптимальну програму тренувань, а також ви можете отримати базові
                рекомендації стосовно харчування, сну та режиму дня, що в свою
                чергу приводить до максимального прогресу! Дані тренування
                підходять для тих, хто бажає отримати максимальну увагу тренера,
                а також підготуватись до змагань різного рівня, для прикладу
                Race Nation або Spartan Race. У нас тренується багато
                переможців!
              </div>
            </div>
            <div className="staff-item class-4">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  Важка атлетика
                  <span>120хв &#8226; 250 грн/заняття</span>
                </div>
                <div className="staff-item-image-wrapper">
                  <Image src={ClassImage3} />
                </div>
              </div>
              <div className="staff-item-data">
                Щотижневий авторський клас який у нас проходить по суботам.
                Даний напрямок для тих, хто хоче поглиблено вивчити вправи які
                ми використовуємо у наших тренуваннях а також навчитись
                піднімати важкі ваги як круті атлети на відосиках. Вправи зі
                штангою не будуть здаватись такими складними під чітким
                керівництвом нашого тренера!
              </div>
            </div>
          </div>
          <div className="staff-row second-row">
            <div className="staff-item class-5">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  Мобіліті
                  <span>60 хвилин &#8226; 250 грн/заняття</span>
                </div>
                <div className="staff-item-image-wrapper">
                  <Image src={ClassImage4} />
                </div>
              </div>
              <div className="staff-item-data">
                Авторський клас, на якому ми прагнемо покращити гнучкість наших
                м'язів а також мобільність суглобів і звісно додатково ми
                працюємо, над закачуванням проблемних зон, які є у більшості
                людей! Для кого підійде? абсолютно для всіх, від новачка до
                професійного спортсмена, strongly recommended для людей із
                "сидячою" роботою!
              </div>
            </div>
            {/* <div className="staff-item class-5">
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
            </div> */}
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

      <ImageGallery />

      <section className="counter">
        <div className="container">
          <BurpeeCounter />
          <h3>
            ДОКИ ТИ СИДИШ У СВОЄМУ
            <br /> КРІСЕЛКУ НАША КІЛЬКІСТЬ
            <br /> БУРПІ РОСТЕ!
          </h3>

          <a href="#contacts">
            <ButtonMarkup>
              Записатись на безкоштовне <br /> тренування
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
                  <Image src={StaffImage1} />
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
                <br />
                <a href="https://instagram.com/yuliian_cherevatyi">Instagram</a>
                <br />
                <a href="https://www.facebook.com/profile.php?id=100007577896790">
                  Facebook
                </a>
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
                  <Image src={StaffImage2} />
                </div>
              </div>
              <div className="staff-item-data">
                Тренер групових напрямків, індивідуальних тренувань а також
                щотижневої групи з важкої атлетики ! Одна з пілігримів кросфіту
                у Львові, переможниця та призерка змагань з кросфіту , Майстер
                Спорту з Важкої атлетики а також багаторазова чемпіонка України
                з важкої атлетики! Основний напрямок - створення індивідуальних
                тренувань для вашого максимального розвитку! Сильні сторони:
                Маленька, тендітна - тренування строгі та продуктивні! Ти завжди
                знаєш, скільки ти б не підняв - Оля підніме більше! Це створює
                мотивацію розвиватись!
                <br />
                <a href="https://instagram.com/olya_cherevata">Instagram</a>
                <br />
                <a href="https://www.facebook.com/profile.php?id=100021854324264">
                  Facebook
                </a>
              </div>
            </div>

            <div className="staff-item staff-3">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  ЄЛІЗАВЕТА
                  <br />
                  КРИВКО
                </div>
                <div className="staff-item-image-wrapper">
                  <Image src={StaffImage3} />
                </div>
              </div>
              <div className="staff-item-data">
                Учасник багатьох змагань з кросфіту, пауверліфтингу а також
                гирьового спорту. Пані Ліза дуже давно стала атлетом команди
                Revat, а хороші тренерські навики і особистий спортивний досвід
                допомагає прогресувати десяткам людей в нашому залі. Деякі з них
                вже навіть починають брати участь у різних змаганнях, хоча
                колись прийшли в наш зальчик новачками!
                <br />
                <a href="https://instagram.com/the_bro.girl">Instagram</a>
                <br />
                <a href="https://www.facebook.com/krivko.elizaveta">Facebook</a>
              </div>
            </div>

            <div className="staff-item staff-4">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  ЯРИНА
                  <br />
                  ПЕТРУК
                </div>
                <div className="staff-item-image-wrapper">
                  <Image src={StaffImage4} />
                </div>
              </div>
              <div className="staff-item-data">
                Майстер спорту з важкої атлетики, переможець та призер багатьох
                змагань з важкої атлетики. Ярина ідеально навчить навиків важкої
                атлетики а також вправ з гирями та гантелями які так необхідні
                для тренувань у групах . Нехай вас не вводить в оману милий
                зовнішній вигляд, тренування цікаві та продуктивні . Досягнення
                ваших цілей - справа часу!
                <br />
                <a href="https://instagram.com/yarinapetruk">Instagram</a>
                <br />
                <a href="https://www.facebook.com/profile.php?id=100017179993857">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="staff-row second-row">
            <div className="staff-item staff-5">
              <div className="staff-item-container">
                {/* <div className="staff-item-label"></div> */}
                <div className="staff-item-image-wrapper" />
              </div>
              <div className="staff-item-data" />
            </div>

            {/* <div className="staff-item staff-6">
              <div className="staff-item-container">
                <div className="staff-item-label"></div>
                <div className="staff-item-image-wrapper"></div>
              </div>
              <div className="staff-item-data"></div>
            </div> */}

            <div className="staff-item staff-7">
              <div className="staff-item-container">
                <div className="staff-item-label">
                  ТУТ МОЖЕШ
                  <br />
                  ТРЕНУВАТИ ТИ!
                </div>
                <div className="staff-item-image-wrapper">
                  <img src={ColorLogo} />
                </div>
              </div>
              <div className="staff-item-data">
                У нас немає випадкових людей, ми ентузіасти своєї справи . Ми
                займались кросфітом, коли ще про нього у Львові ніхто не знав,
                ми доклали максимум зусиль щоб стати таким залом для вас і нас
                дуже тішить , що наша команда збільшується і так багато людей
                добивається успіху!
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="price" id="price">
        <div className="container">
          <h3>Ціни</h3>

          <div className="price-list">
            {[
              {
                sectionName: 'OpenGym',
                describe: 'Cамостійне тренування без тренера',
                options: [
                  {
                    name: 'Безлім',
                    price: 1300,
                  },
                ],
              },
              {
                sectionName: 'Групові тренування',
                options: [
                  {
                    name: '8 занять',
                    price: 1400,
                  },
                  {
                    name: '12 занять',
                    price: 1550,
                  },
                  {
                    name: 'Безлім',
                    price: 1700,
                  },
                  {
                    name: 'Разове',
                    price: 250,
                  },
                  {
                    name: '36 занять (3 місяці)',
                    price: 4350,
                  },
                  {
                    name: '72 занять (6 місяців)',
                    price: 8400,
                  },
                ],
              },
              {
                sectionName: 'Спліти',
                describe: 'Група до 4 людей, гнучкий графік',
                options: [
                  {
                    name: '10 занять',
                    price: 3600,
                  },
                  {
                    name: 'Разове заняття',
                    price: 400,
                  },
                  {
                    name: 'в сертифікованого тренера з кросфіту CF lvl2',
                  },
                  {
                    name: '10 занять',
                    price: 4500,
                  },
                  {
                    name: 'Разове заняття',
                    price: 500,
                  },
                ],
              },
              {
                sectionName: 'Персональні тренування',
                describe:
                  'Тільки ти, тренер і слабкі сторони, над якими ви працюєте',
                options: [
                  {
                    name: '10 занять',
                    price: 4000,
                  },
                  {
                    name: '50 занять',
                    price: 17500,
                  },
                  {
                    name: 'Разове заняття',
                    price: 450,
                  },
                ],
              },
              {
                sectionName: (
                  <span>
                    Персональні тренування в сертифікованого тренера з кросфіту
                    CF&nbsp;lvl2
                  </span>
                ),
                options: [
                  {
                    name: '10 занять',
                    price: 5000,
                  },
                  {
                    name: '50 занять',
                    price: 22500,
                  },
                  {
                    name: 'Разове заняття',
                    price: 550,
                  },
                ],
              },
              {
                sectionName: 'Важка атлетика',
                options: [
                  {
                    name: 'Разове заняття',
                    price: 250,
                  },
                ],
              },
              {
                sectionName: 'Мобіліті',
                options: [
                  {
                    name: 'Разове заняття',
                    price: 250,
                  },
                ],
              },
            ].map(section => (
              <div className="section">
                <h5>
                  {section.sectionName}:
                  {section.describe && (
                    <div className="describe">
                      <div className="icon">?</div>
                      <div className="text">{section.describe}</div>
                    </div>
                  )}
                </h5>

                {section.options.map(option => (
                  <div className="pice-list-row">
                    <div>{option.name}</div>
                    {option.price && <div>{option.price} грн</div>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="schedule" id="schedule">
        <div className="container">
          <h3>Графік занять</h3>

          {[
            {
              type: 'Групові заняття',
              details: [
                {
                  days: ['Понеділок', 'Середа', "П'ятниця"],
                  hours: ['08:00', '16:00', '17:00', '18:00', '19:00'],
                },
                {
                  days: ['Вівторок', 'Четвер'],
                  hours: ['18:00', '19:00'],
                },
                {
                  days: ['Субота'],
                  hours: ['11:00'],
                },
              ],
            },
            {
              type: 'Важка атлетика',
              details: [
                {
                  days: ['Субота'],
                  hours: ['09:00'],
                },
              ],
            },
            {
              type: 'Мобіліті',
              details: [
                {
                  days: ['Субота'],
                  hours: ['10:00', '12:00'],
                },
              ],
            },
          ].map(item => (
            <div className="section">
              <h5>{item.type}:</h5>

              {item.details.map(option => (
                <div className="option">
                  <h6>{option.days.join(', ')}</h6>
                  <div>{option.hours.join(', ')}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

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
