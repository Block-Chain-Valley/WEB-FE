import { Link } from "react-router-dom";

const Main = () => {

  return (
    <div>
      Main Page
      <Link to="/voting">Vote page</Link>
    </div>
  );
};

export default Main;