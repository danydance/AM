import React, { useEffect, useState } from 'react';
import Table from '../components/Table';

interface Resource {
  id: number;
  title: string;
  type: string;
}

const Resources: React.FC = () => {
    const [resources, setResources] = useState<Resource[]>([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch('http://localhost:8000/resources')
          .then(res => res.json())
          .then(data => setResources(data))
          .catch(err => console.error('Failed to fetch resources:', err));
    }, []);
    const filteredResources = resources.filter(r =>
        r.title.toLowerCase().includes(search.toLowerCase())
    );

    const headers = ['ID', 'Title', 'Type'];

      const renderRow = (r: Resource) => (
        <>
          <td>{r.id}</td>
          <td>{r.title}</td>
          <td>{r.type}</td>
        </>
      );

      return (
        <div>
          <h1>Resources</h1>

          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginBottom: '1rem', padding: '0.5rem', width: '300px' }}
          />

          <Table headers={headers} data={filteredResources} renderRow={renderRow} />
        </div>
    );
};

export default Resources;

