import { Box, Button, Flex, Heading, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />}
                fontStyle="20"
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.600" width="8" >
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Willian Lins</Text>
                    <Text fontSize="sm" color="gray.300">Willianlinsa@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Maio de 2022</Td>}
                <Td>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Willian Lins</Text>
                    <Text fontSize="sm" color="gray.300">Willianlinsa@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Maio de 2022</Td>}
                <Td>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Willian Lins</Text>
                    <Text fontSize="sm" color="gray.300">Willianlinsa@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Maio de 2022</Td>}
                <Td>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
