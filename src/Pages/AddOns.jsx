// AddOns.jsx
import { useState, useEffect } from "react";
import AddOnsCard from "../components/AddOnsCard";
import Footer from "../components/Footer";

export default function AddOns({ addOns, setAddOns, setActiveTab, isMonthly, setSummaryLock }) {
  const monthlyAddOns = [
    { id: 1, name: "Online service", desc: "Access to multiplayer games", value: 1 },
    { id: 2, name: "Larger storage", desc: "Extra 1TB of cloud save", value: 2 },
    { id: 3, name: "Customizable profile", desc: "Custom theme on your profile", value: 2 },
  ];

  const yearlyAddOns = [
    { id: 1, name: "Online service", desc: "Access to multiplayer games", value: 10 },
    { id: 2, name: "Larger storage", desc: "Extra 1TB of cloud save", value: 20 },
    { id: 3, name: "Customizable profile", desc: "Custom theme on your profile", value: 20 },
  ];

  const data = isMonthly ? monthlyAddOns : yearlyAddOns;
  const [selectedIds, setSelectedIds] = useState(addOns.map(a => a.id));

  const handleCheck = (item) => {
    if (selectedIds.includes(item.id)) setSelectedIds(selectedIds.filter(id => id !== item.id));
    else setSelectedIds([...selectedIds, item.id]);
  };

  const addOnsHandle = () => {
    setSummaryLock(false); 
    setActiveTab("summary");
  };

  useEffect(() => {
    const selectedItems = data.filter(item => selectedIds.includes(item.id));
    setAddOns(selectedItems);
  }, [selectedIds, data, setAddOns]);

  return (
<div className="flex flex-col max-md:min-h-[100dvh] h-full max-md:max-h-[100dvh] max-md:pb-40 justify-between relative">

      <div>
        <h1 className="text-2xl font-bold mb-2">Pick Add-Ons</h1>
        <p className="text-gray-500 mb-6">Add-ons help enhance your experience.1</p>

        <AddOnsCard addOnsData={data} checkHandle={handleCheck} selectedIds={selectedIds} />
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <Footer onPrev={() => setActiveTab("selectionPlan")} onNext={addOnsHandle} prevLabel="Back" nextLabel="Next Level" />
      </div>
    </div>
  );
}
