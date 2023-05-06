import {useState} from 'react';
import { Container } from 'react-bootstrap';

function Form()
{

    //destructuring of state
    const[email,setEmail]=useState("");
    const[name,setName]=useState("");
    const[address,setAddress]=useState("");

    
    // when form will submitted will call create a function
    // const handleChange=(event)=>{
         
    //     const email=event.target.name;
    //     const value=event.target.value;
    //     setEmail(values=>({...values,[email]:value}));

    // }

    const handleSubmit=(event)=>{
         
       event.preventDefault();
    //alert(`The email of users is :${email}`) 
    //  alert(`The name of users is :${name}`) 

    alert(`The address  is :${address}`) 
    // document.writeln(`The email of users is :${email}`)

       //console.log(email);

    }


    return (
        <>
        <Container className='bg-primary text-white p-5 mt-5 w-50 mx-auto'>
            <h2 className='text-center'>Register Form</h2>
            <hr className='border border-1 w-25 mx-auto' />
             <form onSubmit={handleSubmit}>


             {/* <div className='form-group col-md-6 mx-auto mt-2'>
                <input type='text' name='em' value={email.em} onChange={handleChange} className='form-control' placeholder='Enter your Email *' required />
             </div> */}




             <div className='form-group col-md-6 mx-auto mt-2'>
                <input type='text' name='em' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='Enter your Email *' required />
             </div>


             <div className='form-group col-md-6 mx-auto mt-2'>
                <input type='text' name='nm' onChange={(e)=>setName(e.target.value)} className='form-control' placeholder='Enter your name *' required />
             </div>



             <div className='form-group col-md-6 mx-auto mt-2'>
                <textarea  name='address' onChange={(e)=>setAddress(e.target.value)} className='form-control' placeholder='Enter your Address*' required></textarea>
             </div>


             <div className='form-group col-md-6 mx-auto mt-2'>
                <input type='submit' className='btn btn-sm btn-danger' value="Submit" />
             </div>

             </form>

        </Container>
        
        </>
    )

}
export default Form;