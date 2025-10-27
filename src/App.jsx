// App.jsx
import { useState } from "react";
import Sidebar from "./Sidebar";
import PersonalInformation from "./Pages/PersonalInformation";
import SelectionPlan from "./Pages/SelectionPlan";
import AddOns from "./Pages/AddOns";
import Summary from "./Pages/Summary";
import SuccessMessage from "./SuccessMessage";

export default function App() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [activeTab, setActiveTab] = useState("personal");
  const [selectionPlanLock, setSelectionPlanLock] = useState(true);
  const [addOnsLock, setAddOnsLock] = useState(true);
  const [summaryLock, setSummaryLock] = useState(true);

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    plan: null,
  });

  const [addOns, setAddOns] = useState([]);

  return (
    <div className="min-h-full w-full bg-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[200px] bg-no-repeat bg-cover bg-bottom max-md:bg-[url('/bg-sidebar-mobile.svg')]"></div>

      <div className="relative flex min-h-screen w-full p-4 max-md:pt-0 gap-x-6 max-md:gap-x-2 max-md:flex-col max-md:px-4">
        <div className="min-h-full z-10 max-md:mb-10">
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            selectionPlanLock={selectionPlanLock}
            addOnsLock={addOnsLock}
            summaryLock={summaryLock}
          />
        </div>

        <div className="flex-1 bg-white p-8 max-md:p-3 w-full rounded-xl shadow-md z-10">
          {activeTab === "personal" && (
            <PersonalInformation
              setActiveTab={setActiveTab}
              values={formData}
              setValues={setFormData}
              setSelectionPlanLock={setSelectionPlanLock}
            />
          )}

          {activeTab === "selectionPlan" && (
            <SelectionPlan
              setActiveTab={setActiveTab}
              formData={formData}
              setFormData={setFormData}
              isMonthly={isMonthly}
              setIsMonthly={setIsMonthly}
              setAddOnsLock={setAddOnsLock} // باز کردن Add-Ons بعد از انتخاب
            />
          )}

          {activeTab === "add-ons" && (
            <AddOns
              addOns={addOns}
              setAddOns={setAddOns}
              setActiveTab={setActiveTab}
              isMonthly={isMonthly}
              setSummaryLock={setSummaryLock}
            />
          )}

          {activeTab === "summary" && (
            <Summary
              setActiveTab={setActiveTab}
              formData={formData}
              addOns={addOns}
              isMonthly={isMonthly}
            />
          )}

          {activeTab === "success" && <SuccessMessage />}
        </div>
      </div>
    </div>
  );
}
