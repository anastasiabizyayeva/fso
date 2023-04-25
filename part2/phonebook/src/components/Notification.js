export const Notification = ({ message }) => {
  if (message === null) {
    return null;
  } else {
    console.log(message);
    return (
      <>
        <div className="message">{message}</div>
        <br />
      </>
    );
  }
};
