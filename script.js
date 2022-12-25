const dropDownButton = document.getElementById("icon_mobile");
const dropDownMenu = document.getElementsByClassName("navbar__menu")[0];
const layer = document.getElementById("layer");
const closeButton = document.getElementById("closebutton");
const features = document.getElementById("features");
const featureslist = document.getElementById("featureslist");
const featuresListItems = Array.from(document.getElementsByClassName("featureslist__item"));
const featuresArrow = document.getElementById("featuresarrow");
const company = document.getElementById("company");
const companyList = document.getElementById("companylist");
const companyListItems = Array.from(document.getElementsByClassName("companylist__item"));
const companyArrow = document.getElementById("companyarrow");

// SIDEBAR OPEN
dropDownButton.addEventListener("click", () => {
    dropDownMenu.classList.toggle("navbar__menu--show");
    // LAYER ON
    layer.classList.toggle("show-layer");
    // ANIMATING THE MENU CLOSING BUTTON
    closeButton.classList.toggle("menu__closebutton--rotate");
}
)

// SIDEBAR CLOSE
closeButton.addEventListener("click", () => {
    dropDownMenu.classList.toggle("navbar__menu--show");
    // LAYER OFF
    layer.classList.toggle("show-layer");
    // ANIMATING THE MENU CLOSING BUTTON
    closeButton.classList.toggle("menu__closebutton--rotate");
    featureslist.classList.remove("list--show");
    featuresListItems.forEach(item => {
        item.classList.remove("featureslist__item--show")
    })
    companyList.classList.remove("list--show");
    companyListItems.forEach(item => {
        item.classList.remove("companylist__item--show")
    })
    featuresArrow.classList.remove("arrow--expand");
    companyArrow.classList.remove("arrow--expand");
})

// FEATURES LIST OPEN
features.addEventListener("click", () => {
    featureslist.classList.toggle("list--show");
    featuresListItems.forEach(item => {
        item.classList.toggle("featureslist__item--show")
    })
    featuresArrow.classList.toggle("arrow--expand")
})

//  COMPANY LIST OPEN
company.addEventListener("click", () => {
    companyList.classList.toggle("list--show");
    companyListItems.forEach(item => {
        item.classList.toggle("companylist__item--show")
    })
    companyArrow.classList.toggle("arrow--expand")
})
