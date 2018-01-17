/*Side nav start*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/*Side nav end*/


$(document).on('click', '.feed-count-sec .dropdown-menu', function (e) {
  e.stopPropagation();
});