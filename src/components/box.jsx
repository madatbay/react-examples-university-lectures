import { useTheme } from "../providers/theme-provider";

const Box = () => {
  const { theme } = useTheme();
  return (
    <div className={`box ${theme}`}>
      <h3>Theme is {theme}</h3>
    </div>
  );
};
export default Box;
