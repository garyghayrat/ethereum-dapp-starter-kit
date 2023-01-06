import { useState } from "react";

interface Props {
  inputName?: string;
}

export default function NumberInput({ inputName = "amount" }: Props) {
  const [amount, setAmount] = useState("");

  return (
    <>
      <div>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="xl:w-96 no-arrows block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="decimal"
          pattern="^[0-9]*[.,]?[0-9]*$"
          placeholder={inputName}
          min="0"
          minLength={1}
          inputMode="decimal"
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
    </>
  );
}
