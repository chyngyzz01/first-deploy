import React from 'react'

function RandomRenderItem({ onRandomChose, onRandomChoseItem }) {
	return (
		<div>
			<h1>{onRandomChoseItem.name}</h1>
			<button onClick={onRandomChose}>random</button>
		</div>
	)
}

export default RandomRenderItem
