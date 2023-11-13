
import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import { tokens } from "../../theme";
import "./Grade.css";
import { useParams } from "react-router-dom";
const GradeClass = () => {
  const [gradeData, setGradeData] = useState([]);

  const gradeId = useParams().gradeId;
  const [subjectId, classId] = gradeId.split('&');
  const token = localStorage.getItem("token");
  console.log("Subject ID:", subjectId);
  console.log("Class ID:", classId);
  console.log(gradeId)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3456/lecturer/gradeByClassIdAndSubjectId', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token
          },
          body: JSON.stringify({
            classId: classId,
            subjectId: subjectId
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setGradeData(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);
  console.log(gradeData);
  const theme = tokens("light");
  // const colors = tokens(theme.palette.mode);

  return (
    <div>
      <Header title="Grade" subtitle={`The Grade Of ${classId}`} />
      {gradeData && gradeData.length > 0 ? (
        <table className="centered-table">
          <thead>
            <tr style={{ backgroundColor: theme.blueAccent[700], color: theme.greenAccent[300] }}>
              <th>Student ID</th>
              <th>Student Name</th>
              <th className="left-aligned-cell">Score Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {gradeData.map((student) => (
              student.Score.map((scoreItem, index) => (
                <tr key={scoreItem._id} style={{ borderBottom: "1px solid #ccc" }}>

                  {index === 0 ? (
                    <><td className="centered-cell" rowSpan={student.Score.length}>
                      {student.StudentID}
                    </td><td className="centered-cell" rowSpan={student.Score.length}>
                        {student.StudentName}
                      </td></>
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
