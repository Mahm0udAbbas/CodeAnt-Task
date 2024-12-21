import { useState } from "react";
import LoginHeader from "./LoginHeader";
import LoginOptions from "./LoginOptions";
import TabSelector from "./TabSelector";

// Import your images (replace with your actual image paths)
import azureImage from "../../assets/images/azure.png";
import bitbucketImage from "../../assets/images/bitbucket.png";
import githubImage from "../../assets/images/github.png"; // Import your images
import gitlabImage from "../../assets/images/gitlab.png";
import keyImage from "../../assets/images/key.png";

// Define your login options for SAAS and self-hosted platforms
const saasOptions = [
  { imageUrl: githubImage, title: "Sign in with Github" },
  { imageUrl: bitbucketImage, title: "Sign in with Bitbucket" },
  { imageUrl: azureImage, title: "Sign in with Azure Devops" },
  { imageUrl: gitlabImage, title: "Sign in with GitLab" },
];
const selfHostesOptions = [
  { imageUrl: gitlabImage, title: "Self Hosted GitLab" },
  { imageUrl: keyImage, title: "Sign in with SSO" },
];

// Main component for the login page with SAAS and self-hosted options
export default function LoginComponent() {
  const [selected, setSelected] = useState("SAAS");
  return (
    <div className="w-full rounded-xl border border-solid border-[#E9EAEB] bg-white sm:max-w-screen-sm">
      <section className="border-b-2 px-6 py-9">
        <LoginHeader />
        <TabSelector selected={selected} onSelect={setSelected} />
      </section>
      <section className="h-[366px] px-6 py-9">
        <LoginOptions
          options={selected === "SAAS" ? saasOptions : selfHostesOptions}
        />
      </section>
    </div>
  );
}
