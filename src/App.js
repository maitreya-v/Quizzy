// import logo from './logo.svg';
import './App.css';
import React  from 'react';
import QuizQuestion from './components/QuizQuestion';
import Card from './components/Card';
function App() {
  return (
    <div className="AppHolder">
    <Card>
      <QuizQuestion/>
    </Card>
    </div>
  );
}

export default App;
