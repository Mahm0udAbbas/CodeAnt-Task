export default function LoginOption({ imageUrl, title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center rounded-md border px-8 py-4"
    >
      <img src={imageUrl} alt={title} />
      <h3 className="ml-3 text-base font-semibold text-[#171717]">{title}</h3>
    </button>
  );
}
