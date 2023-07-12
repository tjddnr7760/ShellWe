const DOMAIN = `${import.meta.env.VITE_KEY}`;

export interface RequestConfigArgs {
  apiUrl: string;
  methodType: string;
  requestData?: null | object | FormData; // requestData는 선택적 매개변수
  isHeader: boolean;
}

export const requestConfig = ({
  apiUrl,
  methodType,
  requestData = null,
  isHeader,
}: RequestConfigArgs) => {
  const headers = isHeader ? { 'ngrok-skip-browser-warning': '69420' } : null;
  // headers은 이후 다른 옵션을 삽입.

  return {
    url: `${DOMAIN}${apiUrl}`,
    method: methodType,
    data: requestData,
    headers,
  };
};
