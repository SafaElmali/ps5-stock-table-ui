import { Box, ChakraProvider, Flex, Image, Text } from "@chakra-ui/react";
import StockTable from "./components/StockTable";
import "./App.css";
import Bell from "./assets/images/bell.svg";

function App() {
  return (
    <Box className="sony-bg">
      <Box className="header">
        <Flex className="header__title">
          <Image
            src="https://live.staticflickr.com/65535/50587242611_30dab00e0e_o.png"
            width={100}
            height={100}
            className="astro"
          />
          <Text className="header-font" mr={4}>
            PS5
          </Text>
          <Text fontFamily="sans-serif" fontWeight="bold">
            Stok Durumu
          </Text>
          <Image
            src="https://live.staticflickr.com/65535/50587242611_30dab00e0e_o.png"
            width={100}
            height={100}
            className="astro"
          />
        </Flex>
        <Box
          className="header__subtitle"
          textAlign="center"
          flexDirection="column"
        >
          <Text>Aşağıdaki tablodan stok durumunu takip edebilirsiniz</Text>
          <Flex className="subtitle__flex">
            <Text>
              Herhangi bir mağazada stok olması durumunda zil çalacaktır.
            </Text>
            <Image ml={4} src={Bell} width={"30px"} height={"30px"} />
          </Flex>
        </Box>
      </Box>

      <Box alignItems="center">
        <StockTable />;
      </Box>
    </Box>
  );
}

export default () => (
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
