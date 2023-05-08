import { useRef, useState } from 'react';
import {
  CategoryContainer,
  CategoryFormWrapper,
  CategoryItemWrapper,
} from './category-styled';
import CategoryItem from './CategoryItem';
import CategoryModal from './CategoryModal';
import { categoryType } from '@/types/category';

const Category = () => {
  const [dummyCategory, setDummyCategory] = useState<categoryType[]>([
    { id: '1', name: '카테고리1' },
    { id: '2', name: '카테고리2' },
    { id: '3', name: '카테고리3' },
  ]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [categoryItem, setCategoryItem] = useState<categoryType>({
    id: '',
    name: '',
  });

  const handleCategoryItem = (item: categoryType) => {
    setCategoryItem(item);
  };

  const handleModalOpened = (isOpened: boolean) => {
    setIsModalOpened(isOpened);
  };

  const categoryRef = useRef<HTMLInputElement>(null);

  const addCategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    categoryRef.current?.value &&
      setDummyCategory([
        ...dummyCategory,
        {
          id: String(Math.random()),
          name: categoryRef.current?.value,
        },
      ]);

    categoryRef.current && (categoryRef.current.value = '');

    console.log(dummyCategory);
  };

  return (
    <CategoryContainer>
      <h1>카테고리 설정</h1>
      <CategoryFormWrapper onSubmit={addCategory}>
        <input
          type="text"
          ref={categoryRef}
          placeholder="카테고리를 입력하세요"
          required
        />
        <button>추가</button>
      </CategoryFormWrapper>
      <CategoryItemWrapper>
        {dummyCategory &&
          dummyCategory.length > 0 &&
          dummyCategory.map(item => {
            return (
              <CategoryItem
                category={item}
                key={item.id}
                onCategoryItemChange={handleCategoryItem}
                onModalOpenedChange={handleModalOpened}
              />
            );
          })}
      </CategoryItemWrapper>

      {isModalOpened ? (
        <div>
          <CategoryModal
            categoryItem={categoryItem}
            onModalOpenedChange={handleModalOpened}
          />
        </div>
      ) : null}
    </CategoryContainer>
  );
};

export default Category;
