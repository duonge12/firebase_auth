// src/components/Login.jsx
import { signInWithEmailAndPassword } from "firebase/auth";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../services/firebaseConfig";

export const Login =()=> {
  const navigate = useNavigate();
  const handleLogin = async(value) => {
    try{
      const {email, password}=value
      await signInWithEmailAndPassword(auth,email,password)
      const user=auth.currentUser;
      if(user){
        console.log(user)
        localStorage.setItem('displayName',user.displayName);
      }
      navigate('/')
    }
    catch(err){
      console.log(err)
    }
    
  };

  const handleNavigateToRegister=()=>{
    navigate('/register')
  }
  return (
    <div className="w-fit h-fit shadow-md py-2 px-10 mt-[200px]">
      <img src="https://images.careerviet.vn/content/news/20160915/image00_1473876022.png" className="w-full h-[60px] object-cover my-3" />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => handleLogin(values)}
      >
        <Form className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">

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
              <label htmlFor="email">Password</label>
              <Field 
                className="outline-0 border rounded-md px-2 py-1"
                id="password"
                name="password"
                placeholder="jane@acme.com"
                type="password"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="bg-green-500 rounded-md px-2 py-1 my-2 flex-1" type="submit">Login</button>
            <button onClick={handleNavigateToRegister} className="bg-blue-300 rounded-md px-2 py-1 my-2 flex-1">Register</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
