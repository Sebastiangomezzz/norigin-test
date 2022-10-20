import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children }) => {
  return (
    <div style={{padding:0}}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
