import {
  Alert,
  LoadingOverlay,
  Pagination,
  Table,
  Center,
  Select,
  Card,
  Container,
  Title,
  CheckIcon,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { callapi } from "../Utils/PostData";
import { Link } from "react-router";
import { usePaginationParams } from "../hooks/UsePaginationParams";
function Posts() {
  const { page, setPage, limit, setLimit } = usePaginationParams();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["fetch-data", page, limit],
    queryFn: () => callapi(page, limit),
  });

  if (isError) {
    return (
      <Card>
        <Alert>Error Accoured !</Alert>
      </Card>
    );
  }
  if (isLoading) {
    return <LoadingOverlay visible />;
  }
  const tableRow = data?.data?.map((element) => {
    return (
      <Table.Tr key={element.id}>
        <Table.Td>{element.id}</Table.Td>
        <Table.Td>{element.title}</Table.Td>
        <Table.Td>{element.sub_title}</Table.Td>
        <Table.Td>
          <Link to={`/posts/${element.id}`}>More</Link>
        </Table.Td>
      </Table.Tr>
    );
  });
  return (
    <>
      <Container>
        <Link to="/createPost">Create Post Page</Link>
        <Title>Post Data</Title>
        <Table variant="virtical" striped withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>#</Table.Th>
              <Table.Th>Title</Table.Th>
              <Table.Th>Sub title</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{tableRow}</Table.Tbody>
        </Table>
        <Center mb={20}>
          <Select
            placeholder="5"
            value={limit}
            onChange={setLimit}
            data={[
              {
                value: "5",
              },
              {
                value: "10",
              },
              {
                value: "20",
              },
              {
                value: "30",
              },
            ]}
            mt={20}
          />
          <Pagination
            value={page}
            onChange={setPage}
            total={data?.meta?.last_page}
            mt={20}
          />
        </Center>
      </Container>
    </>
  );
}

export default Posts;
