import Box from "./components/box";
import ToggleThemeButton from "./components/toggle-theme-button";

function App() {
  return (
    <div className="container">
      <div className="grid">
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
      <div className="container-footer">
        <ToggleThemeButton />
      </div>
    </div>
  );
}

export default App;
