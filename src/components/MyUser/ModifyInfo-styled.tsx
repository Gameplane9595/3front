import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 30rem;
	height: 40rem;
	margin-top: 10px;
	position: relative;
	top: 5rem;
	left: 33%;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	border: 1px solid;
	border-radius: 4px;
	width: 150%;
	height: 150%;
`;

export const Input = styled.input`
	padding: 1rem;
	margin-top: 2rem;
	border: 0;
	border-bottom: 1px solid;
	width: 32rem;
	font-size: 1rem;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 1rem;
	margin: 1rem;
	width: 15rem;
	height: 3rem;

	background-color: #598392;
	color: #01161E;
	font-size: 20px;
	font-weight: bold;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
			background-color: #124559;
	}
	
	&.cancel {
		background-color: lightgray;

		&:hover{
			background-color: gray
		}
	}
`;

export const InputWrapper = styled.div`
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	justify-content:center;
`

export const SignupTitle = styled.h2`
	font-size: 30px;
	font-family: 'Roboto Flex', sans-serif;
	font-weight: bold;
	position: relative;
	top: 10%;
`

export const InputTitle = styled.h2`
	font-family: 'Roboto Flex', sans-serif;
	text-align: left;
	position: relative;
	left: 0px;
	top: 5%;
`