let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("contact-map"), {
    center: { lat: 6.618849, lng: 3.364070 },
    zoom: 15
  });
}

/*div.logo-footer {
    width: 100px;
    height: 80px;
    margin: 5px auto;
    background-image: url(Assests/OnibataLogo.png);
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
}
div.rights {
    grid-area: m;
    margin:  10px auto;
    font-size: .75rem;
    font-family: 'Poppins', sans-serif;
}
div.rights p a {
    text-decoration: none;
    color: #2c0f0b;
}
div.socials {
    grid-area: n;
    margin: 10px auto;
}*/