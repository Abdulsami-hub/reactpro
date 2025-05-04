import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useNavigate, useParams } from "react-router";
import { postDetails } from "../Utils/PostData";
import { Alert, LoadingOverlay, Card, Table, Button } from "@mantine/core";

function PostDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["fetch-post", id],
    queryFn: () => postDetails(id),
  });
  if (isError) {
    return (
      <Card>
        <Alert>Erro Accoured !</Alert>
      </Card>
    );
  }
  if (isLoading) {
    return <LoadingOverlay visible />;
  }
  return (
    <>
      <Button variant="outline" onClick={() => navigate(-1)}>
        Back
      </Button>
      <Card>
        <Table withTableBorder striped>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Description</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>{data?.description}</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Card>
    </>
  );
}

export default PostDetails;
