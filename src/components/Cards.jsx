import React from 'react'
import './Cards.css'
import ItemSelect from './ItemSelect'

const Cards = (props) => {

	const [year, setYear] = React.useState('2022')

	const filtredAray = props.datas.filter((el) => {
		return el.date.getFullYear().toString() === year
	})
	
	const selectYearHandler = (selectedYear) => {
		setYear(selectedYear)
	}

	return (
		<div className='cards'>
       <ItemSelect selectYears = {year} onSaveYear={selectYearHandler}/>
			{filtredAray.map((el) => {
				return (
					<div className='card'>
						<img
							style={{ width: '60px' }}
							src='https://cdn3.iconfinder.com/data/icons/flat-avatars-3/512/Flat_avatars_svg-05-512.png'
							alt=''
						/>

						<div>
							<p>{el.name}</p>
							<p>{el.email}</p>
							<p>
								{el.date.getFullYear().toString()}-
								{el.date.getDay().toString()}-
								{el.date.getDate().toString()}
							</p>
						</div>
					</div>
				)
			})}
      {year == 'all' && props.datas.map((el) => {
				return (
					<div className='card'>
						<img
							style={{ width: '60px' }}
							src='https://cdn3.iconfinder.com/data/icons/flat-avatars-3/512/Flat_avatars_svg-05-512.png'
							alt=''
						/>

						<div>
							<p>{el.name}</p>
							<p>{el.email}</p>
							<p>
								{el.date.getFullYear().toString()}-
								{el.date.getDay().toString()}-
								{el.date.getDate().toString()}
							</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Cards
