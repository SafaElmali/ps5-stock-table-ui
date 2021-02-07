/* eslint-disable import/no-anonymous-default-export */
import { Box, ChakraProvider } from "@chakra-ui/react";
import StockTable from "./components/StockTable";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import moment from "moment";
import 'moment/locale/tr';

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

  if (loading) return <CircleLoader size={100} />;

  return (
    <Box className="sony-bg">
      <Header time={time} />
      <Box alignItems="center">
        <StockTable data={stockData} />
      </Box>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Box>
  );
}

export default () => (
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
