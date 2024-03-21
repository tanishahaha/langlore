import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

interface IRootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="w-screen flex flex-col flex-wrap text-white backgroun">
      {
        window.location.pathname !== '/login' && window.location.pathname !== '/signup' && <Navbar />
      } 
        
      <main className="min-h-screen text-black">{children}</main>

      {
        window.location.pathname !== '/login' && window.location.pathname !== '/signup' && <Footer />
      }
      </div>
    </>
  );
};

export default RootLayout;
