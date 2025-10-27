export default function AddOnsCard({ addOnsData, checkHandle, selectedIds, isMonthly }) {
  return (
    <div className="flex flex-col gap-4">
      {addOnsData.map((item) => {
        const isSelected = selectedIds.includes(item.id);

        return (
          <div
            key={item.id}
            onClick={() => checkHandle(item)}
            className={`flex justify-between items-center cursor-pointer border rounded-lg p-4 
              transition-all duration-200 hover:border-blue-400 
              ${isSelected ? "bg-blue-50 border-blue-500 shadow-sm" : "border-gray-300"}
            `}
          >
            <div className="flex items-start">
              <input
                type="checkbox"
                checked={isSelected}
                readOnly
                className="w-5 h-5 accent-blue-600 mt-1 cursor-pointer"
              />
              <div className="flex flex-col ms-3">
                <h2 className="font-semibold text-gray-900">{item.name}</h2>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>

            <div className="text-purple-600 font-medium text-sm whitespace-nowrap">
              +${item.value}/{isMonthly ? "mo" : "yr"}
            </div>
          </div>
        );
      })}
    </div>
  );
}
