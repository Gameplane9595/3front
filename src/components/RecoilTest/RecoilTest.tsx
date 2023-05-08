import { useRecoilState } from 'recoil';
import { testState } from '@/store/test';
import { ChangeEvent } from 'react';

const RecoilTest = () => {
  const [test, setTest] = useRecoilState(testState);

  const testRecoil = (e: ChangeEvent<HTMLInputElement>) => {
    setTest(e.target.value);
  };

  return (
    <>
      <div>test component</div>
      <input type="text" value={test} onChange={testRecoil} />
      <div>{test}</div>
    </>
  );
};

export default RecoilTest;
