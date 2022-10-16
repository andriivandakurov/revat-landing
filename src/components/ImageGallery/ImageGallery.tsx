import * as React from 'react'

import ButtonMarkup from '../ButtonMarkup/ButtonMarkup'
import Image from '../Image/Image'

import GalleryImage1New from '../../images/gallery/1-new.jpg'
import GalleryImage2New from '../../images/gallery/2-new.jpg'
import GalleryImage3 from '../../images/gallery/3.jpg'
import GalleryImage4 from '../../images/gallery/4.png'
import GalleryImage6 from '../../images/gallery/6.png'
import GalleryImage6New from '../../images/gallery/IMG_8121.jpg'

import ExtraImage1 from '../../images/gallery/extra_1.jpg'
import ExtraImage2 from '../../images/gallery/extra_2.jpg'
import ExtraImage3 from '../../images/gallery/extra_3.jpg'
import ExtraImage4 from '../../images/gallery/extra_4.jpg'
import ExtraImage5 from '../../images/gallery/extra_5.jpg'
import ExtraImage6 from '../../images/gallery/extra_6.jpg'

const ImageGallery = () => {
  const [loadMoreImagesFlag, setLoadMoreImagesFlag] = React.useState(false)

  const mainImages = [
    GalleryImage2New,
    GalleryImage3,
    GalleryImage4,
    GalleryImage6,
    GalleryImage1New,
    GalleryImage6New,
  ]

  const extraImages = [
    ExtraImage1,
    ExtraImage2,
    ExtraImage3,
    ExtraImage4,
    ExtraImage5,
    ExtraImage6,
  ]

  return (
    <section className="image-gallery" id="gallery">
      <div className="container">
        <h3 className="red">Тренуйся з нами</h3>

        <div className="image-gallery-wrapper">
          <div className="row">
            {mainImages.map((image, i) => (
              <div className={`gallery-image-${i + 1}`}>
                <Image src={image} />
              </div>
            ))}
            {loadMoreImagesFlag &&
              extraImages.map((image, i) => (
                <div className={`gallery-image-${(i % 6) + 1}`}>
                  <Image src={image} />
                </div>
              ))}
          </div>
          {!loadMoreImagesFlag && (
            <ButtonMarkup
              onClick={() => {
                setLoadMoreImagesFlag(true)
              }}
            >
              Більше фото
            </ButtonMarkup>
          )}
        </div>
      </div>
    </section>
  )
}

export default ImageGallery
