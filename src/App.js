import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import RandomItems from './components/RandomItems'
import RandomRenderItem from './components/RandomRenderItem'

function App() {
	const [items, setItems] = useState([])
	const [randomChoseItem, setRandomChoseItem] = useState({})

	function newItems(item) {
		setItems([...items, { id: Math.random(), name: item }])
	}

	function getRandomItem() {
		return Math.floor(Math.random() * items.length)
	}

	function randomChoser() {
		setRandomChoseItem(items[getRandomItem() - 1])
	}

	return (
		<div className='conatiner'>
			<h1>My random app</h1>
			<Form onSubmitAddValue={newItems} />
			{items.map((item) => {
				return (
					<RandomItems key={item.id} id={item.id} name={item.name} />
				)
			})}
			<RandomRenderItem
				onRandomChoseItem={randomChoseItem}
				onRandomChose={randomChoser}
			/>
		</div>
	)
}

export default App
