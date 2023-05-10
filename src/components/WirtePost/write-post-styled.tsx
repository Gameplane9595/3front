import Image from 'next/image';
import styled from 'styled-components';

export const WritePostContainer = styled.main`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const WriteFormContainer = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 40px;
`;

export const SelectAndButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const CategorySelectWrapper = styled.div`
  select {
    width: 140px;
    height: 32px;
    font-size: 16px;
    outline: none;
  }
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;

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

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 5px;
`;

export const SummaryButtonWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  width: 200px;
  button {
    height: 32px;
    text-align: left;
    border: none;
    background: none;
    outline: none;
    padding-left: 5px;
    border-radius: 10px;

    color: #598392;
    font-weight: bold;
    font-size: 1.1rem;
    &:hover {
      opacity: 0.7;
      transition: all 0.3s;
    }
  }
`;

export const SummaryTextarea = styled.textarea`
  height: 100px;
  resize: none;
  padding: 7px 12px;
  border: none;
  background-color: #f8feff;
  &::placeholder {
    color: #889092;
  }
`;

export const SuggestImage = styled(Image)``;

export const CategoryContainer = styled.div``;
