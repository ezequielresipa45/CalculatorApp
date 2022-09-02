import React, { useState } from "react";
import NumericButton from "../NumericButton/NumericButton";
import OperationsButton from "../OperationsButton/OperationsButton";
import ScreenCalculator from "../ScreenCalculator/ScreenCalculator";
import "./ContainerCalculator.css";
import { evaluate } from "mathjs";

export default function Card() {
  const elements = [
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    ".",
    "0",
    "+/-",
  ];

  const [number, setNumber] = useState("");

  const clear = () => setNumber("");

  const add = (child) => setNumber(number + child);

  const igual = () => setNumber(evaluate(number));

  function info(elEvento) {
    let evento = elEvento || window.event;
    let k = evento.keyCode; //número de código de la tecla.

    switch (true) {
      case k > 95 && k < 106:
        let p = k - 96;
        p = String(p);
        add(p);
        break;

      case k === 46 || k === 8 || k === 27:
        clear();
        break;

      case k === 107:
        add("+");
        break;

      case k === 109:
        add("-");
        break;

      case k === 111:
        add("/");
        break;

      case k === 106:
        add("*");
        break;

      case k === 110 || k === 190:
        add(".");
        break;

      case k === 53:
        add("%");
        break;

      case k === 32 || k === 13:
        setNumber(evaluate(number));
        break;

       default:
        break; 
    }
  }

  document.onkeydown = info;

  return (
    <div className="container-calculator">
      <div className="containerScreen">
        <ScreenCalculator> {number === "" ? 0 : number} </ScreenCalculator>
      </div>
      <div className="containerNumericAndOperationsButton">
        <div className="container-operationsButton-row">
          <OperationsButton funct={clear} colorFont={"red"}>
            {" "}
            C{" "}
          </OperationsButton>
          <OperationsButton> () </OperationsButton>
          <OperationsButton funct={add}> % </OperationsButton>
          <OperationsButton funct={add}> / </OperationsButton>
        </div>
        <div className="container-numericAndOperationsChildrens">
          <div className="container-numeric-button">
            {elements.map((element) => (
              <NumericButton state={number} setState={setNumber} key={element}>
                {element}
              </NumericButton>
            ))}
          </div>
          <div className="container-operationsButton-column">
            <OperationsButton funct={add}> * </OperationsButton>
            <OperationsButton funct={add}> - </OperationsButton>
            <OperationsButton funct={add}> + </OperationsButton>
            <OperationsButton
              bgColor={"#3978ff"}
              colorFont={"#fff"}
              funct={igual}
            >
              {" "}
              ={" "}
            </OperationsButton>
          </div>
        </div>
      </div>
    </div>
  );
}
