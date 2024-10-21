import React, { useEffect, useState } from 'react';

const TeamAttendance = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/markAttendance');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Team Attendance</h1>
      <ul>
        {teams.map((team) => (
          <li key={team._id}>
            <h2>{team.Team_Name}</h2>
            <p>Leader: {team.Leader_name} ({team.Leader_email})</p>
            <p>Members:</p>
            <ul>
              <li>
                {team.mem1_name} ({team.mem1_email})
              </li>
              <li>
                {team.mem2_name} ({team.mem2_email})
              </li>
              {team.mem3_name && (
                <li>
                  {team.mem3_name} ({team.mem3_email})
                </li>
              )}
              {team.mem4_name && (
                <li>
                  {team.mem4_name} ({team.mem4_email})
                </li>
              )}
            </ul>
            <p>Competition: {team.Competition}</p>
            <p>Attendance: {team.attendance ? 'Present' : 'Absent'}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamAttendance;
