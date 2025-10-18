import { useState } from "react";

type ButtonConfig = { id: string; label: string };
const buttons: ButtonConfig[] = [
  { id: "clear", label: "C" },
  { id: "backspace", label: "←" },
  { id: "percent", label: "%" },
  { id: "divide", label: "/" },

  { id: "seven", label: "7" },
  { id: "eight", label: "8" },
  { id: "nine", label: "9" },
  { id: "multiply", label: "*" },

  { id: "four", label: "4" },
  { id: "five", label: "5" },
  { id: "six", label: "6" },
  { id: "subtract", label: "-" },

  { id: "one", label: "1" },
  { id: "two", label: "2" },
  { id: "three", label: "3" },
  { id: "add", label: "+" },

  { id: "zero", label: "0" },
  { id: "dot", label: "." },
  { id: "equal", label: "=" },
];

export default function Calc() {
  // 현재 입력값 또는 결과값
  const [display, setDisplay] = useState<string>("0");
  // 첫번째 피연산자
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  // 두번째 피연산자 입력대기상태 -> 연산자 입력하면 true
  const [waitingForSecond, setWaitingForSecond] = useState<boolean>(false);
  // 현재 선택된 연산자
  const [operator, setOperator] = useState<string | null>(null);
  // 오류 메시지 상태 (예: 0으로 나누기 등)
  const [error, setError] = useState<string | null>(null);

  // 오류상태를 초기화
  const resetError = () => setError(null);

  // 전체상태를 초기화
  const clearAll = () => {
    setDisplay("0");
    setFirstOperand(null);
    setWaitingForSecond(false);
    setOperator(null);
    setError(null);
  };

  // 숫자 입력 처리. 대기 상태면 새로 시작, 아니면 뒤에 붙임.
  const inputDigit = (digit: string) => {
    if (error) resetError();
    if (waitingForSecond) {
      setDisplay(digit);
      setWaitingForSecond(false);
      return;
    }
    setDisplay((prev) => (prev === "0" ? digit : prev + digit));
  };

  // 소수점 입력 처리. 이미 소수점이 있으면 무시.
  const inputDot = () => {
    if (error) resetError();
    if (waitingForSecond) {
      setDisplay("0.");
      setWaitingForSecond(false);
      return;
    }
    setDisplay((prev) => (prev.includes(".") ? prev : prev + "."));
  };

  // 마지막 한 글자 지우기. 한 글자만 남으면 0으로.
  const backspace = () => {
    if (error) {
      resetError();
      setDisplay("0");
      return;
    }
    setDisplay((prev) => {
      if (waitingForSecond) return prev;
      if (prev.length <= 1) return "0";
      return prev.slice(0, -1);
    });
  };

  // 현재 표시 값을 백분율로 변환 (ex. 12 -> 0.12)
  const percent = () => {
    if (error) resetError();
    setDisplay((prev) => {
      const n = Number(prev);
      if (Number.isNaN(n)) return prev;
      return String(n / 100);
    });
  };

  // 실제 사칙연산 수행. 0으로 나누기 시 에러 발생시켜 상위에서 처리.
  const performCalc = (a: number, b: number, op: string): number => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b === 0) throw new Error("0으로 나눌 수 없습니다");
        return a / b;
      default:
        return b;
    }
  };

  // 연산자 버튼 입력 처리
  // - 첫 연산자 입력 시: firstOperand 저장 후 두 번째 입력 대기
  // - 이후 연속 연산: 누적 계산 수행 후 결과를 다음 계산의 첫 피연산자로 유지
  const handleOperator = (nextOp: string) => {
    if (error) resetError();
    const inputValue = Number(display);
    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator && !waitingForSecond) {
      try {
        const result = performCalc(firstOperand, inputValue, operator);
        setFirstOperand(result);
        setDisplay(String(result));
      } catch (e: any) {
        setError(e?.message ?? "계산 오류");
        return;
      }
    }
    setWaitingForSecond(true);
    setOperator(nextOp);
  };

  // '=' 처리. 계산 완료 후 상태를 초기화하여 새로운 계산 시작 가능.
  const handleEqual = () => {
    if (operator === null || firstOperand === null) return;
    const inputValue = Number(display);
    try {
      const result = performCalc(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecond(false);
    } catch (e: any) {
      setError(e?.message ?? "계산 오류");
    }
  };

  // 버튼 라벨 기반으로 동작 라우팅
  const onButtonClick = (btn: ButtonConfig) => {
    const v = btn.label;
    if (/^[0-9]$/.test(v)) return inputDigit(v);
    if (v === ".") return inputDot();
    if (["+", "-", "*", "/"].includes(v)) return handleOperator(v);
    if (v === "=") return handleEqual();
    if (v === "C") return clearAll();
    if (v === "←") return backspace();
    if (v === "%") return percent();
  };

  return (
    <div className="border-l-2 border-r-2 border-zinc-100 p-4 rounded-xl/ mx-auto bg-white">
      {/* 표시 영역: 오류가 있으면 오류 메시지, 아니면 현재 값 */}
      <div className="p-4 text-right text-4xl min-h-[56px]">
        {error ? error : display}
      </div>

      {/* 버튼리스트 */}
      <ul
        className="grid grid-cols-4 gap-2 
        [&_button]:p-5
        [&_button]:rounded-lg
        "
      >
        {buttons.map((btn) => (
          <button
            key={btn.id}
            id={btn.id}
            className={`
              hover:opacity-50 transition
              ${
                btn.id === "clear"
                  ? "bg-red-500 text-white"
                  : btn.id === "backspace"
                  ? "bg-green-500 text-white"
                  : btn.id === "percent"
                  ? "bg-blue-500 text-white"
                  : "bg-zinc-100 "
              }
           `}
            onClick={() => onButtonClick(btn)}
          >
            {btn.label}
          </button>
        ))}
      </ul>
    </div>
  );
}
