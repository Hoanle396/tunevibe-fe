"use client";
import LiveNFTs from "./components/LiveNFTs";
import Monster from "./components/Monster";
import StepByStep from "./components/StepbyStep";

type Props = {};

const Market = (props: Props) => {
  return (
    <div className="container mx-auto">
      <Monster/>
      <LiveNFTs />
      <StepByStep />
    </div>
  );
};

export default Market;
