import * as React from 'react';
import Image from '../components/Image/Image';
// import ClassImage1 from '../images/class/1.jpg'
import ClassImage1Mobile from '../images/class/1_mobile.jpg';
import ClassImage2 from '../images/class/2.jpg';
import ClassImage2Mobile from '../images/class/2_mobile.jpg';
import ClassImage3 from '../images/class/IMG_7845.jpg';
import ClassImage3Mobile from '../images/class/IMG_7845_mobile.jpg';
import ClassImage4 from '../images/class/mobility.jpg';
import ClassImage4Mobile from '../images/class/mobility_mobile.jpg';
import ClassImageOnline from '../images/class/sugarwod.png';

const ClassesSection = () => {
    return (
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
                                <Image src={ClassImage1Mobile} />
                            </div>
                        </div>
                        <div className="staff-item-data">
                            Даєш п`ять на вході - отримуєш масу позитиву на виході!
                            Тренування відбуваються у групах 6-12 осіб за стабільним
                            графіком. Така кількість учасників дозволяє приділити увагу
                            кожному. Кожен знаходиться під пильним наглядом тренера. Тут ви
                            вивчите всі базові навички які необхідні в кросфіті, а підбір
                            навантаження під кожного, створює можливість для заняття від
                            новачка до атлета - профі.
                        </div>
                    </div>
                    <div className="staff-item class-2">
                        <div className="staff-item-container">
                            <div className="staff-item-label">
                                Індивідуальні тренування
                                <span>60+ хвилин &#8226; 4000 грн &#8226; 10 занять</span>
                            </div>
                            <div className="staff-item-image-wrapper">
                                <Image src={ClassImage2} mobileSrc={ClassImage2Mobile} />
                            </div>
                        </div>
                        <div className="staff-item-data">
                            Даний тип тренувань сприяє максимальному розвитку. Заняття
                            проводяться строго по заданих цілях, тренери підберуть
                            оптимальну програму тренувань, а також ви можете отримати базові
                            рекомендації стосовно харчування, сну, режиму дня, що, своєю
                            чергою, приводить до максимального прогресу! Дані тренування
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
                                <Image src={ClassImage3} mobileSrc={ClassImage3Mobile} />
                            </div>
                        </div>
                        <div className="staff-item-data">
                            Щотижневий авторський клас, який у нас проходить по суботах.
                            Даний напрямок для тих, хто хоче напрацювати техніку та
                            поглиблено вивчити вправи, які використовуються у наших
                            тренуваннях. Приємним бонусом буде розкриття особистого
                            потенціалу і підняття важких ваг, як круті атлети на відосиках.
                            Тільки ви навчитесь це робити максимально правильно й
                            оптимально. Вправи зі штангою не будуть здаватись такими
                            складними під чітким керівництвом нашого тренера.
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
                                <Image src={ClassImage4} mobileSrc={ClassImage4Mobile} />
                            </div>
                        </div>
                        <div className="staff-item-data">
                            Авторський клас, на якому ми прагнемо покращити гнучкість наших
                            м'язів, а також мобільність суглобів. Також додатково ми
                            працюємо над закачуванням проблемних зон, які є у більшості
                            людей. Це якісна робота над тілом, яка виявить слабкі місця. І
                            ви отримаєте вичерпну інформацію, як із цим працювати. Для кого
                            підійде? Абсолютно для всіх: від новачка до професійного
                            спортсмена, strongly recommended, для людей із "сидячою"
                            роботою.
                        </div>
                    </div>
                    <div className="staff-item class-5">
                        <div className="staff-item-container">
                            <div className="staff-item-label">
                                Online тренування
                                <span>1000 грн/місяць</span>
                            </div>
                            <div className="staff-item-image-wrapper">
                                <img src={ClassImageOnline} />
                            </div>
                        </div>
                        <div className="staff-item-data">
                            Для всіх, хто не має змогу відвідувати наш зал, але має ціль тренуватись за професійною програмою та покращувати свою фізичну форму і самопочуття!
                            У нас є онлайн програма, доступна для широкого спектру тренувань: вдома, в тренажерному залі, без інвентарю, чи в просторому кросфіт боксі, де є все необхідне для продуктивних тренувань!
                            В будь-якому випадку, ми створюємо програму в який існує безліч прогресій, поступове збільшення навантажень, врахування травм, застережень - простими словами все, що має враховувати програма, спрямована на максимальний розвиток атлета!
                        </div>
                    </div>
                    {/*
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
    );
}

export default ClassesSection;