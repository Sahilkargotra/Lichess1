import { useEffect, useState } from 'react';

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch tournament data
    const fetchTournaments = async () => {
      try {
        const response = await fetch('https://lichess.org/api/tournaments');
        const data = await response.json();
        console.log(data);  // Check if data is logged in the console
        setTournaments(data); // Store data in state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching tournament data:", error);
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);  // Empty dependency array ensures this runs once on mount

  // If data is still loading
  if (loading) {
    return <div>Loading tournaments...</div>;
  }

  // If no tournaments are found
  if (!tournaments || tournaments.length === 0) {
    return <div>No tournaments available</div>;
  }

  // Render tournament data
  return (
    <div>
      <h2>Ongoing Tournaments</h2>
      <div className="tournament-list">
        {tournaments.map((tournament, index) => (
          <div key={index} className="tournament-card">
            <h3>{tournament.name}</h3>
            <p>{tournament.date}</p>
            <p>{tournament.status}</p>
            <p>{tournament.playersCount} players</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
