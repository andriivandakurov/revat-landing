import * as React from 'react';
import Image from '../components/Image/Image';
import StaffImage1 from '../images/staff/1.jpg';
import StaffImage2 from '../images/staff/IMG_8324.jpg';
import StaffImage2Mobile from '../images/staff/IMG_8324_mobile.jpg';
import StaffImage3 from '../images/staff/3.jpg';
import StaffImage3Mobile from '../images/staff/3_mobile.jpg';
import StaffImage4 from '../images/staff/4.jpg';
import StaffImage4Mobile from '../images/staff/4_mobile.jpg';
import ColorLogo from '../images/color-logo.png'
import Alina from '../images/staff/Alina.jpg';

const StaffSection = () => {
    return (
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
                            Сертифікований тренер з кросфіту CF-L2 trainer. Переможець та
                            призер багатьох змагань з кросфіту. Був першим тренером crossfit
                            у Львові! Має гігантський тренерський стаж. Серед підопічних
                            багато переможців місцевих, всеукраїнських та міжнародних
                            змагань з кросфіту. Сильні сторони: підготовка атлетів до
                            змагань різного рівня, в тому числі Race Nation. Ентузіазм, не
                            загублений роками досвіду. А ще вміє насупити брови так, що
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
                                <Image src={StaffImage2} mobileSrc={StaffImage2Mobile} />
                            </div>
                        </div>
                        <div className="staff-item-data">
                            Тренер групових напрямків, індивідуальних тренувань, а також
                            щотижневої групи з важкої атлетики. Одна з пілігримів кросфіту у
                            Львові, переможниця та призерка змагань з кросфіту, майстер
                            спорту з важкої атлетики, багаторазова чемпіонка України з
                            важкої атлетики. Основний напрямок - створення індивідуальних
                            тренувань для вашого максимального розвитку. Сильні сторони:
                            маленька, тендітна, а тренування строгі та продуктивні! Ти
                            завжди знаєш, скільки ти б не підняв - Оля підніме більше! Це
                            створює мотивацію розвиватись.
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
                                ЄЛИЗАВЕТА
                                <br />
                                КРИВКО
                            </div>
                            <div className="staff-item-image-wrapper">
                                <Image src={StaffImage3} mobileSrc={StaffImage3Mobile} />
                            </div>
                        </div>
                        <div className="staff-item-data">
                            Учасник багатьох змагань з кросфіту, паверліфтингу, а також
                            гирьового спорту. Пані Ліза дуже давно стала атлетом команди
                            Revat, а хороші тренерські навички та особистий спортивний
                            досвід допомагає прогресувати десяткам людей в нашому залі.
                            Деякі з них вже навіть починають брати участь у різних
                            змаганнях, хоча колись прийшли в наш зальчик новачками! Вміє
                            мотивувати одним тільки поглядом.
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
                                <Image src={StaffImage4} mobileSrc={StaffImage4Mobile} />
                            </div>
                        </div>
                        <div className="staff-item-data">
                            Майстер спорту з важкої атлетики, переможець та призер багатьох
                            змагань з важкої атлетики. Ярина ідеально навчить навиків важкої
                            атлетики, а також вправ з гирями та гантелями, які так необхідні
                            для тренувань у групах . Нехай вас не вводить в оману милий
                            зовнішній вигляд, тренування цікаві та продуктивні. Досягнення
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
                            <div className="staff-item-label">
                                АЛІНА
                                <br />
                                БУЛІМ
                            </div>
                            <div className="staff-item-image-wrapper">
                                <Image src={Alina} mobileSrc={Alina} />
                            </div>
                        </div>
                        <div className="staff-item-data">
                            Аліна - атлет залу Revat!
                            Тренер групових та персональних занять.
                            За декілька років в нашій спільноті пройшла шлях від початківця до професійного тренера та атлета!
                            То ж вона знає як це бути початківцем та підібрати оптимальні наваження для плавного прогресу!
                            Аліна відданий тренер, який завжди підтримує та мотивує підопічних.
                            Знає 10000 вправ на прес, то ж прогрес під її керівництвом справа часу.
                            <br />
                            <a href="https://instagram.com/bulymalina">Instagram</a>
                            <br />
                            <a href="https://www.facebook.com/profile.php?id=100006769693341">Facebook</a>
                        </div>
                    </div>

                    {/* <div className="staff-item staff-6">
                        <div className="staff-item-container">
                            <div className="staff-item-image-wrapper">
                            </div>
                        </div>
                        <div className="staff-item-data">
                        </div>
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
    );
}

export default StaffSection;