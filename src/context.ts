
import { createContext } from "react";
import { APP_INITIAL_STATE } from "./constants";

  const AppContext = createContext({
    ...APP_INITIAL_STATE,
    handlePasswordLengthChange: () => {},
  });
 
export default AppContext
