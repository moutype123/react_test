import Sidebar from './layouts/Sidebar'
import React from 'react';
import Header from './layouts/Header';
import PageContainer from './layouts/PageContainer';
import { StockConditionPage } from './pages/StockConditionPage/StockConditionPage';

function App() {

  return (
    <div className="App">
      <div className='main-container'>
        <Sidebar/>
      <PageContainer>
        <Header/>
        <StockConditionPage/>
      </PageContainer>     
      </div>
    </div>
  );
}

export default App;

