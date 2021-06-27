import React from "react"
import "./style.scss"
import contacto from "../../assets/contact.png"
import userImage2 from '../../assets/userImage2.jpeg'

class Contact extends React.Component {
	render() {
		return (
			<div className="contactContainer">
			<img className="contactTitle" src={contacto} id='Contact'/>
				<div className="contactWrapper">
					<div className="mail">nininernawati@mail.ugm.ac.id</div>
					<div className="linksContainer">
						<li><a className="linkContact" href="https://github.com/nininern" target="_blank">Github</a></li>
						<li><a className="linkContact" href="https://www.instagram.com/ern_nin/" target="_blank">Instagram</a></li>
					</div>
					<img className='me2' src={userImage2} alt='' />
				</div>
			</div>


		)
	}
}
export default Contact