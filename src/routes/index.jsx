import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ArticleList from "@/components/ArticleList/ArticleList";
import LoginPage from "@/pages/LoginPage";
import ProtectedRoute from "@/components/ProtectedRoute";

const routerConfig = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  }
};

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <ArticleList />,
      },
      {
        path: "feed/:feedId",
        element: <ArticleList />
      },
      {
        path: "feed/:feedId/article/:articleId",
        element: <ArticleList />
      },
      {
        path: "category/:categoryId",
        element: <ArticleList />
      },
      {
        path: "category/:categoryId/article/:articleId",
        element: <ArticleList />
      },
      {
        path: "article/:articleId",
        element: <ArticleList />
      }
    ],
  },
], routerConfig);