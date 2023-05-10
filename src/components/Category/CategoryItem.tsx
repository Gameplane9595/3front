import { useEffect, useRef, useState } from 'react';
import {
  CategoryItemContainer,
  CategoryName,
  CategoryButtonContainer,
} from './category-styled';
import { categoryType } from '@/types/category';

interface Props {
  category: categoryType;
  onCategoryItemChange: (item: Props['category']) => void;
  onModalOpenedChange: (isOpened: boolean) => void;
}

const CategoryItem = (props: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>('');

  const categoryRef = useRef<HTMLInputElement>(null);

  const editCategory = () => {
    setIsEdit(true);
    setCategoryName(props.category.name);
  };

  const submitEdit = () => {
    if (!categoryName) {
      return categoryRef.current?.focus();
    }
    const catItem = {
      id: props.category.id,
      name: categoryName,
    };
    console.log('edit', catItem);
    setIsEdit(false);
  };

  const deleteCategory = () => {
    console.log(`${props.category.id} 삭제`);
  };

  useEffect(() => {
    console.log('cat', props.category);
  }, []);

  return (
    <CategoryItemContainer>
      {isEdit ? (
        <input
          type="text"
          ref={categoryRef}
          value={categoryName}
          onChange={e => setCategoryName(e.target.value)}
        />
      ) : (
        <CategoryName>{props.category.name}</CategoryName>
      )}

      <CategoryButtonContainer>
        {isEdit ? (
          <button type="button" onClick={submitEdit}>
            완료
          </button>
        ) : (
          <button type="button" onClick={editCategory}>
            편집
          </button>
        )}

        <button type="button" onClick={deleteCategory}>
          삭제
        </button>
      </CategoryButtonContainer>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
