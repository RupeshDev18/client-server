import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/contacts").then((response) => {
      setDataList(response.data);
    });
  }, []);
  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       const data = await fetch("/api/contacts", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       if (!data.ok) {
  //         throw new Error(`HTTP error! Status: ${data.status}`);
  //       }
  //       console.log(data);
  //       const res = await data.json();
  //       setDataList(res);
  //     };
  //     fetchData();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);
  return (
    <>
      <ul className="container">
        {dataList.map((data) => (
          <h5 key={data.id}>
            {data?.firstName} {data.lastName}
          </h5>
        ))}
      </ul>
    </>
  );
}

export default App;
