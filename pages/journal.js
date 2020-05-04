import Layout from "../components/Layout";
import JournalForm from "../components/JournalForm";
import { optionalAuth } from "../utils/ssr";
import PlantGif from "../components/PlantGif";

export const getServerSideProps = optionalAuth;
export default function MultiForm(props) {
  const user = props.user;

  return (
    <Layout user={user}>
      <h1> let's grow together </h1>
      <JournalForm user={user}></JournalForm>
      <PlantGif />
    </Layout>
  );
}
