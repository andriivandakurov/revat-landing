import React, { useState } from 'react'

import './Carousel.scss'

export const CarouselItem = ({ children }) => {
  return <div className="carousel-item">{children}</div>
}

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, child => {
            return React.cloneElement(child, { width: '100%' })
          })}
        </div>
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
          name="open previous image"
        />
        <button
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
          name="open next image"
        />
      </div>
    </div>
  )
}

export default Carousel
