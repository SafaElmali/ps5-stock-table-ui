import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Bell from "../assets/images/bell.svg";
import Astro from "../assets/images/astro.png";

const Header = () => {
  return (
    <Box className="header">
      <Flex className="header__title">
        <Image src={Astro} width={100} height={100} className="astro" />
        <Text className="header-font" mr={4}>
          PS5
        </Text>
        <Text fontFamily="sans-serif" fontWeight="bold">
          Stok Durumu
        </Text>
        <Image src={Astro} width={100} height={100} className="astro" />
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
  );
};

export default Header;
