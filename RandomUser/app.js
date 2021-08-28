const lodeUserData = async () => {
  const url = `https://randomuser.me/api/?results=5`;
  const res = await fetch(url);
  const data = await res.json();
  displayUser(data.results);
};

// displayApi
const displayUser = (users) => {
  const userDiv = document.getElementById("users");
  users.forEach((user) => {
    const singleUser = document.createElement("div");
    singleUser.classList.add("col");
    console.log(user.name);
    const name = user.name.first;
    singleUser.innerHTML = `
    
    <div onclick="showDEtails()"  class="card h-100">
      <img src="${user.picture.large}" class="card-img-top" alt="user image" />
      <div class="card-body">
        <h5  class="card-title">${user.name.title} ${user.name.first} ${
      user.name.last
    } </h5>
        <p class="card-text">
       
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated ${new Date()} mins ago</small>
      </div>
    </div>
    `;
    userDiv.appendChild(singleUser);
  });
};

function showDEtails(names) {
  console.log(names);
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${names}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `;
  document.getElementById("head").appendChild(div);
}

// call for api
lodeUserData();
