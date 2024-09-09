import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div>
      <h1 className={css.homePageHeader}>Contacts manager welcome page </h1>
      <p className={css.homePageText}>
        You can create your own contacts list here
      </p>
    </div>
  );
};

export default HomePage;
