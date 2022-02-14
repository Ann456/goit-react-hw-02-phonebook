import s from './ContactList.module.css';

const ContactList = ({ newContacts, deleteContact }) => {
    return (
        <div className={s.contactList}>

            <ul className={s.list}>
                {newContacts.map(contact => 
                    
                    <li key={contact.id} className={s.item}>
                        <p>{contact.name}:</p>
                        <p>{contact.number}</p>
                        <button
                            className={s.btn}
                            type="button"
                            onClick={() => deleteContact(contact.id)}
                        >
                            Delete
                        </button>
                    </li>
                     
                )}
            </ul>
           
        </div>
    );
};

export default ContactList;