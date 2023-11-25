import * as React from 'react';

import SEO from '../components/Seo/Seo';
import ColorLogo from '../images/color-logo.png';

const ThanksPage: React.SFC<{}> = (props): JSX.Element => {
    return (
        <>
            <SEO
                keywords={[]}
                meta={[{
                    name: 'robots',
                    content: 'noindex',
                }]}
            />

            <section className="main-screen thank-you">
                <div className="container">

                    <div className="main-screen-content">
                        <img alt="Revat" src={ColorLogo} />

                        <div className='message-wrapper'>
                            <h1>Дякуєм за заповнення форми для першого тренування.</h1>
                            <p>Ми цінуємо ваш інтерес і хочемо, щоб ваш досвід був якнайкращим.</p>
                            <br />
                            <p>Наша команда зв'яжеться з вами для надання додаткової інформації і підтвердження дати та часу тренування.</p>
                            <br />
                            <p>Що з собою потрібно мати ?</p>
                            <ul>
                                <li>- зручну спортивну форму і змінне взуття а також рушник/тапочки якщо захочете в душ</li>
                                <li>- воду та інші атрибути ви зможете придбати у нас на рецепції</li>
                            </ul>
                            <br />
                            <p>Якщо у вас є будь-які інші питання або побажання, будь ласка, не соромтеся звернутися до нас.</p>
                            <br />
                        </div>
                        <a href="/" className="button">
                            <span>На головну</span>
                            <span className="tail"></span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThanksPage
