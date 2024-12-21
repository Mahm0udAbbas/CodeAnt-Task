import {
  PlusOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import IconButton from "../../ui/IconButton";

export default function RepoHeader() {
  return (
    <header className="border-b-2 border-[#E9EAEB] px-3 py-5 md:px-2 lg:px-6">
      <section className="mb-5 flex flex-col justify-between gap-y-5 md:flex-row md:items-center md:gap-y-0">
        <section>
          <h1 className="mb-1 text-2xl font-semibold text-[#181D27]">
            Repositories
          </h1>
          <p className="text-sm font-normal">33 total repositories</p>
        </section>
        <section className="flex gap-x-3">
          <IconButton icon={<ReloadOutlined />} name="Refresh All" />
          <IconButton
            variant="primary"
            icon={<PlusOutlined />}
            name="Add Repository"
          />
        </section>
      </section>
      <div className="relative z-0 w-full max-w-sm">
        <input
          type="search"
          placeholder="Search Repositories"
          className="w-full truncate rounded-md border border-[#D5D7DA] bg-white py-[10px] pl-10 pr-4 text-[#414651] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          <SearchOutlined />
        </span>
      </div>
    </header>
  );
}
