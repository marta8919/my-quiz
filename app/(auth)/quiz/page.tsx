import { Quiz } from "@/components/Quiz";
import { client } from "@/sanity/lib/client";
import { fetchUser } from "../actions/fetchUsers";

async function getData() {
  const query = `*[_type == "questions"]{
    question,
    answers,
    correctAnswer
  }`;

  const data = await client.fetch(query);

  return data;
}

const Page = async () => {
  const questions = await getData();
  const user = await fetchUser();
  const userId = user?.data.user.id;
  return <Quiz questions={questions} userId={userId} />;
};

export default Page;
