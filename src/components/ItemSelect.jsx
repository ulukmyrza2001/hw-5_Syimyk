import React from 'react';

const ItemSelect = (props) => {

    const [year, setYear] = React.useState(2022);
    // console.log(year);

    const selectYearHandler =(e)=>{
        setYear(e.target.value)

        props.onSaveYear(year)
       
  
      }
  return <>
  <select onChange={selectYearHandler} class="form-select" aria-label="Default select example">
  <option value= {year}>2001</option>
  <option value="2000">2000</option>
  <option value="2022">2022</option>
  <option value="Select All">Select All</option>
</select>

  </>;
};

export default ItemSelect;
