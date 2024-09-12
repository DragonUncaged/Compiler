import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/Editor";

function App() {
  return (
    <Box minH="100vh" bg="#242323" color="gray.500" px={6} py={6}>
      <CodeEditor />
    </Box>
  );
}

export default App;
