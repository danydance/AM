import React, { useEffect, useState } from 'react';
import Table from '../components/table/Table'; // Assuming Table.tsx is in the same directory
import AnimatedPage from '../components/AnimatedPage';
import './Pages.css'

interface Person {
  id: number;
  name: string;
  building_id: number;
  email: string;
}

interface Building {
  id: number;
  name: string;
}

const ITPeople: React.FC = () => {
    const [people, setPeople] = useState<Person[]>([]);
    const [buildings, setBuildings] = useState<Building[]>([]);
    const [selectedBuildingId, setSelectedBuildingId] = useState<number | null>(null);

    useEffect(() => {
      fetch('http://localhost:8000/it-people')
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched IT people:", data);
          setPeople(data);
        })
        .catch((err) => console.error('Error fetching IT people:', err));
    
    fetch('http://localhost:8000/buildings')
        .then(res => res.json())
        .then(data => setBuildings(data));
    }, []);
  const headers = ['ID', 'Name', 'Building ID', 'Email'];

  const renderRow = (person: Person) => (
    <>
      <td>{person.id}</td>
      <td>{person.name}</td>
      <td>{person.building_id}</td>
      <td>{person.email}</td>
    </>
  );


  return (
    <AnimatedPage>
      <div className='page-box'>
          <h1>IT People</h1>
          <label>Filter by building:</label>
          <select
            value={selectedBuildingId ?? ''}
            onChange={(e) => setSelectedBuildingId(e.target.value ? Number(e.target.value) : null)}
          >
          <option value="">All</option>
            {buildings.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
      
        <Table
            headers={headers}
            data={selectedBuildingId ? people.filter(p => p.building_id === selectedBuildingId) : people}
            renderRow={renderRow}
          />
      </div>
    </AnimatedPage>
  );
};

export default ITPeople;