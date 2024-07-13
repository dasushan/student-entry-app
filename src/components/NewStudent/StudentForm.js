import { useState, useContext } from 'react';
import {v4 as uuidv4} from 'uuid'
import Modal from '../UI/Modal';
import StudentContext from '../../store/cart-context';
const StudentForm = (props) => {
  // name, mobile and address
  const [enteredName, setEnteredName] = useState('');
  const [enteredContact, setEnteredContact] = useState('');
  const [enteredAddress, setEnteredAddress] = useState('');

  const studCtx = useContext(StudentContext);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const contactChangeHandler = (event) => {
    setEnteredContact(event.target.value);
  };
  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };
  const formSubmitHandler =(event ) =>{
        event.preventDefault();
        // add data to context;
        const student = {name: enteredName,
            contact: enteredContact,
            address: enteredAddress,
            id: uuidv4()
        }
        

        studCtx.addStudent(student);
        setEnteredName("");
        setEnteredAddress("");
        setEnteredContact("");
        props.onCloseForm();
  }
  return (
    <Modal onClick={props.onCloseForm}>
        <form onSubmit={formSubmitHandler}>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div>
          <label htmlFor="contact">Contact</label>
          <input
            id="contact"
            type="number"
            value={enteredContact}
            onChange={contactChangeHandler}
          ></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            value={enteredAddress}
            onChange={addressChangeHandler}
          ></input>
        </div>
      </div>
      <div>
        <button type="submit" >Add</button>
        <button type="button"onClick={props.onCloseForm}>Close</button>
      </div>
    </form>
    </Modal>
    
  );
};

export default StudentForm;
