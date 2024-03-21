// App.tsx (modifications)
import React from "react";
import RootLayout from "./Layout";
import RouteManager from "./routes/RouteManager";

const App = () => {
  return (
    <>
      {isHomePage() ? ( // Conditional rendering based on URL path
        <RootLayout>
          <RouteManager />
        </RootLayout>
      ) : (
        <RouteManager /> // Only render RouteManager for non-home routes
      )}
    </>
  );
};

export default App;

// Helper function to check for home path
function isHomePage() {
  return window.location.pathname === "/";
}

// RouteManager.tsx (no changes)
// routesData.tsx (no changes)
