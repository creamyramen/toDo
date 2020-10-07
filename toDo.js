let newList = document.querySelector(".newList"),
    a = "active";

newList.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let lists = document.querySelector(".lists"),
            list = document.createElement("div"),
            toDo = document.createElement("div"),
            nav = document.querySelector("nav"),
            main = document.querySelector("main");
        main.appendChild(toDo)
        lists.appendChild(list);
        list.innerHTML = `<h3 contenteditable='false'>${newList.value}</h3><div class="iconWrap"><img src='pencil.png'><div class='x'>x</div></div>`;
        toDo.innerHTML = `<h1>${newList.value}</h1><div class='listz'></div><input placeholder="Enter new tasks here" type="text"><p class="rmv">Remove completed tasks</p>`;
        newList.value = "";
        list.classList.add("list", `${a}`);
        toDo.classList.add("toDo", `${a}`);
        document.querySelector(".listBlank").style.display = "none";
        if (document.querySelector(".lists").childElementCount >= 2) {
            nav.querySelector(`.${a}`).classList.remove(`${a}`);
            main.querySelector(`.${a}`).classList.remove(`${a}`);
        }
        list.querySelector("h3").addEventListener("click", function() {
            nav.querySelector(`.${a}`).classList.remove(`${a}`);
            main.querySelector(`.${a}`).classList.remove(`${a}`);
            list.classList.add(`${a}`);
            toDo.classList.add(`${a}`);
        });
        list.querySelector("img").addEventListener("click", function() {
            nav.querySelector(`.${a}`).classList.remove(`${a}`);
            main.querySelector(`.${a}`).classList.remove(`${a}`);
            list.classList.add(`${a}`);
            toDo.classList.add(`${a}`);
            this.parentNode.children[0].setAttribute("contenteditable", "true");
            this.parentNode.children[0].focus();
            let range = document.createRange(),
                selection = window.getSelection();
            range.selectNodeContents(this.parentNode.children[0]);
            selection.removeAllRanges();
            selection.addRange(range);
            list.querySelector("h3").addEventListener("keydown", function(keyNum) {
                toDo.querySelector("h1").innerHTML = this.innerHTML;
                if (keyNum.keyCode === 13) {
                    this.setAttribute("contenteditable", "false");
                    toDo.querySelector("h1").innerHTML = this.innerHTML;
                }
            });
        });
        list.querySelector(".x").addEventListener("click", function() {
            list.classList.add("dead");
            setTimeout(sickGnasty = () => {
                if (list.classList.contains(`${a}`) === true) {
                    list.remove();
                    toDo.remove();
                    if (lists.childElementCount === 0) {
                        document.querySelector(".listBlank").style.display = "block";
                    } else {
                        nav.querySelectorAll(".list")[lists.childElementCount - 1].classList.add(`${a}`);
                        main.querySelectorAll(".toDo")[lists.childElementCount - 1].classList.add(`${a}`);
                    };
                } else {
                    list.remove();
                    toDo.remove();
                }
            }, 100);
        });
        let input = toDo.querySelector("input");
        input.addEventListener("keydown", function(event) {
            if (event.keyCode === 13) {
                let listz = toDo.querySelector(".listz"),
                    listItem = document.createElement("div"),
                    rmv = toDo.querySelector(".rmv");
                rmv.classList.add("remove");
                listItem.innerHTML = `<input type="checkbox"><p>${input.value}</p><div class="iconWrap"><img src="pencil.png"><div class="listX">x</div></div>`;
                listItem.classList.add("listItem");
                listz.appendChild(listItem);
                input.value = "";
                listItem.querySelector("img").addEventListener("click", function() {
                    this.parentNode.parentNode.children[1].setAttribute("contenteditable", "true");
                    this.parentNode.parentNode.children[1].focus();
                    let range = document.createRange(),
                        selection = window.getSelection();
                    range.selectNodeContents(this.parentNode.parentNode.children[1]);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    this.parentNode.parentNode.children[1].addEventListener("keydown", function(keyNum) {
                        if (keyNum.keyCode === 13) {
                            this.setAttribute("contenteditable", "false");
                        }
                    });
                });
                rmv.addEventListener("click", lit = () => {
                    if (listItem.querySelector("input").checked === true) {
                        listItem.querySelector("input").parentNode.classList.add("finished");
                        setTimeout(supertime = () => {
                            listItem.remove();
                        }, 100);
                    }
                })
                listItem.querySelector(".listX").addEventListener("click", function() {
                    listItem.classList.add("dead");
                    setTimeout(epicTime = () => {
                        listItem.remove();
                        if (listz.childElementCount === 0) {
                            rmv.classList.remove("remove");
                        }
                    }, 100);
                });
            }
        });
        lists.appendChild(list);
    }
});

let borger = document.querySelector(".borger");

borger.addEventListener("click", function() {
    borger.classList.toggle("burgerWrap");
    borger.classList.toggle("xWrap");
    document.querySelector("nav").classList.toggle("off")
});