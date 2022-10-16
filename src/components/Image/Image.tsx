import * as React from 'react'
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
          <img {...rest} />
        </div>
      )}
      <img {...rest} onClick={setFlag} className="image" />
    </>
  )
}

export default Image
