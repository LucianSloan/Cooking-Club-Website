
function openSite() {
  var links = [
    "../Reciepe-temp.html",
    "../Home-made-chips.html",
    "../calender.html",
    "../Chiken-Katsu-and-Rice.html"]

    function randomSite() {
      var i = parseInt(Math.random() * sites.length);
      location.href = sites[i];
  }
}