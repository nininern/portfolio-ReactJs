import React from 'react'
import '../Main/style.scss'
import name from '../../assets/headerName.png'

class Main extends React.Component {
    render() {
        return (
            <div className='Wrapper'>

                <header className='header'>
                    <div className="btnMobile">
                    </div>
                    <ul className="list">
                        <li><a href="#AboutMe">About me</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Cards">Portfolio</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </header>
                <div className="Landing">
                    <img className='headerName' src={name} />
                </div>

            </div >
        )
    }
}
export default Main 