import { Flex, Spacer, Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = ({ colorMode, toggleColorMode }) => {
  return (
    <Flex as="nav" p={4} bg={colorMode === "light" ? "gray.100" : "gray.900"} color={colorMode === "light" ? "black" : "white"}>
      <Link to="/">Home</Link>
      <Spacer />
      <Link to="/add-post">Add Post</Link>
      <Spacer />
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark Mode" : "Light Mode"}
      </Button>
    </Flex>
  );
};

export default Navbar;