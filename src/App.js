import { SiteProvider } from "./services/context/site-context";
import Page from "./pages/Page";

function App() {
  
  return (
      <SiteProvider>
        <Page />
      </SiteProvider>
  );
}

export default App;
