import  { useEffect, useState } from "react";
import axios from "axios";

const Leaderboards = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboards = async () => {
      try {
        const response = await axios.get("https://lichess.org/api/player/top/10/blitz");
        setPlayers(response.data || []);
      } catch (error) {
        console.error("Error fetching leaderboards:", error);
        setError("Unable to fetch leaderboard data.");
      }
    };

    fetchLeaderboards();
  }, []);

  return (
    <div className="profile-card" >
        {/* <img src={profileImage} alt="Profile" /> */}
      <h2>Top Players Leaderboard</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {players.length > 0 ? (
        <table border="1" cellPadding="8" style={{ marginTop: "10px", width: "100%" }}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Title</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {players.slice(0, 10).map((player, index) => (
              <tr key={player.id}>
                <td>{index + 1}</td>
                <td>{player.username}</td>
                <td>{player.title || "N/A"}</td>
                <td>{player.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading leaderboard data...</p>
      )}
    </div>
  );
};

export default Leaderboards;
