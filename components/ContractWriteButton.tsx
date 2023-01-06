import { useContractWrite, usePrepareContractWrite } from "wagmi";
import sampleAbi from "../abi/abi.json";

export default function WriteContractButton() {
  const { config, error } = usePrepareContractWrite({
    address: "0xf2edF1c091f683E3fb452497d9a98A49cBA84666",
    abi: sampleAbi,
    functionName: "mint",
    args: ["1000000000000000000"],
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <>
      <div>
        <button
          disabled={!write}
          onClick={() => write?.()}
          className="px-6 py-2.5 bg-blue-600 text-white text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Click me
        </button>
        {isLoading && <div>Check Wallet</div>}
        {isSuccess && (
          <div>
            Transaction:{" "}
            <a
              href={"https://goerli.etherscan.io/tx/" + data?.hash}
              target="_blank"
              rel="noopenner noreferrer"
            >
              https://goerli.etherscan.io/tx/{data?.hash}
            </a>
          </div>
        )}
        {error && (
          <div>
            An error occurred preparing the transaction: {error.message}
          </div>
        )}
      </div>
    </>
  );
}
