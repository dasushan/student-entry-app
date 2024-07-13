import React from 'react';

// StudentContext is a global store 
const StudentContext = React.createContext({
    students: [],
    totalStudents:0,
    addStudent: (item) => {},
    removeStudent: (id) => {}
})

export default StudentContext;