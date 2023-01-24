import { ICalculatedSalary } from "./types";

function calculateSalary(
  taxes: boolean,
  salaryAmount: number
): ICalculatedSalary {
  let employeeSalary, taxesFromSalary, employeeRecieve;
  if (taxes) {
    employeeRecieve = salaryAmount;
    taxesFromSalary = (salaryAmount / 87) * 13;
    employeeSalary = employeeRecieve + taxesFromSalary;
  } else {
    taxesFromSalary = (salaryAmount / 100) * 13;
    employeeSalary = salaryAmount;
    employeeRecieve = employeeSalary - taxesFromSalary;
  }

  return {
    employeeSalary: splitCurrencyNumbers(Math.round(employeeSalary)),
    taxesFromSalary: splitCurrencyNumbers(Math.round(taxesFromSalary)),
    employeeRecieve: splitCurrencyNumbers(Math.round(employeeRecieve)),
  };
}

function splitCurrencyNumbers(number: string | number): string {
  return number.toLocaleString().replace(/,/g, " ");
}

export { calculateSalary };
