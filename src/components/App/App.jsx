import { useState, useEffect } from 'react'
import initialContacts from '../../contacts.json';
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contactsOps';
function App() {
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.contacts);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
    </div>
  )
}

export default App;
/*
 const [count, setCount] = useState(0);
  const [contacts, setContacts] = useState(initialContacts);

  const [searchBox, setSearchBox] = useState("");
  
  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
  (
    contact.name.toLowerCase().includes(searchBox.toLowerCase())
    
  ))

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
        return prevContacts.filter((contact) => contact.id !== contactId);
    });
  }
  */