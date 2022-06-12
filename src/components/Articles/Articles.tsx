import './Articles.scss'

import * as React from 'react'
import ArticleImage from '../../images/article-image.png'

const Articles: React.SFC<{}> = () => {
  return (
    <section className="articles" id="blog">
      <div className="container">
        <div className="top" />

        <div className="article-content">
          <img src={ArticleImage} alt="" />

          <div className="information">
            <h4>Як досягнути хороших результатів?</h4>

            <p>
              Тренування у нас ведуть фанати своєї справи,
              і це дуже важливо. Вони не зупиняться до поки не з'явиться бажаний результат
              а постійне навчання і досвід...
            </p>

            <a href="#" className="classic-button">
              Всі статті
            </a>
          </div>
        </div>

        <div className="bottom" />
      </div>
    </section>
  )
}
export default Articles
