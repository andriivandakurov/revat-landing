
import * as React from 'react';
import ButtonMarkup from '../components/ButtonMarkup/ButtonMarkup';
import BurpeeCounter from '../components/BurpeeCounter/BurpeeCounter';

const CounterSection = () => {
    return (
        <section className="counter">
            <div className="container">
                <BurpeeCounter />
                <h3>
                    ДОКИ ТИ СИДИШ У СВОЄМУ
                    <br /> КРІСЕЛКУ, НАША КІЛЬКІСТЬ
                    <br /> БУРПІ РОСТЕ!
                </h3>

                <a href="#contacts">
                    <ButtonMarkup>
                        Записатись на безкоштовне <br /> тренування
                    </ButtonMarkup>
                </a>
            </div>
        </section>
    )
}

export default CounterSection;