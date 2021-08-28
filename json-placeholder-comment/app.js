const lodeComment = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((res) => res.json())
    .then((coments) => displayComment(coments));
};

// function for display comments
const displayComment = (comments) => {
  const cont = document.getElementById("comment-cont");
  comments.forEach((comment) => {
    const div = document.createElement("div");
    div.classList.add("new-comment");
    div.innerHTML = `
    <h3>Name: ${comment.name}</h3> 
    <h4>email ${comment.email}</h4>
    <br/>
    <p onclick="showById(${comment.id})" class='body'>${comment.body}</p>
    
    `;

    cont.appendChild(div);
  });
};
const showById = async (id) => {
  // console.log(`https://jsonplaceholder.typicode.com/comments/${id}`);
  const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);
  const headDiv = document.getElementById("comment-details");
  headDiv.innerHTML = `<p> Full details of PostId : 1 <br/>
  name: ${data.name} <br/>
  Email: ${data.email}<br/>
  body: ${data.body}`;
};

document.getElementById("add-comment").addEventListener("click", function () {
  lodeComment();
});
