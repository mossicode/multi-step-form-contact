export default function SelectionCard({ data, checkMonthYear, selectedPlan, handleSelectPlan }) {
  return (
    <div className="flex justify-between gap-x-7 max-md:flex-col gap-y-2">
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => handleSelectPlan(item)}
          className={`w-full border p-4 max-md:p-2 rounded-md cursor-pointer transition-all duration-200 ${
            selectedPlan === item.name
              ? "bg-blue-100 border-blue-600"
              : "bg-white hover:border-blue-600 hover:bg-blue-50"
          }`}
        >
          <div className="mb-8 max-md:mb-2">{item.logo}</div>
          <h1 className="font-bold text-2xl max-md:text-xl">{item.name}</h1>
          <h1 className=" text-base text-gray-600 py-2 max-md:text-sm max-md:py-1">{item.discount ?(
            <div>
              {item.discount}<span>Months free</span>
            </div>
          ):""}</h1>
          <div className=" text-xl max-md:text-sm">
            ${item.value}/{checkMonthYear ? "mo" : "yr"}
          </div>
        </div>
      ))}
    </div>
  );
}
