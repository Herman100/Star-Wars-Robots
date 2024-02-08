import { useEffect, useState } from "react";
import { robots } from "./RobotDetails";
import "../containers/App.css";

export default function Card({ searchField }) {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    robots.then((robotsData) => {
      const filterRobots = robotsData.filter((robot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      });

      const details = filterRobots.map((detail) => {
        let robosrc = "https://www.robohash.org/" + detail.name;
        return (
          <div
            className="tc bg-light-green dib br3 pa3 ma2 grow"
            key={detail.id}
          >
            <img width="200" height="200" src={robosrc} alt="robot" />
            <div>
              <h2>{detail.name}</h2>
              <p>
                Born in <strong>{detail.birth_year}</strong>
              </p>
            </div>
          </div>
        );
      });

      setDetails(details);
    });
  }, [searchField]);

  return (
    <>
      <hr />
      <div className="robocard">{details}</div>
    </>
  );
}
