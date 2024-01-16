// pages/index.tsx
import ChipComponent from "../components/ChipComponent";
import styles from "../styles/ChipComponent.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <ChipComponent />
    </div>
  );
};

export default Home;
