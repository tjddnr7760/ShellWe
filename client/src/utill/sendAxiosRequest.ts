import axios from 'axios';

export const sendAxiosRequest = async (requestConfig: object) => {
  const response = await axios(requestConfig);
  return response;
};

/*api 사용법
1.api폴더에 endpoint부분의 api를 함수로 작성한다.
2.requestConfig함수를 호출하여 인자로 (위에서 만든 api함수,method,body 데이터,
  header사용 유무 T or F(추후에 변경가능성 있음)를 넣는다. 
  만약 body 데이터가 없다면 null을 넣는다.
3.get요청이면 useGetRequest,그외의 요청이면 useMutionRequest을 호출하여, 인자을 넣는다.
4.인자의 경우  
useGetRequest은 (퀴리 키,2번의 requestConfig,요청이 성공할 경우 실행할 작업)
useMutionRequest은 (2번의 requestConfig,요청이 성공할 경우 실행할 작업)
퀴리 키는 그냥 고유한 문자열을 넣으면 된다. 보통 자신의 요처이름을 넣는다.
ex)shell을 삭제하는 경우, "shellDeleteKey"를 퀴리키로.

실제 사용예시:
main페이지 get요청
const { isLoading, data } = useGetRequest("mainListKey",requestConfig(mainPageAPI,"Get",null,false))

생성페이지의 post요청
const {data, mutate} = useMutionRequest(requestConfig(shellDefaultAPI,"Post",requestData,true),onSuccessFunc)

  */
