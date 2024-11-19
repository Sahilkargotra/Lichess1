import  { useState } from "react";
import axios from "axios";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    setError(null); // Clear previous errors
    try {
      const response = await axios.get(`https://lichess.org/api/user/${username}`);
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError("User not found. Please check the username.");
      setProfile(null);
    }
  };

  return (
    <div className="profile-card">
      <h2>Lichess Profile</h2>
      <div>
        <input
          type="text"
          placeholder="Enter Lichess Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginRight: "8px" }}
        />
        <button onClick={fetchProfile}>Get Profile</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {profile && (
        <div className="details" style={{ marginTop: "20px" }}>
          <h3>{profile.username}</h3>
          {profile.profile?.bio && <p><strong>Bio:</strong> {profile.profile.bio}</p>}
          <p><strong>Games Played:</strong> {profile.count?.all || 0}</p>
          <p><strong>Rating:</strong> {profile.perfs?.blitz?.rating || "N/A"} (Blitz)</p>
          {profile.perfs?.bullet?.rating && <p><strong>Bullet Rating:</strong> {profile.perfs.bullet.rating}</p>}
          {profile.profile?.avatar && (
            <img
              src={profile.profile.avatar}
              alt="Profile"
              style={{ width: "100px", borderRadius: "50%", marginTop: "10px" }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
