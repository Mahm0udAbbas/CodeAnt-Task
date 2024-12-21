export default function DropDownMenu() {
  return (
    <div className="relative inline-block w-full">
      <select className="block w-full appearance-none truncate rounded-lg border bg-white px-4 py-2 text-base font-normal text-[#181D27] focus:outline-none focus:ring-2 focus:ring-gray-400">
        <option value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <svg
          className="h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
