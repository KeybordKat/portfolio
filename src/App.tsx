// App.tsx
import Message from "./assets/Message";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <HelmetProvider>
      <div
        style={{
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <ListGroup />
      </div>
    </HelmetProvider>
  );
}

export default App;
