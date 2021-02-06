import { Table, Thead, Tbody, Tr, Th, Td, Link } from "@chakra-ui/react";
import { useState } from "react";
import { Badge } from "@chakra-ui/react";
import { STATUS_TEXT } from "../utils/constants";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import useSound from 'use-sound';

const StockTable = () => {
  const [colorStatus, setColorStatus] = useState(null);


  return (
    <Table variant="simple" className="table">
      <Thead>
        <Tr>
          <Th>Mağaza</Th>
          <Th>Ürün</Th>
          <Th>Link</Th>
          <Th>Stok Durumu</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Media Markt</Td>
          <Td>Blu-Ray Versiyon</Td>
          <Td>
            <Link
              href={
                "https://www.vatanbilgisayar.com/sony-playstation-5-oyun-konsolu.html"
              }
              color="teal.500"
            >
              Mağaza Sayfasına Git <ExternalLinkIcon mx="2px" />
            </Link>{" "}
          </Td>
          <Td>
            <Badge className="badge" colorScheme="gray">
              {STATUS_TEXT.NOT_LISTED}
            </Badge>
          </Td>
        </Tr>
        <Tr>
          <Td>Media Markt</Td>
          <Td>Digital Versiyon</Td>
          <Td>
            <Link
              href={
                "https://www.vatanbilgisayar.com/sony-playstation-5-oyun-konsolu.html"
              }
              color="teal.500"
            >
              Mağaza Sayfasına Git <ExternalLinkIcon mx="2px" />
            </Link>{" "}
          </Td>
          <Td>
            <Badge className="badge" colorScheme="green">
              {STATUS_TEXT.ON_SALE}
            </Badge>
          </Td>
        </Tr>
        <Tr>
          <Td>Teknosa</Td>
          <Td>Blu-Ray Versiyon</Td>
          <Td>
            <Link
              href={
                "https://www.vatanbilgisayar.com/sony-playstation-5-oyun-konsolu.html"
              }
              color="teal.500"
            >
              Mağaza Sayfasına Git <ExternalLinkIcon mx="2px" />
            </Link>{" "}
          </Td>
          <Td>
            <Badge className="badge" colorScheme="yellow">
              {STATUS_TEXT.UNKNOWN}
            </Badge>
          </Td>
        </Tr>
        <Tr>
          <Td>Teknosa</Td>
          <Td>Digital Versiyon</Td>
          <Td>
            <Link
              href={
                "https://www.vatanbilgisayar.com/sony-playstation-5-oyun-konsolu.html"
              }
              color="teal.500"
            >
              Mağaza Sayfasına Git <ExternalLinkIcon mx="2px" />
            </Link>{" "}
          </Td>
          <Td>
            <Badge className="badge" colorScheme="red">
              {STATUS_TEXT.SOLD_OUT}
            </Badge>
          </Td>
        </Tr>
        <Tr>
          <Td>Vatan</Td>
          <Td>Blu-Ray Versiyon</Td>
          <Td>
            <Link
              href={
                "https://www.vatanbilgisayar.com/sony-playstation-5-oyun-konsolu.html"
              }
              color="teal.500"
            >
              Mağaza Sayfasına Git <ExternalLinkIcon mx="2px" />
            </Link>{" "}
          </Td>
          <Td>
            <Badge className="badge" colorScheme="gray">
              {STATUS_TEXT.NOT_LISTED}
            </Badge>
          </Td>
        </Tr>
        <Tr>
          <Td>Vatan</Td>
          <Td>Digital Versiyon</Td>
          <Td>
            <Link
              href={
                "https://www.vatanbilgisayar.com/sony-playstation-5-oyun-konsolu.html"
              }
              color="teal.500"
            >
              Mağaza Sayfasına Git <ExternalLinkIcon mx="2px" />
            </Link>{" "}
          </Td>
          <Td>
            <Badge className="badge" colorScheme="gray">
              {STATUS_TEXT.NOT_LISTED}
            </Badge>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default StockTable;
