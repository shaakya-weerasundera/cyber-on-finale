function myFunction() {
    var x = document.getElementById("navTop");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }