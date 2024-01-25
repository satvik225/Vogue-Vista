import React from "react";
import { Box } from "@chakra-ui/react";
import SimpleSidebar from "../Components/Sidebar";
import Productheader from "../Components/Shoes/Productheader";
import Sidebar2 from "../Components/Shoes/Sidebar2";

import ShoesProducts from "./../Components/Shoes/ShoesProducts";

const ProductPage = () => {
  return (
    <Box>
      <Productheader />
      <Box display="flex" mt={5}>
        {/* <Box> */}
        <Sidebar2 />
        {/* </Box> */}
        <Box>
          <ShoesProducts />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
