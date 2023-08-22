import { QuizForm } from "./QuizForm";
import { QuizList } from "./QuizList";
import { SearchBar } from "./SearchBar";
import quizItems from "../quiz-items.json"


export default function App() {
  return (
    <div>
      <QuizForm />
      <SearchBar />
      <QuizList items={quizItems}/>
    </div>
  );
}