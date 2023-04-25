export const Notification = ({ message }) => {
  if (message === null) {
    return null;
  } else if (message.startsWith("Information of")) {
    return (
      <>
        <div className="error">{message}</div>
        <br />
      </>
    );
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
