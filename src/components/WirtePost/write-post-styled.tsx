import styled from 'styled-components';

export const WritePostContainer = styled.main`
  max-width: 720px;
  margin: 0 auto;
`;

export const WriteFormContainer = styled.div`
  width: 100%;
  padding-top: 70px;
`;
export const SubmitButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;

  button {
    border: none;
    padding: 7px 18px;
    border-radius: 12px;
    margin-left: 15px;

    &:hover {
      opacity: 0.7;
      transition: all 0.3s;
    }
  }
`;
export const SubmitButton = styled.button`
  background-color: #598392;
  color: #fff;
`;
export const DeleteButton = styled.button`
  background-color: #eee;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleInput = styled.input`
  border: none;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 10px;
  padding: 10px 5px;
  font-size: 1.5rem;
  font-weight: bold;
  &::placeholder {
    color: #bbb;
  }
  &:focus {
    &::placeholder {
      color: #aec3b0;
    }
  }
`;
export const ContentTextArea = styled.textarea`
  resize: none;
  border: none;
  padding: 10px 5px;
  height: 400px;
  font-size: 1.2rem;
  &::placeholder {
    color: #bbb;
  }
  &:focus {
    &::placeholder {
      color: #aec3b0;
    }
  }
`;

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  button {
    height: 32px;
    width: 80px;
    border: none;
    padding: 5px 0;
    border-radius: 10px;
    /* background-color: #aec3b0; */
    background: none;
    margin-bottom: 10px;
    color: #598392;
    font-weight: bold;
    font-size: 1.1rem;
    &:hover {
      opacity: 0.7;
      transition: all 0.3s;
    }
  }
`;

export const SummaryTextArea = styled.textarea`
  resize: none;
  border: none;
  padding: 10px 5px;
  font-size: 1.1rem;
  height: 200px;
  &::placeholder {
    color: #bbb;
  }
  &:focus {
    &::placeholder {
      color: #aec3b0;
    }
  }
`;

export const CategoryContainer = styled.div``;
