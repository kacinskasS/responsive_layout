var menu_toggle = document.getElementById('menu_toggle');

menu_toggle.addEventListener('click', toggle_menu);

function toggle_menu() {
    var navList = document.getElementById("show_menu");
    if (navList.classList.contains('show')) {
        navList.classList.remove('show')
    } else {
        navList.classList.add('show')
    }
}