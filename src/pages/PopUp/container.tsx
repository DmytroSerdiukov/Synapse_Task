import React from 'react'
import PopUpMarkup from './markup'


interface IPopUp {
    animate: any
}
const PopUpContainer: React.FC<IPopUp> = ({ animate }) => {
    return <PopUpMarkup animate={animate} />
}

export default PopUpContainer