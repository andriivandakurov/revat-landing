import * as React from 'react'
interface BurpeeCounterState {
    counter: number
    burpeeCounter: string
}

class BurpeeCounter extends React.Component<{}, BurpeeCounterState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            counter: 0,
            burpeeCounter: ''
        }
    }

    interval: any;
    index: number = 0

    formatCounter(counter: number): string {
        return `${counter}`.split('').reverse().join('').match(/.{1,3}/g)!.join(' ').split('').reverse().join('');
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let counter = 2091006 + this.getRandomInt();

            while (counter < this.state.counter) {
                counter = counter + this.getRandomInt()
            }

            this.setState({
                counter,
                burpeeCounter: this.formatCounter(counter)
            })
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    randomIntegerInRange(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomInt() {
        const staticNumbersArr = [7, 11, 13, 17];

        return staticNumbersArr[this.randomIntegerInRange(0, staticNumbersArr.length - 1)];
    }

    render() {
        return (
            <span className="counter-amount">{this.state.burpeeCounter}</span>
        )
    }
}

export default BurpeeCounter
