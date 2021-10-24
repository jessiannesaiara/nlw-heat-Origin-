const formCracha =  document.getElementById('form-cracha')

formCracha.addEventListener('submit', (e) => {
  e.preventDefault();

  let github = document.getElementById('githubUser').value;
  let youtube = document.getElementById('youtubebUser').value;
  let facebook = document.getElementById('facebookUser').value;
  let instagram = document.getElementById('instagramUser').value;
  let twitter= document.getElementById('twitterUser').value;
 
  const socialMediaUser = {
   github,
   youtube,
   facebook,
   instagram,
   twitter
  }

let newCracha = JSON.parse(localStorage.getItem("newCracha") || "[]")
newCracha.push(socialMediaUser)
localStorage.setItem("newCracha", JSON.stringify(newCracha))

  window.location.href = "index.html"

})
  
 

  function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${socialMediaUser.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio 
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login  })
        
}


getGitHubProfileInfos()

/*let newCracha = JSON.parse(localStorage.getItem("newCracha") || "[]")
newCracha.push(socialMediaUser)
localStorage.setItem("newCracha", JSON.stringify(newCracha))*/




  // alert('cliente cadastrado com sucesso!!')

