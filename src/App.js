/* eslint-disable import/no-anonymous-default-export */
import { Box, ChakraProvider } from "@chakra-ui/react";
import StockTable from "./components/StockTable";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";

function App() {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    try {
      setInterval(async () => {
        const res = await fetch("");
        const stockData = await res.json();
        setStockData(stockData);
        setLoading(false);
      }, 15000);
    } catch (err) {
      toast.error(err);
    }
  };

  // if (loading) return <CircleLoader  size={100} />;

  return (
    <Box className="sony-bg">
      <Header />
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
