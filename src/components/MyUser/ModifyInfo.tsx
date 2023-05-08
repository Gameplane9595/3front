import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components';

export const ModifyInfo = () => {
	const [ name, setName ] = useState<string>('엘리스')
	const [ email, setEmail ] = useState<string>('elice@rabbit.com')
	const [ phone, setPhone ] = useState<string>('010-1234-5678')
	const [ password, setPassword ] = useState<string>('123123')

	const router = useRouter()

	useEffect(() => {
		// const res = axios.get(``)

		// setName(res.data.name)
		// setEmail(res.data.email)
		// setPhone(res.data.phone)
		// setPassword(res.data.password)
		// setName(res.data.name)
	}, [])

	// ! password, passwordConfirm 일치 확인 구현

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			// 회원가입 로직 구현
			console.log("Signup!");
	};
	
	const handleCancel = () => {
			router.push('/my-user')
	};



	return (
			<Container>
					<Form onSubmit={handleSubmit}>
							<SignupTitle>회원 정보 수정</SignupTitle>
							<InputWrapper>
									<InputTitle>이름</InputTitle>
									<Input type="text" placeholder={name} required />
									<InputTitle>이메일</InputTitle>
									<Input type="email" placeholder={email} required />
									<InputTitle>전화번호</InputTitle>
									<Input type="phone" placeholder={phone} required/>
									<InputTitle>비밀번호</InputTitle>
									<Input type="password" placeholder="●●●●●●●" required />
									<InputTitle>비밀번호 확인</InputTitle>
									<Input type="password" placeholder="●●●●●●●" required />
							</InputWrapper>
							<ButtonWrapper>
								<Button className='cancel' onClick={handleCancel}>수정 취소</Button>
								<Button type="submit">수정 완료</Button>
							</ButtonWrapper>
					</Form>
			</Container>
	);
};

export default ModifyInfo

const Container = styled.div`
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

const Form = styled.form`
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

const Input = styled.input`
	padding: 1rem;
	margin-top: 2rem;
	border: 0;
	border-bottom: 1px solid;
	width: 32rem;
	font-size: 1rem;
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

const Button = styled.button`
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

const InputWrapper = styled.div`
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	justify-content:center;
`

const SignupTitle = styled.h2`
	font-size: 30px;
	font-family: 'Roboto Flex', sans-serif;
	font-weight: bold;
	position: relative;
	top: 10%;
`

const InputTitle = styled.h2`
	font-family: 'Roboto Flex', sans-serif;
	text-align: left;
	position: relative;
	left: 0px;
	top: 5%;
`