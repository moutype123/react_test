import Sidebar from './layouts/Sidebar'
import React from 'react';
import Header from './layouts/Header';
import PageContainer from './layouts/PageContainer';
import { StockConditionPage } from './pages/StockConditionPage/StockConditionPage';
import { Grid } from './layouts/GridLayout/Grid';
import { Row } from './layouts/GridLayout/Row';
import { Col } from './layouts/GridLayout/Col'
import { Paper } from './components/Paper/Paper';
import { StockInfoPage } from './pages/StockInfoPage/StockInfoPage';
// import { Provider } from 'react-redux';
// import store from './myRedux/TestReducer'


function App() {

  return (
    <div className="App">
      <div className='main-container'>    
        <Sidebar/>
      <PageContainer>
        <Header/>
        <StockConditionPage/>
        {/* <StockInfoPage/> */}
      </PageContainer>     
      </div>
 
    </div>
  );
}

export default App;

