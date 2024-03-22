// App.tsx (modifications)
import RootLayout from "./Layout";
import RouteManager from "./routes/RouteManager";

const App = () => {
  return (
    <>
      {isHomePage() ? ( 
        <RootLayout>
          <RouteManager />
        </RootLayout>
      ) : (
        <RouteManager />
      )}
    </>
  );
};

export default App;

function isHomePage() {
  return window.location.pathname === "/";
}
