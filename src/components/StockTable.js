import { Table, Thead, Tbody, Tr, Th, Td, Link } from "@chakra-ui/react";
// import { useState } from "react";
import { Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { checkDeviceType, checkStatusText, checkStatusColor } from "../utils";
// import useSound from 'use-sound';

const StockTable = ({ data = [] }) => {
  console.log(data);
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
        {data.length
          ? data.map((item) => {
              const version = checkDeviceType(item.isDigital);
              const color = checkStatusColor(item.status);
              const status = checkStatusText(item.status);
              return (
                <Tr>
                  <Td>{item.site}</Td>
                  <Td>{version}</Td>
                  <Td>
                    {" "}
                    <Link isExternal href={item.link} color="teal.500">
                      Mağaza Sayfasına Git <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                  <Td>
                    <Badge className="badge" colorScheme={color}>
                      {status}
                    </Badge>
                  </Td>
                </Tr>
              );
            })
          : null}
      </Tbody>
    </Table>
  );
};

export default StockTable;
