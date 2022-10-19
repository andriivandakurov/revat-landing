import * as React from 'react'

import ButtonMarkup from '../ButtonMarkup/ButtonMarkup'
import Image from '../Image/Image'

import GalleryImage1New from '../../images/gallery/1-new.jpg'
import GalleryImage1NewMobile from '../../images/gallery/1-new_mobile.jpg'
import GalleryImage2New from '../../images/gallery/2-new.jpg'
import GalleryImage2NewMobile from '../../images/gallery/2-new_mobile.jpg'
import GalleryImage3 from '../../images/gallery/3.jpg'
import GalleryImage3Mobile from '../../images/gallery/3_mobile.jpg'
import GalleryImage4 from '../../images/gallery/4.png'
import GalleryImage4Mobile from '../../images/gallery/4_mobile.png'
import GalleryImage6 from '../../images/gallery/6.jpg'
import GalleryImage6Mobile from '../../images/gallery/6_mobile.jpg'
import GalleryImage6New from '../../images/gallery/IMG_8121.jpg'
import GalleryImage6NewMobile from '../../images/gallery/IMG_8121_mobile.jpg'

import ExtraImage1 from '../../images/gallery/extra_1.jpg'
import ExtraImage1Mobile from '../../images/gallery/extra_1_mobile.jpg'
import ExtraImage2 from '../../images/gallery/extra_2.jpg'
import ExtraImage2Mobile from '../../images/gallery/extra_2_mobile.jpg'
import ExtraImage3 from '../../images/gallery/extra_3.jpg'
import ExtraImage3Mobile from '../../images/gallery/extra_3_mobile.jpg'
import ExtraImage4 from '../../images/gallery/extra_4.jpg'
import ExtraImage4Mobile from '../../images/gallery/extra_4_mobile.jpg'
import ExtraImage5 from '../../images/gallery/extra_5.jpg'
import ExtraImage5Mobile from '../../images/gallery/extra_5_mobile.jpg'
import ExtraImage6 from '../../images/gallery/extra_6.jpg'
import ExtraImage6Mobile from '../../images/gallery/extra_6_mobile.jpg'

const ImageGallery = () => {
  const [loadMoreImagesFlag, setLoadMoreImagesFlag] = React.useState(false)

  const mainImages = [
    [GalleryImage2New, GalleryImage2NewMobile],
    [GalleryImage3, GalleryImage3Mobile],
    [GalleryImage4, GalleryImage4Mobile],
    [GalleryImage6, GalleryImage6Mobile],
    [GalleryImage1New, GalleryImage1NewMobile],
    [GalleryImage6New, GalleryImage6NewMobile],
  ]

  const extraImages = [
    [ExtraImage1, ExtraImage1Mobile],
    [ExtraImage2, ExtraImage2Mobile],
    [ExtraImage3, ExtraImage3Mobile],
    [ExtraImage4, ExtraImage4Mobile],
    [ExtraImage5, ExtraImage5Mobile],
    [ExtraImage6, ExtraImage6Mobile],
  ]

  return (
    <section className="image-gallery" id="gallery">
      <div className="container">
        <h3 className="red">Тренуйся з нами</h3>

        <div className="image-gallery-wrapper">
          <div className="row">
            {mainImages.map((images, i) => (
              <div className={`gallery-image-${i + 1}`}>
                <Image src={images[0]} mobileSrc={images[1]} />
              </div>
            ))}
            {loadMoreImagesFlag &&
              extraImages.map((images, i) => (
                <div className={`gallery-image-${(i % 6) + 1}`}>
                  <Image src={images[0]} mobileSrc={images[1]} />
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
