export const dynamic = 'force-dynamic';

import { Quiz } from "@/components/Quiz";
import { fetchUser } from "../(auth)/actions/fetchUsers";
import { fetchQuestions } from "../(auth)/actions/fetchQuestions";
import { QuestionType } from "@/types";

const Page = async () => {
  const user = await fetchUser();
  const questions = await fetchQuestions({ type: QuestionType.quiz });

  const userId = user?.data.user.id;

  if (questions?.length) {
    return (
      <div className="page">
        <Quiz questions={questions} userId={userId} />
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default Page;
