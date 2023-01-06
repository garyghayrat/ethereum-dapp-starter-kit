import { ConnectButton } from "@rainbow-me/rainbowkit";
import WriteContractButton from "../components/ContractWriteButton";
import NumberInput from "../components/NumberInput";

export default function Home() {
  return (
    <>
      <div className="flex justify-end mt-3 mr-3">
        <ConnectButton />
      </div>

      <div className="flex items-center justify-evenly mt-96">
        <NumberInput />
        <WriteContractButton />
      </div>
    </>
  );
}
