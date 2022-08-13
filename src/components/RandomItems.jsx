import React from 'react'

function RandomItems({ name, id }) {
	return (
		<>
        <hr />
			<div key={id}>{name}</div>
		</>
	)
}

export default RandomItems
