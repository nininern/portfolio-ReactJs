import React from 'react'
import './style.scss'
import userImage from '../../assets/userImage.jpg'


class AboutMe extends React.Component {
    render() {
        return (
            <div className='AboutMe' id='AboutMe'>
                <img className='me' src={userImage} alt='' />
                <p className="description">I am a college student Gadjah Mada University, and I'm a teachers Sekolah Alam UGM💫</p>
            </div>
        )
    }
}
export default AboutMe