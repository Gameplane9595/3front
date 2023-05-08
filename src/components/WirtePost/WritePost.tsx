import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  WritePostContainer,
  WriteFormContainer,
  SubmitButtonContainer,
  InputsContainer,
  SummaryWrapper,
  TitleInput,
  ContentTextArea,
  SummaryTextArea,
  SubmitButton,
  DeleteButton,
  CategoryContainer,
} from './write-post-styled';
import { useRouter } from 'next/router';

interface Props {
  isEdit?: Boolean;
}

const dummyCategory = ['카테고리1', '카테고리2', '카테고리3'];

const WritePost = ({ isEdit }: Props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const summaryRef = useRef<HTMLTextAreaElement>(null);

  const router = useRouter();

  useEffect(() => {
    console.log('edit', isEdit);
    if (router.isReady && isEdit) {
      const { id } = router.query;
      console.log('id', id);

      titleRef.current && (titleRef.current.value = '수정 타이틀' + id);
      contentRef.current && (contentRef.current.value = '수정 내용' + id);
      summaryRef.current && (summaryRef.current.value = '수정 요약' + id);
    }
  }, [router, isEdit]);

  const handleSubmit = () => {
    if (!titleRef.current?.value) {
      return titleRef.current?.focus();
    }

    if (!contentRef.current?.value) {
      return contentRef.current?.focus();
    }

    const title = titleRef.current?.value;
    const content = contentRef.current?.value;
    const summary = summaryRef.current?.value;
    console.log('저장', title, content, summary);
  };

  const handleDelete = () => {
    console.log('삭제');
  };

  const getSummary = () => {
    const random = Math.random();
    const summary = '요약이다아아아아 + 랜덤숫자 ' + random;

    if (summaryRef.current && summaryRef.current.value) {
      if (
        window.confirm(
          `입력한 내용은 모두 사라집니다. 요약 추천을 받으시겠습니까?`
        )
      ) {
        summaryRef.current.value = summary;
      }
    } else {
      summaryRef.current && (summaryRef.current.value = summary);
    }
  };

  return (
    <WritePostContainer>
      <WriteFormContainer>
        <SubmitButtonContainer>
          {isEdit ? (
            <SubmitButton type="button" onClick={handleSubmit}>
              완료
            </SubmitButton>
          ) : (
            <SubmitButton type="button" onClick={handleSubmit}>
              저장
            </SubmitButton>
          )}

          <DeleteButton type="button" onClick={handleDelete}>
            삭제
          </DeleteButton>
        </SubmitButtonContainer>
        <InputsContainer>
          <TitleInput
            name="title"
            placeholder="제목을 입력하세요"
            type="text"
            ref={titleRef}
          />
          <ContentTextArea
            name="content"
            placeholder="내용을 입력하세요"
            ref={contentRef}
          />
          <SummaryWrapper>
            <button type="button" onClick={getSummary}>
              요약 추천
            </button>
            <SummaryTextArea
              name="summary"
              placeholder="요약을 입력하세요"
              ref={summaryRef}
            />
          </SummaryWrapper>
        </InputsContainer>
        <CategoryContainer>
          <h3>카테고리</h3>
          {dummyCategory &&
            dummyCategory?.map(item => {
              return (
                <label>
                  {item}
                  <input type="radio" name="category" value={item} />
                </label>
              );
            })}
          <button>카테고리 추가</button>
        </CategoryContainer>
      </WriteFormContainer>
    </WritePostContainer>
  );
};

export default WritePost;
