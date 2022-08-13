import React, { useState } from 'react'
import styled from 'styled-components'

function Form({ onSubmitAddValue }) {
	const [inputValue, setInputValue] = useState('')

	function inputHandler(event) {
        setInputValue(event.target.value)
	}

	function submitValue(event) {
        if(!inputValue.trim())return null
		event.preventDefault()
		onSubmitAddValue(inputValue)
		setInputValue('')
	}

	return (
		<form onSubmit={submitValue}>
			<input value={inputValue} type='text' onChange={inputHandler} />
			<button type='submit'>Add</button>
		</form>
	)
}

export default Form

