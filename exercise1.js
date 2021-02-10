
const getGithubProfile = async () => {
    const api = "https://api.github.com/users/yoshi-dharman";

    fetch(api)
    .then((response) => response.json())
    .then((data) => display(data))
    .catch((error) => console.log("error ",error ));

    // let response = await fetch(api);
    // let result = await response.json();
    // console.log(result);
  };
  
let display = (result) => {
  let githubDataID = document.getElementById("githubData");
  githubDataID.innerHTML = `
      <div class="data-github"><img src="${result.avatar_url}" alt=""> </div>
      <div class="data-github">
        <p>Nama : ${result.name}</p>
        <p>Bio : ${result.bio}</p>
        <p>Followers : ${result.followers}</p>
        <p>Following : ${result.following}</p>
      </div>
  `;
  console.log(result);
}

getGithubProfile();