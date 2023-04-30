function NotFound({ found }) {
  return (
    <div className={`notfound  ${!found && "visible"}`}>
      <h1>Oops! We couldn't find the location.</h1>
      <img className={`notfoundpic `} src="./icons/404.png" alt="" />
    </div>
  );
}

export default NotFound;
