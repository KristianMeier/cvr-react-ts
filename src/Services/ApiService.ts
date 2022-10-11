type Response = {
  data: any;
  error?: string;
};

const getData = async (url: string): Promise<Response> => {
  const dataResponse: Response = {
    data: undefined,
    error: undefined,
  };

  try {
    const response = await fetch(url);
    const fetchedData = await response.json();

    dataResponse.data = fetchedData;
  } catch (error: any) {
    dataResponse.error = error.message;
  }

  return dataResponse;
};

export { getData };
