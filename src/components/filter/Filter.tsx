import React, { useEffect, useState } from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { radioList, switchData } from "../../common/mock/filterData";

import { calculateSalary } from "../../helpers/calculateSalary";
import { ICalculatedSalary } from "../../helpers/types";

import { InfoCard } from "../../UI/cards";
import { CheckButton, Input, Switch } from "../../UI/form";

import "./Filter.scss";
import { FilterFormData } from "./types";
import {
  makeSelectIsTaxes,
  makeSelectSalary,
  makeSelectSalaryAmount,
} from "../../store/selectors";

const defaultSalaryData: ICalculatedSalary = {
  employeeSalary: 0,
  taxesFromSalary: 0,
  employeeRecieve: 0,
};

const Filter: React.FC<InjectedFormProps<FilterFormData>> = () => {
  const [salaryData, setSalaryData] = useState<null | ICalculatedSalary>(
    defaultSalaryData
  );
  const [keepTooltipVisible, setKeepTooltipVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const salary = useSelector(makeSelectSalary);
  const isTaxes = useSelector(makeSelectIsTaxes);
  const salaryAmount = useSelector(makeSelectSalaryAmount);

  const showInfo = salary === "salary_per_month" && salaryAmount;
  const isInputFilter = !(salary === "min_salary");
  const labelAfterInput =
    salary === "salary_per_day"
      ? "в день"
      : salary === "salary_per_hour"
      ? "в час"
      : "";

  const tooltip = (
    <Tooltip id="tooltip">
      <div className="tooltip__text py-2">
        МРОТ - минимальный размер оплаты труда. Разный для разных регионов.
      </div>
    </Tooltip>
  );

  useEffect(() => {
    if (showInfo && salaryAmount) {
      setSalaryData(calculateSalary(isTaxes, Number(salaryAmount)));
    }
  }, [isTaxes, showInfo, salaryAmount]);

  return (
    <div>
      <div className="container shadow min-vh-100 py-2">
        <div className="row">
          <div className="col-12">
            <Form>
              <span className="text-muted fw-bold">Сумма</span>

              <div className="m-3">
                {radioList.map((radio) => (
                  <div key={radio.id} className="d-flex align-items-center">
                    <Field
                      type="radio"
                      name={radio.name}
                      value={radio.value}
                      defaultChecked={radio.value === salary}
                      props={{ ...radio, type: "radio" }}
                      component={CheckButton}
                    />
                    {radio.value === "min_salary" && (
                      <OverlayTrigger
                        placement="bottom-start"
                        overlay={tooltip}
                        show={keepTooltipVisible || showTooltip}
                      >
                        <div
                          role="button"
                          className="align-self-start rounded-full mx-2 tooltip__button"
                          onMouseEnter={() => setShowTooltip(true)}
                          onMouseLeave={() => setShowTooltip(false)}
                          onClick={() =>
                            setKeepTooltipVisible(!keepTooltipVisible)
                          }
                        >
                          {keepTooltipVisible ? <>&#x2715;</> : <>&#33;</>}
                        </div>
                      </OverlayTrigger>
                    )}
                  </div>
                ))}
                {isInputFilter && (
                  <>
                    <div className="m-3">
                      <Field
                        name={switchData.name}
                        props={{
                          type: "switch",
                          name: switchData.name,
                          labelBefore: switchData.labelBefore,
                          labelAfter: switchData.labelAfter,
                          defaultChecked: isTaxes,
                        }}
                        component={Switch}
                      />
                    </div>
                    <div className="input__container">
                      <Field
                        name="salary_amount"
                        props={{
                          type: "number",
                          min: 0,
                          name: "salary_amount",
                          labelAfter: <>&#8381; {labelAfterInput}</>,
                        }}
                        component={Input}
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="info-card__container">
                {showInfo && (
                  <InfoCard>
                    <div>
                      <p>
                        <span className="fw-bold">
                          {salaryData?.employeeRecieve} &#8381;
                        </span>{" "}
                        сотрудник будет получать на руки
                      </p>
                      <p>
                        <span className="fw-bold">
                          {salaryData?.taxesFromSalary} &#8381;
                        </span>{" "}
                        НДФЛ, 13% от оклада
                      </p>
                      <p>
                        <span className="fw-bold">
                          {salaryData?.employeeSalary} &#8381;
                        </span>{" "}
                        за сотрудника в месяц
                      </p>
                    </div>
                  </InfoCard>
                )}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reduxForm<FilterFormData>({
  form: "filter",
  enableReinitialize: true,
})(Filter);
