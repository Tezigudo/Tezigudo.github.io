import SessionProps from "../../interfaces/Content";

function Session(props: SessionProps) {
  const { sessionName, content } = props;

  return (
    <div id={sessionName.toLowerCase()} className="flex-row">
      <h1 className="text-3xl text-emerald-50">{sessionName}</h1>

      <div className="flex flex-wrap space-x-2">{content}</div>
    </div>
  );
}

export default Session;
