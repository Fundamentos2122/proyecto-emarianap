const attr_toggle = "data-toggle";
const attr_target = "data-target";
const attr_dismiss = "data-dismiss";
const class_modal = "modal";
const class_show = "show";
const dropdown_class = "dropdown";
const dropdown_toggle = "dropdown-toggle";
const dropdown_menu_class = "dropdown-menu";    
const navbar_toggle = "navbar-toggle";
const menu_collapse_class = "navbar-collapse";

document.addEventListener("DOMContentLoaded", function() {
    //Botones que abren un modal    //todos lo elementos que tengan la sintáxis "[data-toggle='modal']"
    let modal_open_buttons = document.querySelectorAll(`[${attr_toggle}='${class_modal}']`) 

    modal_open_buttons.forEach(element => {
        element.addEventListener("click", OpenModal);
    });

    //Botones que cierran un modal    //todos lo elementos que tengan el atributo "[data-dismiss]"
    let modal_close_buttons = document.querySelectorAll(`[${attr_dismiss}]`) 

    modal_close_buttons.forEach(element => {
        element.addEventListener("click", CloseModal);
    });

    //Dropdown del submenu    
    let dropdown_buttons = document.querySelectorAll(`.${dropdown_class} > .${dropdown_toggle}`) 

    dropdown_buttons.forEach(element => {
        element.addEventListener("click", ToggleDropdown);
    });

    //Collapse del menú
    let collapse_menu_buttons = document.querySelectorAll(`.${navbar_toggle}`) 

    collapse_menu_buttons.forEach(element => {
        element.addEventListener("click", ToggleMenu);
    });
});

/**
 * Muestra un modal
 * @param {PointerEvent} e 
 */
function OpenModal(e){
    //Obtener el selector del elemento a mostrar
    let modal_selector = e.target.getAttribute(attr_target);

    //Obtener el elemento del DOM
    let modal = document.querySelector(modal_selector);

    //agregar la clase para mostrar el modal
    modal.classList.add(class_show);
}

/**
 * Cerra un modal
 * @param {PointerEvent} e 
 */
 function CloseModal(e){
    //Obtener el selector del elemento a ocultar
    let modal_selector = e.target.getAttribute(attr_dismiss);

    //Obtener el elemento del DOM
    let modal = document.querySelector(modal_selector);

    //Quitar la clase para mostrar el modal
    modal.classList.remove(class_show);
}


/**
 * Abrir y cerrar el submenú
 * @param {PointerEvent} e 
 */
function ToggleDropdown(e){
    e.preventDefault();     //evita el envío del link (ya no se recarga la pag)
    
    let submenu = e.target.parentNode.querySelector(`.${dropdown_menu_class}`);
    
    submenu.classList.toggle(class_show); //toggle quita o pone la clase show para mostrar
   
}

/**
 * Abrir y cerrar el menú
 * @param {PointerEvent} e 
 */
 function ToggleMenu(e){
    e.preventDefault();     //evita el envío del link (ya no se recarga la pag)
    
    let menu = e.target.parentNode.querySelector(`.${menu_collapse_class}`);
    
    menu.classList.toggle(class_show); //toggle quita o pone la clase show para mostrar
}

