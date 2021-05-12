import React, {useEffect, useState} from "react";
import axios from 'axios';
import Quiz from './components/Quiz';
import Container from 'react-bootstrap/Container';
import './style.css'

// did not use an API like I planned instead I made a mock JSON file with all the questions and answers
const endPoint = './mock.json';

export default function App() {

  const [data, setData] = useState({questions: []});



  useEffect(() => {
    loadData();
  },[])
// get questions from the mock JSON file
  async function loadData() {
    const quizData = await axios.get(endPoint);

    setData({questions: quizData.data.results});
  console.log(quizData.data)
  }

  return (
    // fluid contain is from react bootstrap to be flexible with the screen size
    <Container fluid>
    <Quiz data={data}/>
    </Container>
  );
}
