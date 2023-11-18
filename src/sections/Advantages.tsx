import * as React from 'react';
import Carousel, { CarouselItem } from '../components/Carousel/Carousel';
import ResponsiveImage from '../components/ResponsiveImage/ResponsiveImage';

import RevatTeamMobile from '../images/advantages/revat-team_mobile.jpg';
import RevatTeam2Mobile from '../images/advantages/revat-team_2_mobile.jpg';
import RevatTeam3Mobile from '../images/advantages/revat-team_3_mobile.jpg';

const AdvantagesSection = () => {
    return (
        <section className="advantages">
            <div className="container">
                <h3 className="red">REVAT - велика кросфіт сім'я</h3>
                <div className="advantages-team-photo-container">
                    <Carousel>
                        <CarouselItem>
                            <ResponsiveImage src={RevatTeamMobile} />
                        </CarouselItem>
                        <CarouselItem>
                            <ResponsiveImage src={RevatTeam2Mobile} />
                        </CarouselItem>
                        <CarouselItem>
                            <ResponsiveImage src={RevatTeam3Mobile} />
                        </CarouselItem>
                    </Carousel>
                </div>
                <h1>REVAT - перший кросфіт зал у Львові.</h1>
                &nbsp;
                <p>
                    Наша команда - професійні, сертифіковані тренери, які живуть
                    спортом. Індивідуальний підхід до кожного атлета забезпечує
                    відповідний результат. У нас займаються як новачки, які ніколи не
                    тримали гирі в руках, так і професійні спортсмени та тренери для
                    підтримки власної форми і знань. Особлива увага приділяється тим,
                    хто прийшов вперше на заняття з crossfit щоб розвіяти міф, що такий
                    спорт тільки для дужих спортсменів. Ми гуртуємо спільноту. Нас
                    об'єднало прагнення до розвитку, яке переросло у щось більше, ніж
                    просто тренування: постійні виїзди на змагання, спільний відпочинок,
                    поїздки до нових місць та підтримка одне одного. Ми стали чимось
                    більше, ніж просто crossfit зал.
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
    );
}

export default AdvantagesSection;