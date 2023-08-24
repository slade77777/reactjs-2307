import reactLogo from "../assets/react.svg";
import PartAHeader from "./PartAHeader.tsx";

export function PartA({title, content}: {title?: string, content: string}) {
  return (
    <div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <PartAHeader />
      <p>{content}</p>
    </div>
  )
}
