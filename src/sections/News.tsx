import * as React from 'react';
import Image from '../components/Image/Image';
import Generator from '../images/news/generator.jpg';
import BanderstadtThrowdownLogo from '../images/news/revat-competitions.jpg';
import Revat2 from '../images/news/revat-2.png';

const NewsSection = () => {
    return (
        <section className="news" id="news">
            <div className="container">
                <h3>Новини</h3>

                <article className="news-article">
                    <Image src={Revat2} className="news-article-img" loading="lazy" />
                    <div>
                        <h5>Відкриття нової локації спортзалу Crossfit REVAT 2.0</h5>
                        <p>Раді сповістити вам, що відкривається нова локація нашого залу Реват на Кульпарківській, 93.</p>
                        <p>Інтригу потримали досить у соціальних мережах, тепер розкриваємо усі козирі!</p>
                        <p>Отож, зустрічане новий, вдвічі більший зал REVAT 2.0!</p>
                        <ul>
                            <li>- велика, вентильована площа</li>
                            <li>- свіженький, власноручно виконаний ремонт</li>
                            <li>- нове, якісне обладнання для занять</li>
                            <li>- після активного функціонального тренування, можемо запропонувати відвідати наш масажний кабінет та сауну.</li>
                            <li>- зал є частиною великого комплексу, де є футбольні та волейбольні майданчики, кафе</li>
                            <li>- звісно, доступна парковка для машин та велосипедів.</li>
                        </ul>
                        <p></p>
                        <p>Орієнтовна дата відкриття - початок грудня.</p>
                        <p>Функціональні тренування, групові та персональні заняття кроссфіт, авторські класи Mobility та Важка Атлетика, крута музика, смачні корисні коктейлі, а головне, неповторна атмосфера - це все про Реват 2.0. </p>
                        <p>У інстаграм розкриваємо закулісся відкриття, ділимось процесом створення. </p>
                        <p>Слідкуйте, щоб не проґавити дату відкриття!</p>
                    </div>
                </article>

                <article className="news-article">
                    <Image src={BanderstadtThrowdownLogo} className="news-article-img" loading="lazy" />
                    <div>
                        <h5>Благодійний турнір BANDERSTADT THROWDOWN з кросфіту на підтримку ЗСУ.</h5>
                        <p><b>Revat</b> спільно із залами <a href="https://instagram.com/olimplviv?igshid=YmMyMTA2M2Y="><b>Олімп</b></a> та <a href="https://instagram.com/asgard_homegym?igshid=YmMyMTA2M2Y="><b>Asgard Home Gym</b></a> організовують змагання з Crossfit, мета якого - зібрати кошти для підтримки ЗСУ.</p>
                        <p>Це чудова нагода не тільки провести круто час у колі однодумців, а й приєднатись до збору, 100% якого буде надіслано нашим воїнам. Усі витрати по організації івенту беруть на себе безпосередньо Олімп та Revat. Тренери та волонтери погодились працювати безкоштовно. Ми поважаємо працю кожного, проте, нам важливо організувати захід, який акумулює кошти для ЗСУ.</p>
                        <p>
                            Волонтерство стало способом життя для багатьох. Ми щоденно працюємо для перемоги України. І ми маємо бути сильні, як ніколи! Саме тому, запрошуємо прийняти участь, долучитись внеском або просто прийти та підтримати команди!
                        </p>
                        <p>
                            <b>Важливо!</b> Реєстрація завершується 5 січня 2023 року. Тому немає часу думати, потрібно реєструватись, кількість учасників обмежена!
                        </p>
                        <p>
                            <b>Дата проведення:</b> 4-5 лютого 2023 року.<br />
                            <b>Формат:</b> 2 людини в команді (Ч+Ч/ Ж+Ж)<br />
                            <b>Внесок з команди</b> - 1400 грн.
                        </p>
                        <p>
                            Ми цінуємо відкритість та прозорість, тому всі донати ми збираємо на банку монобанку, де кожен зможе переглянути, суму яку вдалось загально зібрати!
                        </p>

                        <p>
                            Категорії:
                            Rx - 🙎‍♂️15 чоловічих/👩‍💼5 жіночих команд
                            Scaled - 🙎‍♂️20 чоловічих/👩‍💼20 жіночих команд
                        </p>

                        <p>Якщо зацікавились, дізнатись детальну інформацію можна <a href="https://competitioncorner.net/events/8753/details"><b>тут</b></a>. Або дзвоніть/пишіть за будь-якими контактами, вказаними на сайті. </p>
                        <p>
                            Локація - Олімп Південний(вул.Щирецька 36)
                        </p>
                        До зустрічі!
                    </div>
                </article>

                <article className="news-article news-article-last">
                    <Image src={Generator} className="news-article-img" loading="lazy" />
                    <div>
                        <h5>Працюємо навіть без світла!</h5>
                        <p>Навіть у найтемніші часи видно світлих людей. А у нас видно атлетів, які мають змогу займатись у Revat не залежно від наявності світла.</p>
                        <p>Маємо генератор, який освітлює зал та забезпечує теплою водою душові.</p>
                        <p>Крім того, у разі потреби, до нас можна прийти та зарядити гаджети. Раді усім та кожному, особливо у такий непростий час.</p>
                        <p>Тож, якщо вдома немає світла, а ловити 4G біля вікна набридло, ти знаєш куди йти - у Revat заряджається кожен!</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default NewsSection;