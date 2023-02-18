import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import ModeContext from "./contexts/ModeContext";
import router from "./routes/Routes";
import themeDark from "./themes/themeDark";
import themeLight from "./themes/themeLight";

function App() {
  const { darkMode } = useContext(ModeContext);

  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
