console.log("connected....");
const dataBase = [
  {
    name: "Ryan",
    country: "United Kingdom",
    profilePic: "https://randomuser.me/api/portraits/women/85.jpg",
  },
  {
    name: "Bryan",
    country: "United State",
    profilePic: "https://randomuser.me/api/portraits/women/80.jpg",
  },
  {
    name: "Michael",
    country: "Agege",
    profilePic: "https://randomuser.me/api/portraits/women/54.jpg",
  },
  {
    name: "Richie",
    country: "China",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

const result = document.getElementById("result");
const filter = document.getElementById("filter");

const listItems = [];

dataBase.forEach((user) => {
  const li = document.createElement("li");
  listItems.push(li);

  li.innerHTML = `
      <img src="${user.profilePic}" alt="${user.name}">
      <div class="user-info" >
         <h4>${user.name}</h4>
         <p> ${user.country}</p>
      </div>
    `;
  result.appendChild(li);
  console.log(listItems);
});

function filterUser(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

filter.addEventListener("input", (e) => {
  filterUser(e.target.value);
  console.log(filterUser(e.target.value));
});
