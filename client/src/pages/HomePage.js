import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/Layout/Layout";
import Model from "../components/shared/modal/Model";

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <Layout>
      {error && <span>{alert(error)} </span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h4
            className="ms-4"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-plus text-success py-4"></i>
            Add Inventroy{" "}
          </h4>
          <Model />
        </>
      )}
    </Layout>
  );
};

export default HomePage;
