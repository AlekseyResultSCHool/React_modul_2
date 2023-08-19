import { useState } from 'react';
import styles from './App.module.css';
import React from 'react';

export function App() {
	const arrayButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	const inputText = React.createRef();
	const [arrayButton, setArrayButton] = useState({number1: '', number2: '', sign: ''});	
	const [showText, setshowText] = useState();

	const onClick = (event) => {

		let button = event.target.textContent;	
		
  		if (!isNaN(button) || button === '+' || button === '-'){
			setshowText(true)
			inputText.current.value += button;
        }
           
		let data = inputText.current.value.split(/[- +]/);
		let dataSymbol = inputText.current.value.split('');
		let symbol = dataSymbol.filter(el => el === '+' || el === '-');
		setArrayButton({number1: data[0], number2: data[1], sign: symbol[0]})
		 
		if (button === '='){
			setshowText(false)
			switch (arrayButton.sign){
				case '+': inputText.current.value = +arrayButton.number1 + +arrayButton.number2;
				break;
				case '-': inputText.current.value = +arrayButton.number1 - +arrayButton.number2;
				break;
				default: 
				break;
			}
		}

		if (button === 'C'){
			inputText.current.value = '';
		} 
	}

	return (
		<div className={styles.container}>
			<h2 style={{textAlign: "center"}}>Калькулятор</h2>
			<input type="text" defaultValue="" className = {showText? styles.display : styles.displayRed} ref={inputText} />
			<div className = {styles.buttom} onClick={onClick}>
				<button className = {styles.reset}>C</button>
				{arrayButtons.map(item => <buttom key={item} className = {styles.number}>{item}</buttom>)}
				<button className = {styles.symbol}>+</button>
				<button className = {styles.symbol}>-</button>
				<button className = {styles.equals}>=</button>
			</div>
		</div>
	);
}