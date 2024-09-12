import { useState } from "react";
import { Box, Button, Text, Input, useToast, Textarea } from "@chakra-ui/react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode, input);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box w="50%">
      <Box>
        <Button
          variant="outline"
          colorScheme="blue"
          mb={8}
          isLoading={isLoading}
          onClick={runCode}
        >
          Run Code
        </Button>
        <Text mb={2} fontSize="lg">
          Output
        </Text>
        <Box
          height="32vh"
          p={2}
          color={isError ? "red.400" : ""}
          border="1px solid"
          borderRadius={4}
          borderColor={isError ? "red.500" : "#333"}
          overflowY="auto" 
        >
          {output
            ? output.map((line, i) => <Text key={i}>{line}</Text>)
            : 'Click "Run Code" to see the output here'}
        </Box>
      </Box>
      <Box mb={4}>
        <Text mb={2} fontSize="lg">
          Input
        </Text>
        <Textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Enter input here"
          height="32vh"
          p={2}
          border="1px solid"
          borderRadius={4}
          borderColor="#333"
          resize="none"
        />
      </Box>
    </Box>
  );
};

export default Output;