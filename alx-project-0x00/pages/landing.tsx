import React from "react";
import Card from "@/components/Card";
import Pill from "@/components/Pill";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      {/* Pill Examples */}
      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>

      {/* Button Examples */}
      <div className="mt-6 flex flex-col gap-3">
        <Button
          title="Small Rounded-sm"
          styles="text-sm rounded-sm bg-blue-500"
        />
        <Button
          title="Medium Rounded-md"
          styles="text-base rounded-md bg-green-500"
        />
        <Button
          title="Medium Rounded-lg"
          styles="text-base rounded-lg bg-green-500"
        />
        <Button
          title="Large Rounded-full"
          styles="text-lg rounded-full bg-red-500"
        />
      </div>
    </div>
  );
};

export default Landing;
