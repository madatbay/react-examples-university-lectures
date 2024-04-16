import { useTheme } from "../providers/theme-provider";

const ToggleThemeButton = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>ToggleThemeButton</button>;
};
export default ToggleThemeButton;
