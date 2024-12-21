export default function IconButton({ onClick, icon, name, variant }) {
  return (
    <button
      className={`flex items-center gap-x-2 rounded-lg border-2 border-[#D5D7DA] px-[14px] py-[10px] ${variant === "primary" ? "bg-[#1570EF] text-white" : "bg-white text-[#414651]"} `}
      onClick={onClick}
    >
      {icon}
      <span className={` ${variant === "primary" ? "" : ""}`}>{name}</span>
    </button>
  );
}
