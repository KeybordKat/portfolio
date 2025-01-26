// App.tsx
import "./App.css"; // Import global CSS
import Moon from "./assets/moon";
import Message from "./assets/Message";

function App() {
    return (
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
            <Moon style={{ flexShrink: 4}} />
        </div>
    );
}

export default App;
