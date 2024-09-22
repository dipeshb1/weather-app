function Error({ errorMessage }) {
  return (
    <h4>
      {errorMessage
        ? errorMessage
        : "Uh oh, there's some issue. Please try again later."}
    </h4>
  );
}

export default Error;
