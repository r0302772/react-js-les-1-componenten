import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import Exercise from "./components/Exercise.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Exercise title={'Exercise 1: Multiplication Table'}/>
        <Exercise title={'Exercise 2: Rater'} background={'#77EEEE'}/>
        <Exercise title={'Exercise 3: Progressbar'}/>
        <Exercise title={'Exercise 4: Number grid'} background={'#77EEEE'}/>
        <Exercise title={'Exercise 5: Comment Card'}/>
    </StrictMode>
)
