import Header from "./components/Layout/Header";
import StudentForm from "./components/NewStudent/StudentForm";
import { useState} from "react";
import StudentProvider from "./store/StudentProvider";
import StudentList from "./components/Students/StudentList";
function App() {
  const [formIsShown, setFormIsShown] = useState(false);
  const showFormHandler = () => {
    setFormIsShown(true)
  }
  const closeFormHandler = () => {
    setFormIsShown(false);
  }
  return (
    <StudentProvider>
      <Header onShowForm = {showFormHandler}/>
      { formIsShown && <StudentForm onCloseForm={closeFormHandler}/> }
      <StudentList onShowForm = {showFormHandler}/>
    </StudentProvider>
      
    
  );
}

export default App;
