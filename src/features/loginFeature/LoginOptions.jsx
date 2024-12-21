import LoginOption from "./LoginOption";

export default function LoginOptions({ options }) {
  return (
    <div className="mx-20 flex flex-col items-center justify-center gap-4">
      {options.map((option) => (
        <LoginOption
          key={option.title}
          imageUrl={option.imageUrl}
          title={option.title}
        />
      ))}
    </div>
  );
}
