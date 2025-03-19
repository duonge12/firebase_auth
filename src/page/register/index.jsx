
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../../services/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
const initialValues={
    firstName: '',
    lastName: '',
    email: '',
    password:''
  }
export const Register =()=> {
  const navigate = useNavigate();

  const handleRegister = async(value) => {
    try{
        const {firstName, lastName, email,password}=value;
        const userCredential= await createUserWithEmailAndPassword(auth,email,password)
        const user=userCredential.user
        if(user){
             
          const displayName = `${firstName} ${lastName}`;
          await updateProfile(user, {
            displayName: displayName,
          });

          await setDoc(doc(db, "Users", user.uid), {
            firstName: firstName,
            lastName: lastName,
            displayName: displayName, 
            userId: user.uid,
          });

          localStorage.setItem("userId", user.uid);
          localStorage.setItem("displayName", displayName);
          navigate("/");
        }
    }
    catch(err){
        alert(err.message)
    }
    
  };

  const handleNavigateToRegister=()=>{
    navigate('/resiger')
  }
  return (
    <div className="w-fit h-fit shadow-md py-2 px-10 mt-[200px]">
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(value)=>handleRegister(value)}
      >
        <Form className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name</label>
              <Field className="outline-0 border rounded-md px-2 py-1" id="firstName" name="firstName" placeholder="Jane" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <Field className="outline-0 border rounded-md px-2 py-1" id="lastName" name="lastName" placeholder="Doe" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <Field 
                className="outline-0 border rounded-md px-2 py-1"
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <Field 
                className="outline-0 border rounded-md px-2 py-1"
                id="password"
                name="password"
                placeholder="abc"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="bg-green-500 rounded-md px-2 py-1 my-2 flex-1" type="submit">Login</button>
           
          </div>
        </Form>
      </Formik>
    </div>
  );
}
