function loadpage(page, element){
  var heading = document.getElementById("heading");
  var content = document.getElementById("content");
  var links = document.querySelectorAll("#links li");

  // remove active from all
  links.forEach((li) => {
    li.classList.remove("active");
  });

  // add active to clicked li ✅
  element.classList.add("active");

  // change content
  if (page === "My task") {
    heading.innerText = "My Task";
    content.innerText = "Here you can manage your daily tasks ✅";
  } 
  else if (page === "Tutorial") {
    heading.innerText = "Tutorial";
    content.innerText = "Watch and learn tutorials 📚";
  } 
  else if (page === "Notification") {
    heading.innerText = "Notification";
    content.innerText = "All your notifications appear here 🔔";
  } 
  else {
    heading.innerText = "Website Blocker";
    content.innerText = "Block distracting websites 🚫";
  }  
}

