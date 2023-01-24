interface IRadioList {
  label: string;
  name: string;
  value: string;
  id: number;
}

interface ISwitchData {
  name: string;
  labelBefore: string;
  labelAfter: string;
}

const radioList: IRadioList[] = [
  {
    label: "Оклад за месяц",
    name: "salary",
    value: "salary_per_month",
    id: 1,
  },
  {
    label: "МРОТ",
    name: "salary",
    value: "min_salary",
    id: 2,
  },
  {
    label: "Оплата за день",
    name: "salary",
    value: "salary_per_day",
    id: 3,
  },
  {
    label: "Оклад за час",
    name: "salary",
    value: "salary_per_hour",
    id: 4,
  },
];

const switchData: ISwitchData = {
  name: "isTaxes",
  labelBefore: "Указать с НДФЛ",
  labelAfter: "Без НДФЛ",
};

export { radioList, switchData };
