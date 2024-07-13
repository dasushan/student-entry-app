import { useContext } from 'react';
import classes from './StudentList.module.css';
import StudentContext from '../../store/cart-context';
import StudentListItem from './StudentListItem';
const StudentList = (props) => {
  const studCtx = useContext(StudentContext);

  const editHandler = (id) => {
    studCtx.removeStudent(id);
    props.onShowForm();
  }

  const deleteHandler = (id) => {
    studCtx.removeStudent(id);
  }
  return (
    <div className={classes.list}>
      <h1> All students </h1>
      {studCtx.students.map((student) => {
        return (
          <StudentListItem
            key={student.id}
            id={student.id}
            name={student.name}
            contact={student.contact}
            address={student.address}
            onEdit={editHandler.bind(null, student.id)}
            onDelete={deleteHandler.bind(null, student.id)}
          />
        );
      })}
    </div>
  );
};

export default StudentList;
