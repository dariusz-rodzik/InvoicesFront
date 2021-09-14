import { useEffect, useState } from "react";
import axios from "axios";
import Invoice from "./Invoice";
import { IInvoiceData } from "../types/global";

const Explore = () => {
  const [data, setData] = useState<IInvoiceData[]>([]);

  useEffect(() => {
    axios
      .get<IInvoiceData[]>(
        "https://webapplication120210915002008.azurewebsites.net/api/invoice"
      )
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((res) => console.log(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {data.map((invoice, key) => (
        <Invoice key={key} props={invoice} />
      ))}
    </div>
  );
};
export default Explore;
