import { useState, useEffect } from "react";
import Button from "../Styles/Button";
import Loading from "../Styles/Loading";
import HelpComponent from "./Components/HelpComponent";
import ButtonNoLink from "../Styles/ButtonNoLink";
import { getData } from "../Services/ApiService";

export type JsonResponse = {
  id: number;
  title: string;
}[];

function Help() {
  const url = "Data/JsonData.json";

  const [error, setError] = useState<any>("");
  const [data, setData] = useState<JsonResponse | null>(null);

  const getTheData = async () => {
    const response: { data: JsonResponse; error?: any } = await getData(url);

    setError(response.error);
    setData(response.data);
  };

  useEffect(() => {
    getTheData();
  }, []);

  if (!data) {
    return <div>Nope</div>;
  }

  const removeSidebarLink = (id: number) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  const clearData = () => {
    setData([]);
  };

  if (error)
    return (
      <div>
        <h2> {error} </h2>
        <Button link="/" title="Landing Page" />
      </div>
    );

  if (data.length === 0)
    return (
      <>
        <h2>Access to date, but there is none. </h2>
        <ButtonNoLink text="Refresh Data" onClick={() => getTheData()} />
      </>
    );
  return (
    <>
      <HelpComponent
        data={data}
        removeSidebarLink={removeSidebarLink}
        clearData={clearData}
      />
    </>
  );
}

export default Help;
