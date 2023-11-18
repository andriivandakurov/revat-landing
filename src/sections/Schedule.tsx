import * as React from 'react';

const ScheduleSection = () => {
    return (
        <section className="schedule" id="schedule">
            <div className="container">
                <h3>Графік занять</h3>
                {getScheduleMarkup()}
            </div>
        </section>
    )
}

const getScheduleMarkup = (): JSX.Element[] => {
    const scheduleData = [
        {
            type: 'Групові заняття',
            details: [
                {
                    days: ['Понеділок', 'Середа', "П'ятниця"],
                    hours: ['08:00', '16:00', '17:00', '18:00', '19:00'],
                },
                {
                    days: ['Вівторок', 'Четвер'],
                    hours: ['18:00', '19:00', '20:00'],
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
                {
                    days: ['Пятниця'],
                    hours: ['20:00'],
                },
            ],
        },
    ]

    return scheduleData.map((item, index) => (
        <div className="section" key={`schedule-${index}`}>
            <h5>{item.type}:</h5>

            {item.details.map((option, index) => (
                <div className="option" key={`details-${index}`}>
                    <h6>{option.days.join(', ')}</h6>
                    <div>{option.hours.join(', ')}</div>
                </div>
            ))}
        </div>
    ))
}

export default ScheduleSection;