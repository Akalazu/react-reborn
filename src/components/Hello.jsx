function Hello(props) {
  console.log(props);
  //   const { name, message, emoji, selectedNumbers } = props;

  return (
    <div>
      <h1>
        Hello there {props.emoji}, My name is {props.name}
      </h1>
      <p>{props.message}</p>
      <p>My Selected Numbers are {props.selectedNumbers} </p>
    </div>
  );
}

export default Hello;
