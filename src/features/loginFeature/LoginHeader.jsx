import Logo from "../../ui/Logo";

export default function LoginHeader() {
  return (
    <header className="flex flex-col gap-9">
      <Logo />
      <p className="text-center text-2xl leading-[48px] md:text-[32px]">
        Welcome to CodeAnt AI
      </p>
    </header>
  );
}
