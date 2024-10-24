import React, { useContext, useState } from 'react'
import googleIcon from '../assets/googleIcon.webp';
import image_1 from '../assets/image_1.png';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import Footer from '../components/Footer.jsx';

const LogIn = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    email: 'duncan.david600@gmail.com',
    password: 'Derealboys23',
    password2: ''
  });
  const [msg, setMsg] = useState('')

  const handleChange = (e)=> {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
  }

  const {login} = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e)=> {
    e.preventDefault();
    console.log(formData);
    try {
      // POST request to your backend
      const response = await axios.post('http://localhost:8000/users/login', formData);
      console.log(response.data);  // Handle the response from the server (e.g., success message)
      setMsg(response.data);
      if(response.data === 'Logged in successfully'){
        setMsg('');
        
        login();
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('There was an error during sign-up:', error);  // Handle any errors
    }

    
  }
  


  return (
    <div>
    <div className='flex flex-col h-[100vh] max-w-100vw md:flex-row '>



                {/* ------ Right Side */}
          <div className='bg-purple-100 border w-1/2 hidden md:block  justify-center'>
          <Link to='/'><h1 className='text-2xl font-bold ml-[15px] mt-[20px] px-[10px]'>  <span className='text-xl font-bold text-purple-900 cursor-pointer'>DADTradeX</span></h1></Link>
            <div className='flex pt-[120px] pl-[50px] items-center'>
              <img src={image_1} alt="" className='w-[480px] h-[480px]rounded-full object-cover '/>
            </div>
            <div>
              <h1 className='text-2xl font-bold ml-[15px] mt-[20px] px-[10px]'>Easily invest in stocks and crypto in one <span className='text-3xl font-bold text-purple-900'>DADTradeX</span></h1>
              <p className='text-center text-xl mt-[10px] px-[10px]'>Join the millions of earners earning millions of dollars. You're just few steps away. </p>
            </div>
        </div>


                {/* ------Left Side ------ */}
        
            
        <div className=' px-[20px] py-[20px] pt-[90px] md:px-[90px] md:pt-[140px] h-full w-full md:w-1/2 flex justify-center'>
          <div className=' w-[250px] md:w-[350px]'>

         
          <form onSubmit={handleSubmit}>

            <h1 className='font-bold text-xl  md:text-3xl md:pb-[20px] py-[7px]'>Sign In</h1>
            <p className='text-xs md:text-sm text-gray-500 pb-[20px]'>Be a part of the high earners in the stock market</p>

            <div className='flex items-center justify-center gap-[5px] font-bold border py-[3px] px-[10px] text-center rounded-lg cursor-pointer mb-[10px] w-full bg-gray-100 hover:bg-gray-200 '>
              <img src={googleIcon} alt="" className='w-[30px]' />
              <p className='text-sm'>Sign in with Google</p>
            </div>

            <div className='flex items-center justify-center gap-[10px] mb-[10px]'>
            <p className='w-[100px] h-[1px] bg-gray-200'></p>
            <p className='text-gray-500 text-xs md:text-sm text-center' >or Sign in with email</p>
            <p className='w-[100px] h-[1px] bg-gray-200'></p>
            </div>
           
              {/* Display message */}
            {msg && <span className='text-red-500'>{msg}</span>}

            <div className='flex flex-col mt-[15px]'>
            {/* <label htmlFor="email" className='font-semibold'>Email*</label> */}
              <input type="email" id='email' name='email' placeholder='example@mail.com' value={formData.email} onChange={handleChange} required={true} className='border border-purple-400 py-[7px] px-5 rounded-lg w-full'/>
            </div>

            <div className='flex flex-col mt-[15px]'>
            {/* <label htmlFor="password" className='font-semibold'>Password*</label> */}
              <input type="password" id='password' name='password' placeholder='Min. 8 character' value={formData.password} onChange={handleChange} required={true} className='border border-purple-400 py-[7px] px-5 rounded-lg w-full'/>
            </div>


            <div className='flex items-center justify-between text-center '>
              <div className='flex gap-[10px] mt-[15px]'>
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe" className='text-xs md:text-sm font-semibold cursor-pointer text-center '>Remember me</label>
              </div>
              <div>
                <p className=' font-semibold text-xs md:text-sm  cursor-pointer text-center mt-[12px] text-purple-500'>Forgot password?</p>
              </div>
            </div>

            <button type="submit" className='w-full bg-purple-700 text-white rounded-lg py-[5px] px-[7px] mt-[20px] font-semibold hover:bg-purple-800'>Sign In</button>
            <p className='text-sm font-semibold mt-[15px] '>
                Don't have an account?
            <Link to='/register'>
            <span className='text-sm font-semibold text-purple-500 cursor-pointer ml-[5px]' >Sign Up</span>
            </Link>
            </p> 
          
          </form>
          </div>
        </div>

</div>
<Footer/>
</div>
  )
}

export default LogIn