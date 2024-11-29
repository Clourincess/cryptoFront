import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./theme";
import RootStore from "./store/root_store";
import { RootStoreContext } from "./store/store_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraBaseProvider theme={theme}>
    <RootStoreContext.Provider value={new RootStore()}>
      <App />
    </RootStoreContext.Provider>
  </ChakraBaseProvider>
);
