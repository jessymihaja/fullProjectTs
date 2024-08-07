import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface UseAxiosParams {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
}

interface UseAxiosResponse<T> {
  response: T | null;
  error: any;
  isLoading: boolean;
}

function useAxios<T = any>({ url, method, data }: UseAxiosParams): UseAxiosResponse<T> {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const config: AxiosRequestConfig = {
          url,
          method,
          data,
        };

        const result = await axios(config);
        setResponse(result.data);
      } catch (err) {
        setError(err);
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, data]);

  return { response, error, isLoading };
}

export default useAxios;

