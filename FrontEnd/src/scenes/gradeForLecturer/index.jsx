
import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import { tokens } from "../../theme";
import "./Grade.css";

const GradeClass = () => {
  const [gradeData, setGradeData] = useState([]);
  console.log(gradeData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/lecturer/getGradeByClass', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            classID: 'SE1701',
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setGradeData(data[0].StudentGrades);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };


    fetchData();
  }, []);

  const theme = tokens("light");
  // const colors = tokens(theme.palette.mode);

  return (
    <div>
      <Header title="TEAM" subtitle="Managing the Grade" />
      <h1>Grade Section</h1>
      {gradeData && gradeData.length > 0 ? (
        <table className="centered-table">
          <thead>
            <tr style={{ backgroundColor: theme.blueAccent[700], color: theme.greenAccent[300] }}>
              <th>Student ID</th>
              <th className="left-aligned-cell">Score Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {gradeData.map((student) => (
              student.Score.map((scoreItem, index) => (
                <tr key={scoreItem._id} style={{ borderBottom: "1px solid #ccc" }}>
                  {index === 0 ? (
                    <td className="centered-cell" rowSpan={student.Score.length}>
                      {student.StudentID}
                    </td>
                  ) : null}
                  <td className="left-aligned-cell">{scoreItem.scoreName}</td>
                  <td className="centered-cell">{scoreItem.grade}</td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default GradeClass;
