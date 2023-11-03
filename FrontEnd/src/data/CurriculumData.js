import { useEffect, useState } from 'react';
export const CurriculumData = () => {
  const [CurriculumData, setCurriculumData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/json/Curriculum.json');

        // Use the relative path to the JSON file
        if (response.ok) {
          const data = await response.json();
          setCurriculumData(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  return CurriculumData;
};