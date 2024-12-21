import TapButton from "./TapButton";

export default function TabSelector({ selected, onSelect }) {
  return (
    <div className="mt-5 flex items-center justify-between overflow-hidden rounded-md bg-[#FAFAFA]">
      <TapButton
        selected={selected}
        onClick={() => onSelect("SAAS")}
        title={"SAAS"}
      />
      <TapButton
        selected={selected}
        onClick={() => onSelect("Self Hosted")}
        title={"Self Hosted"}
      />
    </div>
  );
}
