import { createContext, useContext, useEffect, useState } from "react";
import { azuraDataRequest, monitorDataRequest } from "../api/monitorMetadata";

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [monitorData, setMonitorData] = useState(null);
  const [radioData, setRadioData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const monitor = (await monitorDataRequest()).data;
      const radio = (await azuraDataRequest()).data;
      // console.log("1) monitor ->", monitor);

      setMonitorData(monitor);
      setRadioData(radio);
    };

    fetchData();
    const intervalId = setInterval(fetchData, 10000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <DataContext.Provider value={{ monitorData, radioData }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
