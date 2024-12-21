import StatsCardContainer from "../features/loginFeature/StatsCardContainer";
import LoginComponent from "../features/loginFeature/LoginComponent";

export default function LoginPage() {
  return (
    <section className="grid max-h-screen lg:grid-cols-2">
      <section className="hidden lg:block">
        <StatsCardContainer />
      </section>
      <section className="flex h-screen flex-col items-center justify-center gap-5 bg-[#FAFAFA] p-4">
        <LoginComponent />
        <p className="text-base font-normal">
          By signing up you agree to the{" "}
          <span className="font-bold">Privacy Policy.</span>
        </p>
      </section>
    </section>
  );
}
