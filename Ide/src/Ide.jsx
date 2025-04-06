import React from "react";
import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

const Ide = () => {
  return (
    <>
      {" "}
      <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
        {/* <div style={{ marginTop: "260px" }}></div> */}
        <br />
        <CodeEditor />
      </Box>
    </>
  );
};

export default Ide;
