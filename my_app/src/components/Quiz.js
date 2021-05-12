import React, { useEffect, useState } from "react";
import Question from "./Question";
import Answer from "./Answer";
import Actions from "./Actions";
import Card from "react-bootstrap/Card";
import Questnum from "./Questnum"
import { Box } from "@material-ui/core"

import { shuffle, htmlDecode } from "../Helper/utility";

export default function Quiz(props) {
  const [idx, setIdx] = useState(0);

  const q =
    props.data.questions.length > 0 ? props.data.questions[idx].question : null;

  const answer =
    props.data.questions.length > 0
      ? shuffle(
          `${props.data.questions[idx].incorrect_answers.join("|")}|${
            props.data.questions[idx].correct_answer
          }`.split("|")
        )
      : [];

  function nextQuestion() {
    // idx++ 
    setIdx(idx + 1);
  }

  function onAnswer(e) {
    const selection = e.target.innerHTML;

    if (selection === props.data.questions[idx].correct_answer) {
      console.log("correct");
    }
  }

  return (
    // used Cards from bootstrap to have a flexible container that can adjust with the screen size
    <Card className='mt-2'>
      <Card.Title>
        <h1>Anime Trivia</h1>
      </Card.Title>
      <Card.Body>
       {/* used the box from material ui to hould the question number */}
        <Box>
          <Questnum index={idx +1} />
        </Box>
        <Question question={htmlDecode(q)} />
        <Answer answers={answer} onAnswer={onAnswer} />
        <Actions nextQuestion={nextQuestion} />
      </Card.Body>
    </Card>
  );
}
;
