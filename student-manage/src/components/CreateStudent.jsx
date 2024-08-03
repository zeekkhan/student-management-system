import { addDoc, collection } from 'firebase/firestore';
import  { useState } from 'react';
import { db } from '../FirebaseConfig';
import CircularProgress from '@mui/material/CircularProgress';


function CreateStudent({ getStudents }) {
  const [rollno, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isCreatingStudent, setIsCreatingStudent] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsCreatingStudent(true);
      await addDoc(collection(db, "students"), {
        rollno: Number(rollno),
        name: name,
        age: Number(age)
      });
      setRollNo("");
      setName("");
      setAge("");
      await getStudents();
    } catch (error) {
      console.log("error creating user", error);
    }
    setIsCreatingStudent(false);
  };

  return (
    <form onSubmit={handleFormSubmit} className='form'>
      <input type="text" placeholder='Enter your roll no' required value={rollno} onChange={(e) => setRollNo(e.target.value)} />
      <input type="text" placeholder='Enter your name' required value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder='Enter your age' value={age} onChange={(e) => setAge(e.target.value)} />
      <button type='submit'>
        {isCreatingStudent ? <CircularProgress size={24} color="inherit" /> : "Create Student"}
      </button>
    </form>
  );
}


export default CreateStudent;