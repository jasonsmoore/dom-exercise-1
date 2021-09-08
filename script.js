const main = () => {
    document.getElementById("grow-me").classList.add("big");
    document.getElementById("shrink-me").classList.remove("big");
    document.querySelectorAll("li").forEach(element => console.log(element.innerText));
    document.getElementsByClassName("link")[0].setAttribute("href", "https://www.example.com");
    document.getElementsByClassName("link")[0].innerText = "somewhere";
    document.getElementById("hide-me").style.display = "none";
    document.getElementById("show-me").style.display = "block";
    let greeting = document.getElementById("name").value;
    document.querySelector("h1").innerText = `Welcome ${greeting}`;
}
