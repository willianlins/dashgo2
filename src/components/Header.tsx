import { Flex, Text } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1400}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text>
        dashgo
      </Text>
    </Flex>
  );
}
