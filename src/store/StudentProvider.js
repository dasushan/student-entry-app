import StudentContext from "./cart-context";
import {useState} from 'react'
const StudentProvider = (props) => {
    const [students, setStudents] = useState([]);
    
    const addStudentHandler = student => {
        setStudents((prevState) => {
            return [...prevState, student]
        })
    }
    const removeStudentHandler = id => {
        const updatedStudents = students.filter((student) => {
            return student.id !== id;
        })
        setStudents(updatedStudents);
    }
    const studentContext = {
        students: students,
        totalStudent: students.length,
        addStudent: addStudentHandler,
        removeStudent: removeStudentHandler,
    }

    return <StudentContext.Provider value={studentContext}>
        {props.children}
    </StudentContext.Provider>
}
export default StudentProvider;