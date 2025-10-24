import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
// import {Provider} from "react-redux";
// import {store} from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Provider store={store}><App /></Provider> */}
    <KindeProvider
      clientId="e64b0f728627450894b07737548d7df8"
      domain="https://davidjedwebdesign.kinde.com"
      redirectUri={
        process.env.NODE_ENV === "production"
          ? "https://my-todo-app-ochre-three.vercel.app"
          : "http://localhost:5173"
      }
      logoutUri={
        process.env.NODE_ENV === "production"
          ? "https://my-todo-app-ochre-three.vercel.app"
          : "http://localhost:5173"
      }
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </StrictMode>
);
