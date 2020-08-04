import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img
					src="https://avatars1.githubusercontent.com/u/35275029?s=460&u=d149b119a86fd829fc91cd7970aff03a8d6375cf&v=4"
					alt="Mateus Lucas"
				/>
				<div>
					<strong>Mateus Lucas</strong>
					<span>Química</span>
				</div>
			</header>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				<br />
				<br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsam illum
				veniam accusantium ut ex asperiores quod? Architecto sit consequatur
				voluptatum qui doloremque laborum saepe!
			</p>

			<footer>
				<p>
					Preço/hora <strong>R$ 80,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="WhatsApp" />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
}

export default TeacherItem;
