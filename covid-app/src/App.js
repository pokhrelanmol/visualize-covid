import React from 'react'
import Nav from '../src/components/Nav'
import CardData from './api/CardData'
import Table from './components/Table'
import { TableContextProvider } from './context/tableContext'
function App() {
  return (

    <div>
    <TableContextProvider>
    <Nav/>
    <CardData />
      <Table/>
    </TableContextProvider>
  </div>
  );
}

export default App;
