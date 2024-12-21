import { DatabaseOutlined } from "@ant-design/icons";

export default function RepoItem({ repo }) {
  return (
    <li className="flex flex-col gap-y-3 border-b bg-white px-6 py-5 hover:bg-[#F5F5F5]">
      <div className="flex items-center justify-start space-x-2">
        <h3 className="text-xl font-medium text-[#181D27]">{repo.name}</h3>
        <p className="rounded-full border border-[#B2DDFF] py-0.5 pl-2 pr-[10px] text-sm font-normal text-[#175CD3]">
          {" "}
          {repo.visibility}
        </p>
      </div>
      <div className="flex gap-x-5 text-base text-[#181D27]">
        <div className="flex items-center space-x-2">
          <span> {repo.language}</span>
          <span className="inline-block h-2 w-2 rounded-[50%] bg-[#1570EF]"></span>
        </div>
        <div className="flex items-center space-x-2">
          <DatabaseOutlined />
          <p> {repo.size}</p>
        </div>
        <p> {repo.lastUpdated}</p>
      </div>
    </li>
  );
}
