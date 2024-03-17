export function Header({ toggleModal, nbOfContacts }) {
	return (
		<header className='header'>
			<div className='container'>
				<h3>Contact List - {nbOfContacts}</h3>
				<button onClick={() => toggleModal(true)} className='btn'>
					<i className='bi bi-plus-square' /> Add New Contact
				</button>
			</div>
		</header>
	)
}
