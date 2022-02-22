import { useEffect } from "react";

function Error({ statusCode }) {
  useEffect(() => {
    // If client error remove localstorage for now
    window.localStorage.removeItem("APP_STATE");
  }, []);
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
