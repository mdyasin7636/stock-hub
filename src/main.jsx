import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
    <Toaster />
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
