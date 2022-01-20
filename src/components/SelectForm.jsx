import React,{useState} from 'react';
import Cards from './Cards';
import ItemSelect from './ItemSelect';
import './SelectForm.css'
import SelectTitle from './SelectTitle';

const SelectForm = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
    const [first, setfirst] = useState([]);
   
     


    const inputNameHandler =(e)=>{
        setName(e.target.value)

    }
    const emailNameHandler =(e)=>{
        setEmail(e.target.value)

    }
    const dateNameHandler =(e)=>{
        setDate(e.target.value)

    }
    const numberNameHandler =(e)=>{
        setNumber(e.target.value)

    }
   

    const formSubmitHandler =(e)=>{
        e.preventDefault()
       
        const inputData ={
            name: name,
            date: new Date(date),
            number: number,
            email:email
            id: Math.random()
        }
         console.log(inputData);
        setfirst((prev)=>{
           return[
               ...prev,
               inputData
           ]
             
        }
            
    )
       

    }
    const [yearSelect, setYearSelect] = useState()
    const selectYearHandler=(year)=>{
      setYearSelect(year)

    }

   


  return <div>

      <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-body">
        
        <div class="screen-body-item">

          <form onSubmit={formSubmitHandler} class="app-form">

            <div  className="app-form-group">
              <input class="app-form-control" type="text" onChange={inputNameHandler} placeholder="NAME" value={name} />
              </div>

              <div class="app-form-group">
              <input class="app-form-control"  onChange={emailNameHandler} placeholder="EMAIL" value={email}/>
              </div>

               <div class="app-form-group">
              <textarea  class="app-form-control"  onChange={numberNameHandler} placeholder="CONTACT NO" value={number}/>
               </div>

              <div class="app-form-group message">
              <input type="date" class="app-form-control"  onChange={dateNameHandler} placeholder="Date" value={date}/>
             </div>

              <div class="app-form-group buttons">
              <button type='submit' class="app-form-button">SEND</button>
            </div>

          </form>

        </div>
        <SelectTitle />

      </div>

    </div>
    
     <div className='cards-container'>
       <ItemSelect onSaveYear={selectYearHandler}/>
    <Cards  year={yearSelect} name={first}/>
    </div>
     </div>
 
</div>



         
  </div>;
};

export default SelectForm;
