import React from 'react';
import {BACKEND_API_URL } from "../backendAPI";

function Home(){
 return(
   <>
   <h1>HOME PAGE!</h1>
   <p>{BACKEND_API_URL}</p>
   </>

 )
}

export default Home;