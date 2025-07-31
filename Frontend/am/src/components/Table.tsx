import React from 'react';

interface TableProps<T> {
  headers: string[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
}

function Table<T>({ headers, data, renderRow }: TableProps<T>) {
  return (  
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} style={{ border: '1px solid black', padding: '8px' }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} style={{ border: '1px solid black' }}>
            {renderRow(item)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
