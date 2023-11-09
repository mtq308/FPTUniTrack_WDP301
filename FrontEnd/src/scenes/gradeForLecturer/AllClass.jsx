import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import { Link } from 'react-router-dom';

import "./Class.css";

const AllClass = () => {
  const [classData, setClassData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/json/TestGetAllClassID.json');

        if (response.ok) {
          const data = await response.json();
          setClassData(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="all-class-container">
      <Header />
      <div className="class-list">
        <h2>Class List</h2>
        <ul>
          {classData.map((item, index) => (
            <li key={index}>
              {/* <Link to={`/class/${item}`} onClick={() => handleItemClick(item)}>
                {item}
              </Link> */}
              <Link to={`/gradeClass`} onClick={() => handleItemClick(item)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {selectedItem && (
        <p>Selected item: {selectedItem}</p>
      )}
    </div>
  );
};

export default AllClass;
