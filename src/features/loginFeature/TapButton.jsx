function TapButton({ onClick, selected, title }) {
  return (
    <button
      className={`w-1/2 rounded-md px-[14px] py-4 text-xl font-medium transition-all ${
        title === selected ? "bg-[#1570EF] text-white" : ""
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default TapButton;
