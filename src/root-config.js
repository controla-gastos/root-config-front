import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "navbar",
  () => System.import("navbar"),
  isActive.navbar
);

registerApplication(
  "income",
  () => System.import("income"),
  isActive.income
);

registerApplication(
  "transactions",
  () => System.import("transactions"),
  isActive.transactions
);

start();
