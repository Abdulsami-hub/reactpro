import { Container } from "@mantine/core";
import React from "react";
import { Link } from "react-router";

function Create() {
  return (
    <div>
      <Container size={"lg"}>
        <Link to="/">show Post Page</Link>
        <h1>This is Post Creation Page</h1>
      </Container>
    </div>
  );
}

export default Create;
