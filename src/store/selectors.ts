import { formValueSelector } from "redux-form";
import { AppState } from "./store";

const selector = formValueSelector("filter");

const makeSelectSalary = (state: AppState) => {
  const result = selector(state, "salary");
  return result ?? "salary_per_month";
};
const makeSelectIsTaxes = (state: AppState) => {
  const result = selector(state, "isTaxes");
  return result ?? true;
};
const makeSelectSalaryAmount = (state: AppState) =>
  selector(state, "salary_amount");

export { makeSelectSalary, makeSelectIsTaxes, makeSelectSalaryAmount };
