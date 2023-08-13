import GitubCard from "../../components/card/GithubCard";
import GithubCardProps from "../../interfaces/GithubCardProps";

function Project() {
  const data: GithubCardProps[] = [
    {
      projectName: "CardGame",
      description:
        "multi-player gaming experience that includes two main games, BlackJack and PokDeng implemented using python Turtle graphic",
      githubLink: "https://github.com/Tezigudo/Card_game",
    },
    {
      projectName: "JapanTemperatureVisualization",
      description:
        "application that can illustrate all Japan city temperature between 1/1/1955 to 1/1/2021 day by day in average of day by day format",
      githubLink: "https://github.com/Tezigudo/JapanTemperatureVisualization",
    },
    {
        projectName: "WePay",
        description: "a web application for those who need to coordinate paying for a group.",
        githubLink: "https://github.com/WePays/WePay"
    },
    {
      projectName: "Banana",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquid, ducimus nulla voluptate, cum non doloribus quasi accusamus exercitationem optio natus amet eligendi magni quaerat cumque? Expedita, magnam est. Asperiores!",
      githubLink: ""
    }
  ];

  return (
    <div className="space-y-4">

      {data.map((item) => {
        return <GitubCard {...item} />;
      })}
    </div>
  );
}

export default Project;
