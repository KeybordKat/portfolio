// App.tsx
import "./App.css"; // Import global CSS
import Message from "./assets/Message";
import { HelmetProvider } from 'react-helmet-async';

function App() {
    return (
        <HelmetProvider>
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100vh",
                padding: "0 50px",
            }}
        >
          <div style={{ flexGrow: 1, paddingRight: "100px"}}>
            <h1><Message /></h1> 
          </div>
        </div>
        </HelmetProvider>
    );
}

export default App;
