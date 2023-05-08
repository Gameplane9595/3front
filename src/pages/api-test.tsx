import * as API from '@/utils/api';

const apiTest = () => {
  interface jsonType {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const apiTest = async (): Promise<jsonType> => {
    const response = await API.get<jsonType>('/posts');
    return response.data;
  };
  const testAPI = async () => {
    const result = await apiTest();
    console.log('test', result, typeof result);
  };

  return (
    <>
      <div>
        <button type="button" onClick={testAPI}>
          {' '}
          test api
        </button>
      </div>
    </>
  );
};

export default apiTest;
