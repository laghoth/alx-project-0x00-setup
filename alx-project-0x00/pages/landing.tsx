import React from "react";
import Card from "@/components/Card";
import Pill from "@/components/Pill";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <p>----------</p>
      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>
    </div>
  );
};

export default Landing;
