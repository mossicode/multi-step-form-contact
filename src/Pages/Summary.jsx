import Footer from "../components/Footer";
import Title from "../components/Title";

export default function Summary({ setActiveTab, isMonthly, formData, addOns }) {
  const selectedPlan = formData.plan || { name: "", value: 0 };
  const planValue = selectedPlan.value || 0;
  const addOnsValue = addOns.reduce((acc, curr) => acc + curr.value, 0);
  const total = planValue + addOnsValue;

  return (
    <div className="relative min-h-full pb-20">
      <h1 className="mb-3"><Title>Finishing Up</Title></h1>
      <p className="text-gray-500">Double-check everything looks OK before confirming.</p>

      <div className="bg-blue-50 p-3 w-full mt-10 rounded-lg flex flex-col gap-y-5 max-md:gap-y-4 mb-10">
        <div className="flex justify-between items-center border-b pb-5 max-md:pb-4">
          <div>
            <h1>{selectedPlan.name} ({isMonthly ? "Monthly" : "Yearly"})</h1>
            <button className="underline decoration-black hover:text-blue-600" onClick={() => setActiveTab("selectionPlan")}>
              Change
            </button>
          </div>
          <div>
            <h1>${planValue}/{isMonthly ? "mo" : "yr"}</h1>
          </div>
        </div>

        {addOns.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="text-gray-500">{item.name}</div>
            <div>+${item.value}/{isMonthly ? "mo" : "yr"}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <p>Total (per {isMonthly ? "mo" : "yr"})</p>
        <h3 className="text-blue-700 font-bold">${total}/{isMonthly ? "mo" : "yr"}</h3>
      </div>

      <div className="absolute bottom-0 right-0 left-0">
        <Footer
          prevLabel="Back"
          nextLabel="Confirm"
          onPrev={() => setActiveTab("add-ons")}
          onNext={() => setActiveTab("success")}
        />
      </div>
    </div>
  );
}
