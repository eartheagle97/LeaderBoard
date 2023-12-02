import React, { useEffect, useState } from "react";
import { response } from "../response";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function LeaderBoard({ sortBy }) {
  const [userData, setUserData] = useState(response.list);

  useEffect(() => {
    const handleSort = () => {
      setUserData((prevUserData) => {
        let sortedData;

        switch (sortBy) {
          case "rank":
            sortedData = [...prevUserData].sort((a, b) => a.rank - b.rank);
            break;
          case "name":
            sortedData = [...prevUserData].sort((a, b) =>
              a.name.localeCompare(b.name)
            );
            break;
          case "points":
            sortedData = [...prevUserData].sort((a, b) => a.points - b.points);
            break;
          case "age":
            sortedData = [...prevUserData].sort((a, b) => a.age - b.age);
            break;
          default:
            sortedData = prevUserData;
        }

        return sortedData;
      });
    };
    handleSort();
  }, [sortBy]);

  return (
    <div className="text-center mt-50">
      <div>
        <div>
          <Link to="/rank">
            <button data-testid="route-rank" className={(sortBy === 'rank') ? 'success' : 'outlined'} type="button">
              Rank
            </button>
          </Link>
          <Link to="/name">
            <button data-testid="route-name" className={(sortBy === 'name') ? 'success' : 'outlined'} type="button">
              Name
            </button>
          </Link>
          <Link to="/points">
            <button
              data-testid="route-points"
              className={(sortBy === 'points') ? 'success' : 'outlined'}
              type="button"
            >
              Points
            </button>
          </Link>
          <Link to="/age">
            <button data-testid="route-age" className={(sortBy === 'age') ? 'success' : 'outlined'} type="button">
              Age
            </button>
          </Link>
        </div>
      </div>
      <div className="card mx-auto pb-20 mb-30" style={{ width: "50%" }}>
        <table className="mt-50" data-testid="app-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th className="numeric">Points</th>
              <th className="numeric">Age</th>
            </tr>
          </thead>
          <tbody data-testid="app-tbody">
            {userData.map((user, index) => {
              return (
                <tr key={index}>
                  <td data-testid={`rank-${index}`}>{user.rank}</td>
                  <td data-testid={`name-${index}`}>{user.name}</td>
                  <td data-testid={`points-${index}`} className="numeric">
                    {user.points}
                  </td>
                  <td data-testid={`age-${index}`} className="numeric">
                    {user.age}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderBoard;
