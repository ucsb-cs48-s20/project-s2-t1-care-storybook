import Layout from "../components/Layout";
import { optionalAuth } from "../utils/ssr";
import PlantGif from "../components/PlantGif";

export const getServerSideProps = optionalAuth;

function HomePage(props) {
  const user = props.user;

  return (
    <Layout user={user}>
      {user ? (
        <div>
          <h1>chlorophyll your journal to take care of your plant!</h1>
          <PlantGif user={user}></PlantGif>
        </div>
      ) : (
        <div>
          <h1>You're not logged in!</h1>
          <h2>Please sign in to start growing together with your plant!</h2>
        </div>
      )}
    </Layout>
  );
}

export default HomePage;
