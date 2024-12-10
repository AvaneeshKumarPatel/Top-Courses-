 import { useEffect, useState } from 'react';
 import Cards from './compnets/Cards.js';
 import Filter from './compnets/Filter';
 import Navbar from './compnets/Navbar.js'; 
 import Spinner from './compnets/Spinner';
 import  { API_URL ,FilterData} from './compnets/Data.js';
 import { toast } from 'react-toastify';



 function App() {

  
 const[Courses, setCourses] = useState(null);
  
 //console.log(Courses , 'After setCourse data of api' );

 const[Loading , setLoading] = useState(true)



// API calling 

async function getData(){
  setLoading(true)

    try{
 
      const response = await fetch(API_URL);
       

      const apiData =  await  response.json();

      // Checking Api Response here 

   console.log('API call  Response here' , apiData);
     
   setCourses(apiData.data);
   
      
    }
    catch(error){
      console.log('API calling issue here', error)
    }
    
    setLoading(false);
    
  };
  
  
  
  useEffect( () =>{
    
    getData()
    
  },[]);
  
  

  return (
     <div className='min-h-screen flex flex-col  bg-slate-800 '>
       
          <div>
            <Navbar/>
          </div>

             <div className='bg-slate-800'>

           <div  className=' flex justify-center items-center flex-wrap'>
            <Filter FilterData={FilterData}/> 
          </div>

              <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
               {
                Loading ? (<Spinner/>) : (<Cards Courses={Courses}/>)
                 }

              </div>
             </div>



           

      </div>

    );



    
}

export default App;
