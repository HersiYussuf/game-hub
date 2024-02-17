import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  // Destructuring values from useColorMode hook
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      {/* Switch component controlled by color mode */}
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />

      {/* Text indicating Dark Mode */}
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
