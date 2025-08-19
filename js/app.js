function LikeButton({ id }) {
  const [likes, setLikes] = React.useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <button onClick={handleClick}>
      ❤️ Lajk ({likes})
    </button>
  );
}

document.querySelectorAll(".like-button").forEach((el) => {
  const id = el.getAttribute("data-id"); // pariz, tokio, njujork...

  ReactDOM.render(<LikeButton id={id} />, el);
});

