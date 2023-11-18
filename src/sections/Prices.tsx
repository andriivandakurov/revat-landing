import * as React from 'react';

const PricesSection = () => {
    return (
        <section className="price" id="price">
            <div className="container">
                <h3>Ціни</h3>

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
        description: 'Група до 4 людей, гнучкий графік',
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
        description:
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