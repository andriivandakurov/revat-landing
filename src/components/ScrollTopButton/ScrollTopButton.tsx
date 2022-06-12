import * as React from 'react'
import * as classNames from 'classnames'
import { debounce } from 'lodash'

import './ScrollTopButton.scss'

import WeightIcon from '../../images/weight.svg'

class ScrollTopButton extends React.Component<{}, { isScrolled: boolean }> {
  private offset: number = 270

  constructor(props: {}) {
    super(props)

    this.state = {
      isScrolled: this.isPageScrolled,
    }

    this.showButton = debounce(this.showButton.bind(this), 300)
  }

  get isPageScrolled() {
    if (typeof window !== `undefined`) {
      return window.pageYOffset > this.offset
    } else {
      return false
    }
  }

  showButton() {
    this.setState({ isScrolled: this.isPageScrolled })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.showButton)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.showButton)
  }

  render() {
    return (
      <a
        href="#"
        className={classNames('scroll-top-button', {
          show: this.state.isScrolled,
        })}
      >
        <img src={WeightIcon} />
      </a>
    )
  }
}

export default ScrollTopButton
