import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { OrderProvider } from "./contexts/OrderContextProvider";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrderProvider>
          <Router />
        </OrderProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
