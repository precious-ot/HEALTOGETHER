
import Logo from "./Asset/logo.png"
import React, { useState } from "react";
import MainPage from './MainPage';

type signData = {
  email: string
  password: string
  confirmPassword: string
}

type signError = {
   email?: string
  password?: string
  confirmPassword?: string
}

type FormData = {
  email: string
  password: string
}

type FormError = {
  email?: string
  password?: string
}

export default function Login(){
  const [signIn, setSignIn] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({email: "", password: ""});
  const [formError, setFormError] = useState<FormError>({});
  const [signData, setSignData] = useState<signData>({email: "", password: "", confirmPassword: ""});
  const [signError, setSignError] = useState<signError>({});
  const [success, setSuccess] = useState(false);
  const [login, setLogin] = useState(true);

  const validateLogin = () => {
    const newError: FormError = {};

    if(!formData.email.trim()){
      newError.email = "Email is required";
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
      newError.email = "Enter valid email address";
    }

    if(!formData.password.trim()){
      newError.password = "Password is required";
  } else if(formData.password.length < 6) {
      newError.password = "Password must be at least 6 characters long";
  }
 
  
   setFormError(newError)
   return Object.keys(newError).length === 0
  };

   const validateSign = () => {
    const newError: signError = {};

    if(!signData.email.trim()){
      newError.email = "Email is required";
    } else if(!/\S+@\S+\.\S+/.test(signData.email)){
      newError.email = "Enter valid email address";
    }

    if(!signData.password.trim()){
      newError.password = "Password is required";
  } else if(signData.password.length < 6) {
      newError.password = "Password must be at least 6 characters long";
  }
 
  if(!signData.confirmPassword.trim()){
    newError.confirmPassword = "Please re-enter your password";
  } else if(signData.confirmPassword !== signData.password) {
    newError.confirmPassword = "Passwords do not match";
  }
  
   setSignError(newError)
   return Object.keys(newError).length === 0
  };

  const handleSubmite = (e: React.FormEvent) => {
    e.preventDefault();
   if(validateLogin()) {
      setSuccess(true);
      setLogin(false);
      setFormData({email: "", password: ""});
      setFormError({});
    } else {
      setSuccess(false);
      setLogin(true);
    }
  }

   const handleSubmiteSign = (e: React.FormEvent) => {
    e.preventDefault();
   if(validateSign()) {
      setSignIn(false);
      setLogin(false);
      setSuccess(true);
      setSignData({email: "", password: "", confirmPassword: ""});
      setSignError({});
    } else {
      setSignIn(true);
      setLogin(true);
      setSuccess(false);
    }
  }


   const handleChangeSign = (e: React.ChangeEvent<HTMLInputElement>) => {
     const {name, value} = e.target;
     setSignData((prev) => ({...prev, [name]: value}));
   }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const {name, value} = e.target;
     setFormData((prev) => ({...prev, [name]: value}));
  };
  
  const handleSignin = () => {
    setSignIn(true);
  }

  const handlelClose = () => {
    setSignIn(false);
  }

    return(
      <div>
        {login &&
      <div className={`grid justify-center items-center bg-slate-100 h-full ${signIn ? "" : "py-10"}`}>  
        <div className={`bg-white grid place-items-center px-5 text-center sm:px-15 py-10 shadow-2xl/30 rounded-lg ${signIn ? "hidden" : "block"}`}>
          <div className="grid w-26 h-26 shadow-lg rounded-full bg-slate-100">
            <img className="w-25 h-25 rounded-full place-self-center" src={Logo}/> 
          </div>
          <h1 className="text-3xl font-bold text-neutral-950 mt-8">Welcome to HealTogether</h1>
          <p className="font-semibold text-neutral-500 text-lg mt-5">Sign in to continue</p>
          <button className="text-blue-800 gap-3 border-1 border-neutral-300 rounded-lg w-full justify-center mt-8 py-3 flex place-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
         <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
         </svg> <span className="text-neutral-700 text-md font-semibold">Continue with Google</span></button>
         <div className="flex w-full place-items-center gap-2 mt-5">
          <hr className="text-neutral-300 w-full h-[1px]" /> 
          <span className="font-semibold text-neutral-400 text-sm">OR</span> 
          <hr className="text-neutral-300 w-full h-[1px]" />
         </div>
         <form className="w-full mt-5" onSubmit={handleSubmite}>
          <label htmlFor="email" className="font-semibold text-neutral-500 text-md">Email</label>
          <div className="mb-5">
          <div className="flex place-items-center gap-4 text-neutral-500 mb-2 py-3 mt-2 rounded-xl px-4 border-1 border-neutral-300 w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
           <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
           </svg>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="focus:outline-none placeholder:text-md w-full placeholder:text-neutral-400" placeholder="you@example.com"/>
          </div> 
          {formError.email && (<p className="text-red-700 mb-5 text-sm text-start">{formError.email}</p>)}
           </div>
          <label htmlFor="password" className="font-semibold text-neutral-500 text-md">Password</label>
          <div className="mb-5">
          <div className="flex place-items-center gap-4 text-neutral-500 py-3 mt-2 mb-2 rounded-xl px-4 border-1 border-neutral-300 w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"/>
            </svg>           
            <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} className="focus:outline-none w-full placeholder:text-2xl placeholder:font-bold placeholder:text-neutral-400" placeholder="........"/>
          </div>
          {formError.password && (<p className="text-red-700 mb-5 text-sm text-start">{formError.password}</p>)}
          </div>
          <button type="submit" className="bg-neutral-800 w-full rounded-lg mt-3 font-semibold text-neutral-100 py-3">Sign in</button>
         </form>
         <div className="flex mt-3 w-full">
          <div className="font-semibold text-neutral-500 text-sm text-start grow-1">Forgot password?</div>
          <div className="font-semibold text-neutral-400 text-sm cursor-pointer hover:text-neutral-500">Need an account? <a className="text-neutral-600" onClick={handleSignin}>Sign up</a></div>
         </div>
        </div>
        {signIn &&
        <div className="grid items-center place-items-center h-screen w-auto sm:w-full">
         <div className="bg-white grid h-auto place-items-center px-5 sm:px-10 py-10 shadow-2xl/30 rounded-lg sm:w-md">
            <div className="sm:w-full place-self-start">
            <button onClick={handlelClose} className="text-neutral-500 flex gap-1 justify-start place-items-center cursor-pointer text-sm hover:text-neutral-600 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
            </svg>
            <span>Back to sign in</span>
            </button>
            </div>
            <h1 className="text-2xl font-bold text-neutral-950 mt-8 px-5 sm:px-10">Create your account</h1>
          <form onSubmit={handleSubmiteSign} className="sm:w-full mt-8">
          <label htmlFor="sign-email" className="font-semibold text-neutral-500 text-md">Email</label>
          <div>
          <div className="flex place-items-center gap-4 text-neutral-500 mb-2 py-3 mt-2 rounded-xl ps-4 border-1 border-neutral-300 w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
           <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
           </svg>
            <input id="sign-email" name="sign-email" type="email" value={signData.email} className="focus:outline-none placeholder:text-md w-full placeholder:text-neutral-400" onChange={handleChangeSign} placeholder="you@example.co"/>
          </div>
          {signError.email && (<p className="text-red-700 mb-2 text-sm text-start">{signError.email}</p>)}
          </div>
          <label htmlFor="sign-password" className="font-semibold text-neutral-500 text-md">Password</label>
          <div>
          <div className="flex place-items-center gap-4 text-neutral-500 py-3 mt-2 mb-2 rounded-xl ps-4 border-1 border-neutral-300 w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"/>
            </svg>
            <input id="sign-password" name="password" type="password" value={signData.password} className="focus:outline-none w-full placeholder:text-md placeholder:text-neutral-400" onChange={handleChangeSign} placeholder="Min. 6 characters"/>
          </div>
          {signError.password && (<p className="text-red-700 mb-5 text-sm text-start">{signError.password}</p>)}
          </div>
          <label className="font-semibold text-neutral-500 text-md">Confirm Password</label>
          <div>
          <div className="flex place-items-center gap-4 text-neutral-500 mb-2 py-3 mt-2 rounded-xl ps-4 border-1 border-neutral-300 w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"/>
            </svg>
            <input name="confirmPassword" type="password" value={signData.confirmPassword} className="focus:outline-none w-full placeholder:text-md placeholder:text-neutral-400" onChange={handleChangeSign} placeholder="Re-enter password"/>
          </div>
          {signError.confirmPassword && (<p className="text-red-700 mb-5 text-sm text-start">{signError.confirmPassword}</p>)}
          </div>
          <button type="submit" className="bg-neutral-800 w-full rounded-lg mt-3 font-semibold text-neutral-100 py-3">Create account</button>
         </form>
        </div>
        </div>
        }
        </div>
         }
        {success && (
          <MainPage />
        )}
        </div>
    );
}