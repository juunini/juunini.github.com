class Spa {

    public header() {
        let xhttp = new XMLHttpRequest;
        let header = document.querySelector("header")[0];
        xhttp.onreadystatechange = () => {
            header.innerHTML = xhttp.responseXML;
        }
        xhttp.open("GET", "./header.html", true);
        xhttp.send();
    }

    public side(){
        let xhttp = new XMLHttpRequest;
        let header = document.querySelector("aside")[0];
        xhttp.onreadystatechange = () => {
            header.innerHTML = xhttp.responseXML;
        }
        xhttp.open("GET", "./side.html", true);
        xhttp.send();
    }

}