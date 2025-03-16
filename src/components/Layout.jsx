import { Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div style={{ Width: 1480, margin: "0 auto", padding: "0 16px" }}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
