import React, { useEffect, useState } from 'react';
import "./table.css"
import {fetchTableData} from '../../services/apiService'




function TableComponent() {
  const [tableData, setTableData] = useState([]);


  useEffect(() => {
    // Fetch table data
    fetchTableData().then((data) => {setTableData(data)
    console.log('dataa',data)});
  }, []);


  return (
    <div className='flcard'>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.quantity}</td>
                <td>{e.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br/>
        <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled p-2">
      <a class="page-link" href="#" tabindex="-1">&lsaquo;</a>
    </li>
    <li class="page-item p-2"><a class="page-link" href="#">1</a></li>
    <li class="page-item p-2"><a class="page-link" href="#">2</a></li>
    <li class="page-item p-2"><a class="page-link" href="#">3</a></li>
    <li class="page-item p-2">
      <a class="page-link p-2" href="#">&rsaquo;</a>
    </li>
  </ul>
</nav>
      </div>
    </div>
  );
  
}

export default TableComponent