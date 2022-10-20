import "./App.css";
import { EpgViewport } from "./components/epg/EpgViewport";
import { Layout } from './components/layout/Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <EpgViewport />
    </Layout>
  );
};

export default App;
