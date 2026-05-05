function loadComponent(id, file){
    fetch(file)
    .then(res => res.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    })
}

loadComponent("header","header.html");
loadComponent("main","main.html");
loadComponent("footer","footer.html"); 