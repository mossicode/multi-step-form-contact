import { useState, useEffect } from "react";
import Description from "../components/Description";
import SelectionCard from "../components/SelectionCard";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Arcade from "../icons/ArcadeIcon";
import AdvanceIcon from "../icons/AdvanceIcon";
import ProIcon from "../icons/ProIcon";

export default function SelectionPlan({ setActiveTab, formData, setFormData, isMonthly, setIsMonthly, setAddOnsLock }) {
  const [selectedPlan, setSelectedPlan] = useState(formData.plan?.name || "");

  const monthlyData = [
    { id: 1, logo: <Arcade />, name: "Arcade", value: 9 },
    { id: 2, logo: <AdvanceIcon />, name: "Advanced", value: 12 },
    { id: 3, logo: <ProIcon />, name: "Pro", value: 15 },
  ];

  const yearlyData = [
    { id: 1, logo: <Arcade />, name: "Arcade", value: 90, discount: 2 },
    { id: 2, logo: <AdvanceIcon />, name: "Advanced", value: 120, discount: 2 },
    { id: 3, logo: <ProIcon />, name: "Pro", value: 150, discount: 2 },
  ];

  const data = isMonthly ? monthlyData : yearlyData;

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan.name);
    setFormData({ ...formData, plan }); 
  };

  useEffect(() => {
    setSelectedPlan(formData.plan?.name || "");
  }, [formData.plan]);

  const nextHandler = () => {
    if (!selectedPlan) {
      alert("Please select a plan to continue");
      return;
    }
    setAddOnsLock(false); 
    setActiveTab("add-ons");
  };

  return (
    <div className="flex flex-col min-h-[70vh] h-full justify-between relative">
      <div>
        <Title>Select Your Plan</Title>
        <Description>You have the option of monthly or yearly billing.</Description>

        <div className="mt-10 mb-10">
          <SelectionCard
            data={data}
            checkMonthYear={isMonthly}
            selectedPlan={selectedPlan}
            handleSelectPlan={handleSelectPlan}
          />
        </div>

        <div className="w-full bg-blue-50 border flex justify-center items-center gap-x-4 p-3 rounded-xl mb-20">
          <span
            className={`cursor-pointer transition-all duration-200 ${isMonthly ? "font-extrabold text-2xl text-blue-600" : "text-gray-400 font-bold"}`}
            onClick={() => setIsMonthly(true)}
          >
            Monthly
          </span>
          <div
            onClick={() => setIsMonthly(!isMonthly)}
            className="relative bg-black h-10 w-24 max-md:w-20 max-md:h-7 rounded-3xl cursor-pointer"
          >
            <div className={`absolute top-[10%] bg-white rounded-full h-8 w-8 max-md:w-6 max-md:h-6 transition-all duration-300 ${isMonthly ? "left-1" : "right-1"}`}></div>
          </div>
          <span
            className={`cursor-pointer transition-all duration-200 ${!isMonthly ? "font-extrabold text-2xl text-blue-600" : "text-gray-400 font-bold"}`}
            onClick={() => setIsMonthly(false)}
          >
            Yearly
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <Footer
          onPrev={() => setActiveTab("personal")}
          onNext={nextHandler}
          prevLabel="Back"
          nextLabel="Next Level"
        />
      </div>
    </div>
  );
}
