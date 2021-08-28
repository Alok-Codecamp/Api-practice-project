const lodePlayerData = () => {
  // console.log("hi");
  const input = document.getElementById("search-inp");
  const inputText = input.value;
  const url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${inputText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlayer(data.player));
};

const displayPlayer = (players) => {
  players.forEach((player) => {
    console.log(player);
  });
};
