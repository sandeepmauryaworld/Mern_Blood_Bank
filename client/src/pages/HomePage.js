import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <div>
      {error && <span>{alert(error)} </span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1>home</h1>
        </>
      )}
    </div>
  );
};

export default HomePage;
