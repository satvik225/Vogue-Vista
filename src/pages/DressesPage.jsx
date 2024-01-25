import { Box } from "@chakra-ui/react";
import React from "react";
import Dresses from "../Components/Dresses/Dresses";
import DressesHeader from "../Components/Dresses/DressesHeader";
import SidebarD from "../Components/Dresses/SidebarD";

const DressesPage = () => {
  return (
    <Box>
      <DressesHeader />
      <Box display="flex" mt={5}>
        <SidebarD />

        {/* <SimpleSidebar /> */}

        <Box>
          <Dresses />
        </Box>
      </Box>
    </Box>
  );
};

export default DressesPage;
