import CircleRounded from "./components/CircleRounded";

export default function Sidebar({ setActiveTab, activeTab, addOnsLock, selectionPlanLock, summaryLock, isSuccess }) {
  const steps = [
    { id: 1, label: "Your Information", tab: "personal" },
    { id: 2, label: "Selection Plan", tab: "selectionPlan" },
    { id: 3, label: "Add-Ons", tab: "add-ons" },
    { id: 4, label: "Summary", tab: "summary" },
  ];

  function handleTab(step) {
    if (isSuccess) return; 

    if (step.tab === "personal") setActiveTab("personal");
    else if (step.tab === "selectionPlan" && !selectionPlanLock) setActiveTab("selectionPlan");
    else if (step.tab === "add-ons" && !addOnsLock) setActiveTab("add-ons");
    else if (step.tab === "summary" && !summaryLock) setActiveTab("summary");
  }

  return (
    <div className="md:w-[220px] lg:w-[275px] md:gap-y-7 max-md:pt-8 flex h-full max-md:justify-center max-md:w-full md:flex-col md:bg-[url('/bg-sidebar-desktop.svg')] bg-cover bg-no-repeat rounded-lg md:p-4">
      {steps.map((step) => (
        <div
          key={step.id}
          onClick={() => handleTab(step)}
          className={`flex gap-x-4 max-md:first:gap-x-2 items-center cursor-pointer ${isSuccess ? "pointer-events-none opacity-50" : ""}`}
        >
          {activeTab === step.tab ? (
            <div className="bg-blue-200 rounded-full">
              <CircleRounded>{step.id}</CircleRounded>
            </div>
          ) : (
            <div className="border-white border-2 text-white rounded-full">
              <CircleRounded>{step.id}</CircleRounded>
            </div>
          )}

          <div className="flex flex-col uppercase">
            <div className="text-blue-200 text-base font-Ubuntu max-md:hidden">Step {step.id}</div>
            <div className="text-white text-base max-md:hidden">{step.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
