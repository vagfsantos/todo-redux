import thunk from "redux-thunk";
import logger from "./logger";
import checker from "./checker";

import { applyMiddleware } from "redux";

export default applyMiddleware(thunk, checker, logger);
