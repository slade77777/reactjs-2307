import reactLogo from "../assets/react.svg";

export function PartA({title, content}: {title: string, content: string}) {
  return (
    <div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}
