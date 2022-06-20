import { combineReducers } from "redux";
import { homeBuildReducer } from "./reducers/homeBuildReducer";
import { BannerinfoReducer } from "./reducers/bannerReducer";
import { homeAboutReducer } from "./reducers/homeAboutReducer";
import { partnersReducer } from "./reducers/partnerReducer";
import { projectReducer } from "./reducers/projectReducer";
import { newsReducer } from "./reducers/newsReducer";
import { ourworkReducer } from "./reducers/ourWorkReducer";
import { aboutReducer } from "./reducers/aboutReducer";
import { downloadReducer } from "./reducers/downloadReducer";
export const rootReducer = combineReducers({
  homeBuildReducer,
  BannerinfoReducer,
  homeAboutReducer,
  partnersReducer,
  projectReducer,
  newsReducer,
  ourworkReducer,
  aboutReducer,
  downloadReducer,
});
