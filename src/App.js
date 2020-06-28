import React from 'react';
import './App.css';
import  PersonComponent  from './PersonComponent';

export default function App() {
	const people = [
		{
			img: 'https://i.pinimg.com/750x/26/12/73/261273da88b3732c008a871d0284642b.jpg',
			name: 'John',
			id: 1,
			age: 22
		},
		{
			img: 'https://i.pinimg.com/750x/26/12/73/261273da88b3732c008a871d0284642b.jpg',
			name: 'Emerson',
			id: 2,
			age: 15
		},
		{
			img: 'https://i.pinimg.com/750x/26/12/73/261273da88b3732c008a871d0284642b.jpg',
			name: 'Trokon',
			id: 3,
			age: 12
		},
		{
			img: 'https://i.pinimg.com/750x/26/12/73/261273da88b3732c008a871d0284642b.jpg',
			name: 'Paul',
			id: 4,
			age: 35
		},
		{ img: 'https://i.pinimg.com/750x/26/12/73/261273da88b3732c008a871d0284642b.jpg', name: 'Mike', id: 5, age: 45 },
		{ img: 'https://i.pinimg.com/750x/26/12/73/261273da88b3732c008a871d0284642b.jpg', name: 'Timothy', id: 6, age: 67 },
		{ img: 'https://i.pinimg.com/750x/26/12/73/261273da88b3732c008a871d0284642b.jpg', name: 'Timothy', id: 6, age: 67 },
		{ img: 'https://i.pinimg.com/750x/26/12/73/261273da88b3732c008a871d0284642b.jpg', name: 'Timothy', id: 6, age: 67 },
		{ img: 'https://i.pinimg.com/750x/26/12/73/261273da88b3732c008a871d0284642b.jpg', name: 'Timothy', id: 6, age: 67 }
	];
	return (
		<div className="App">
			<h1 className=""> My Friends</h1>
			<div class="container">
				<div class="row mt-5">
					{people.map((person) => (
						<PersonComponent person={person}/>
						
					))}
				</div>
			</div>
		</div>
	);
}


