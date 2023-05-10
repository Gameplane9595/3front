import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
	Container,
	Form,
	Input,
	ButtonWrapper,
	Button,
	InputWrapper,
	SignupTitle,
	InputTitle
} from './ModifyInfo-styled';

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