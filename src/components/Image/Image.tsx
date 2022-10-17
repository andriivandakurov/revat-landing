import * as React from 'react'
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage'
import './Image.scss'

const Image = ({ ...rest }) => {
  const [click, setClick] = React.useState(false)

  const setFlag = () => {
    setClick(true)
  }

  const unsetFlag = () => {
    setClick(false)
  }

  return (
    <>
      {click && (
        <div onClick={unsetFlag} className="expanded-image">
          <ResponsiveImage {...rest} />
        </div>
      )}
      <ResponsiveImage onClick={setFlag} className="image" {...rest} />
    </>
  )
}

export default Image
