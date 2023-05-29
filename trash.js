function openclosemodal() {
    var trash = document.querySelector("#trashtext")
    var count = Number(trash.textContent.split("(")[1].split(" ")[0]);
    if(count == 0) {
        count = count+1;
        trash.textContent = "В корзине(" + count + " товар)"
    } else if(count > 0 & count < 4) {
        count = count+1;
        trash.textContent = "В корзине(" + count + " товара)"
    } else {
        count = count+1;
        trash.textContent = "В корзине(" + count + " товаров)"
    }
}