import * as React from 'react';

const PricesSection = () => {
    return (
        <section className="price" id="price">
            <div className="container">
                <h3>Ціни</h3>
                <div className="oferta-link-container">
                  <p><a href="/oferta" target="_blank">Договір оферти</a></p><br/>
                  <a href="/polityka-konfidentsijnosti" target="_blank">Політика конфіденційності</a>
                </div>

                <div className="price-list">
                    {getPricesMarkup()}
                </div>
            </div>
        </section>
    );
}

const getPricesMarkup = (): JSX.Element[] => {
    const pricesData = [
      {
        sectionName: 'OpenGym',
        description: 'Cамостійне тренування без тренера',
        options: [
          {
            name: 'Денний (8:00-17:00)',
            price: 699,
          },
          {
            name: 'Безлім',
            price: 999,
          },
          {
            name: 'Безлім + програма тренувань від сертифікованого тренера з кросфіту CF lvl2',
            price: 1699,
          },
        ],
      },
      {
        sectionName: 'Групові тренування',
        options: [
          {
            name: '8 занять',
            price: 1799,
          },
          {
            name: '12 занять',
            price: 1999,
          },
          {
            name: 'Безлім',
            price: 2399,
          },
          {
            name: 'Разове',
            price: 349,
          },
          {
            name: '36 занять (3 місяці)',
            price: 4999,
          },
          {
            name: '72 занять (6 місяців)',
            price: 8999,
          },
        ],
      },
      {
        sectionName: 'Додатки до абонементів',
        options: [
          {
            name: 'Base (вода 0.5/0.8/1.5л)',
            price: 239,
          },
          {
            name: 'Comfort (вода 0.5/0.8/1.5л, протеїновий коктейль/батончик + рушник + шафка для зберігання одягу)',
            price: 1599,
          },
        ],
      },
      {
        sectionName: 'Важка атлетика (2 години)',
        options: [
          {
            name: 'Разове заняття',
            price: 349,
          },
        ],
      },
      {
        sectionName: 'Мобіліті (1 година)',
        options: [
          {
            name: 'Разове заняття',
            price: 250,
          },
        ],
      },
      {
        sectionName: 'Персональні тренування',
        description:
          'Тільки ти, тренер і слабкі сторони, над якими ви працюєте',
        options: [
          {
            name: (
              <span className='font-weight-600'>1 тренування</span>
            ),
          },
          {
            name: 'з тренером 1 категорії',
            price: 499,
          },
          {
            name: 'з тренером 2 категорії',
            price: 599,
          },
          {
            name: 'з тренером 3 категорії',
            price: 699,
          },
          {
            name: (
              <span className='font-weight-600'>10 занять</span>
            ),
          },
          {
            name: 'з тренером 1 категорії',
            price: 3999,
          },
          {
            name: 'з тренером 2 категорії',
            price: 4999,
          },
          {
            name: 'з тренером 3 категорії',
            price: 5999,
          },
          {
            name: (
              <span className='font-weight-600'>50 занять</span>
            ),
          },
          {
            name: 'з тренером 1 категорії',
            price: 17999,
          },
          {
            name: 'з тренером 2 категорії',
            price: 22499,
          },
          {
            name: 'з тренером 3 категорії',
            price: 26999,
          },
        ],
      },
      {
        sectionName: 'Спліти',
        description: 'Група до 4 людей, гнучкий графік',
        options: [
          {
            name: (
              <span className='font-weight-600'>1 тренування</span>
            ),
          },
          {
            name: 'з тренером 1 категорії',
            price: 399,
          },
          {
            name: 'з тренером 2 категорії',
            price: 499,
          },
          {
            name: 'з тренером 3 категорії',
            price: 599,
          },
          {
            name: (
              <span className='font-weight-600'>10 занять</span>
            ),
          },
          {
            name: 'з тренером 1 категорії',
            price: 3999,
          },
          {
            name: 'з тренером 2 категорії',
            price: 4499,
          },
          {
            name: 'з тренером 3 категорії',
            price: 5499,
          },
        ],
      },
      {
        sectionName: 'Сауна',
        description: 'Доступна тільки в залі на вул. Кульпарківській 93',
        options: [
          {
            name: 'Разове відвідування',
            price: 199,
          },
          {
            name: (
              <span className='font-weight-600'>Абонементи</span>
            ),
          },
          {
            name: 'на 4 відвідування (1 міс)',
            price: 699,
          },
          {
            name: 'на 8 відвідування (2 міс)',
            price: 1199,
          },
        ],
      },
      {
        sectionName: 'Онлайн тренування',
        options: [
          {
            name: 'Програма тренувань на місяць',
            price: 1500,
          },
        ],
      },
    ]

    return pricesData.map((section, index) => (
      <div className="section" key={`prices-${index}`}>
        <h5>
          {section.sectionName}:
          {section.description && (
            <div className="description">
              <div className="icon">?</div>
              <div className="text">{section.description}</div>
            </div>
          )}
        </h5>

        {section.options.map((option, index) => (
          <div className="pice-list-row" key={`options-${index}`}>
            <div>{option.name}</div>
            {option.price && <div>{option.price} грн</div>}
          </div>
        ))}
      </div>
    ))
  }

  export default PricesSection;