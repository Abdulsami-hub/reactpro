import { ColorSchemeScript, Container, MantineProvider } from "@mantine/core";
import Posts from "./Views/Posts";
import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./Views/Create";
import PostDetails from "./Views/Details.Post";
const queryClient = new QueryClient();
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Posts />,
    },
    {
      path: "/createPost",
      element: <Create />,
    },
    {
      path: "posts/:id",
      element: <PostDetails />,
    },
  ]);
  return (
    <MantineProvider withgobaleStyles withNormalSize defaultColorScheme="light">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <Posts />
        </RouterProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
