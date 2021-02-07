/* eslint-disable import/no-anonymous-default-export */
import { Box, ChakraProvider } from "@chakra-ui/react";
import StockTable from "./components/StockTable";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Box className="sony-bg">
      <Header />
      <Box alignItems="center">
        <StockTable />
      </Box>
    </Box>
  );
}

export default () => (
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
