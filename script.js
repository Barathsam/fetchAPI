async function fetchData(){
  var response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    return response
  }
  fetchData()
  .then(function(response){
    return response.json()
  })
  .then(function(response){
    console.log(response)
  })
  .catch(function(err){
    console.log(err)
  })


  async function user(){
    await fetch("https://api.github.com/users/mojombo").then(function(response){
      return response.json()

    })
    .then(function(response){
      console.log(response)
    })
  }
 user()

  async function repo(){
    await fetch("https://api.github.com/users/mojombo/repos").then(function(response){
      return response.json()

    })
    .then(function(response){
      console.log(response)
    })
  }
 repo()


fetch("https://api.github.com/users/mojombo/repos")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
                var div = document.createElement("div");
                div.innerHTML = 'Name: ' + data[0].owner.login+
                                '<br> Forks Count: ' + data[0].forks_count +
                                '<br> Star Count:' + data[0].stargazers_count +
                                '<br> <br> Owner Profile <br>'+      
                                  '<img src="'+data[0].owner.avatar_url+'"/>';
                                
                mainContainer.appendChild(div);
            
        }