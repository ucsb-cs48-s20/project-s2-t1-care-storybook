import Layout from "../components/Layout";
import { optionalAuth } from "../utils/ssr";

export const getServerSideProps = optionalAuth;

function HomePage(props) {
  const user = props.user;

  return (
    <Layout user={user}>
      {user ? (
        <div>
          You're logged in! Here's what the server knows about you:
          <pre>{JSON.stringify(user, null, "\t")}</pre>
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
