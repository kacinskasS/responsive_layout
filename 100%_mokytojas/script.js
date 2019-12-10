var menu_toggle = document.getElementById('menu-toggle');

menu_toggle.addEventListener('click', toggle_menu);

function toggle_menu() {
    var navList = document.getElementById("overlay-menu");
    if (navList.classList.contains('show')) {
        navList.classList.remove('show');
        document.body.classList.remove('no-scroll');
    } else {
        navList.classList.add('show');
        document.body.classList.add('no-scroll');
    }
}

function load() {
    var macy = Macy({
        container: '#nominees',
        trueOrder: false,
        waitForImages: false,
        margin: 15,
        columns: 3,
        breakAt: {
            1142: 2,
            768: 1
        }
    });

}

window.addEventListener('load', load);