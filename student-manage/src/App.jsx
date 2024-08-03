import  { useEffect, useState } from 'react';
import './App.css';
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './FirebaseConfig';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [students, setStudents] = useState([]);
  const [loader, setLoader] = useState(false);

  const studentsCollection = collection(db, "students");

  const getStudents = async () => {
    setLoader(true); 
    try {
      const studentSnapShot = await getDocs(studentsCollection);
      const studentList = studentSnapShot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setStudents(studentList);
    } catch (error) {
      console.log(error);
    } 
    setLoader(false);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className='app-container'>
      <h1 className='app-title'>Student Management System</h1>
      <CreateStudent getStudents={getStudents}  />
      {loader ? <CircularProgress /> : <StudentList students={students} setStudents={setStudents}  />}
    </div>
  );
}

export default App;