import { useEffect } from "react";
import { azuraDataRequest, monitorDataRequest } from "../api/monitorMetadata";

function ApiTest() {
  useEffect(() => {
    const fetchData = async () => {
      const monitorData = (await monitorDataRequest()).data;
      const radioData = (await azuraDataRequest()).data;
      console.log(" 1) monitor ->", monitorData);
      console.log("2) azura --> ", radioData);
    };
    const intervalId = setInterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);
  return <div>Testing GET routes</div>;
}

export default ApiTest;
