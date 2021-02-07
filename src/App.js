/* eslint-disable import/no-anonymous-default-export */
import { Box, ChakraProvider } from "@chakra-ui/react";
import StockTable from "./components/StockTable";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { toast } from "react-toastify";
import "./App.css";
import moment from "moment";
import "moment/locale/tr";

function App() {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(null);

  useEffect(() => {
    loadData();

    setInterval(() => {
      loadData();
    }, 15000);
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch("http://localhost:3000/stocks");
      const stockData = await res.json();
      setStockData(stockData);
      setTime(moment().calendar());
      setLoading(false);
    } catch (err) {
      toast.error(err);
    }
  };

  if (loading)
    return (
      <Box
        minHeight="100vh"
        minWidth="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <PacmanLoader size={75} color={"#0080FF"} />
      </Box>
    );

  return (
    <Box className="sony-bg">
      <Header time={time} />
      <Box alignItems="center">
        <StockTable data={stockData} />
      </Box>
    </Box>
  );
}

export default () => (
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
