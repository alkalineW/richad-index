import { useRouteError, Link } from "react-router-dom";
import React from "react";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Opps!</h1>
      <p>Sorry, there's something went wrong.</p>
      <p>
        {/* <i>{error.statusText ? error.statusText : error.message}</i> */}
      </p>
      <Link to={"."}>Return to homepage</Link>
    </div>
  );
}
