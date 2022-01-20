import React from 'react';

const ItemSelect = (props) => {

    const selectYearHandler =(e)=>{
       props.onSaveYear(e.target.value)
      }
  return <>
  <select value={props.selectYears} onChange={selectYearHandler} class="form-select" aria-label="Default select example">
  <option value= '2001'>2001</option>
  <option value='2000'>2000</option>
  <option value= '2022'>2022</option>
  <option value= 'all'>Select All</option>
</select>

  </>;
};

export default ItemSelect;
