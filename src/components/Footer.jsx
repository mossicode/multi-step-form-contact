export default function Footer({ prevLabel = "", nextLabel, onPrev, onNext }) {
  return (
    <div className="flex justify-between mt-8">
      {prevLabel && (
        <button
          type="button"
          onClick={onPrev}
          className="px-4 py-2 text-gray-600 hover:text-blue-800"
        >
          {prevLabel}
        </button>
      )}

      {nextLabel && (
        <button
          type="submit"
          onClick={onNext}
          className="ml-auto  px-4 py-2 font-bold bg-blue-900 text-white rounded-md hover:bg-blue-700"
        >
          {nextLabel}
        </button>
      )}
    </div>
  );
}
