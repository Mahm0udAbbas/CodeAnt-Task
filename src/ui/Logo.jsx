import logo from "../assets/images/logo.png";

export default function Logo() {
  return (
    <section className="flex items-center justify-center gap-x-3">
      <img src={logo} className="h-10" alt="logo" />
      <p className="font-satoshi text-3xl font-normal">CodeAnt AI</p>
    </section>
  );
}
