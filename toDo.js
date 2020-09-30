let newList = document.querySelector(".newList");

newList.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let lists = document.querySelector(".lists"),
            list = document.createElement("div"),
            toDo = document.createElement("div"),
            nav = document.querySelector("nav"),
            main = document.querySelector("main");
        main.appendChild(toDo)
        lists.appendChild(list);
        list.innerHTML = `<h3 contenteditable='false'>${newList.value}</h3><img src='pencil.png'><div class='x'>x</div>`;
        toDo.innerHTML = `<h1>${newList.value}</h1><div class='listz'></div><input placeholder="Enter new tasks here" type="text">`;
        newList.value = "";
        list.classList.add(`list${toDo.parentNode.childElementCount - 1}`, "list", "active");
        toDo.classList.add(`list${toDo.parentNode.childElementCount - 1}`, "toDo", "active");
        document.querySelector(".listBlank").style.display = "none";
        if (document.querySelector(".lists").childElementCount >= 2) {
            nav.querySelector(".active").classList.remove("active");
            main.querySelector(".active").classList.remove("active");
        }
        list.querySelector("h3").addEventListener("click", function() {
            nav.querySelector(".active").classList.remove("active");
            main.querySelector(".active").classList.remove("active");
            list.classList.add("active");
            toDo.classList.add("active");
        });
        list.querySelector(".x").addEventListener("click", function() {
            list.classList.add("dead");
            setTimeout(sickGnasty = () => { list.remove(); }, 500);
            if (list.classList.contains("active") === true) {
                list.remove();
                toDo.remove();
                if (lists.childElementCount === 0) { document.querySelector(".listBlank").style.display = "block"; } else {
                    nav.querySelectorAll(".list")[lists.childElementCount - 1].classList.add("active");
                    main.querySelectorAll(".toDo")[lists.childElementCount - 1].classList.add("active");
                };
            }
        });
        let input = toDo.querySelector("input");
        input.addEventListener("keydown", function(event) {
            if (event.keyCode === 13) {
                let listz = toDo.querySelector(".listz");
                let listItem = document.createElement("div");
                listItem.innerHTML = `<input type="checkbox"><p>${input.value}</p><div class="iconWrap"><img src="pencil.png"><div class="listX">x</div></div>`;
                listItem.classList.add("listItem");
                listz.appendChild(listItem);
                input.value = "";
                for (let i = 0; i < listz.childElementCount; i++) {
                    document.querySelectorAll(".listX")[i].addEventListener("click", function() {
                        this.parentNode.parentNode.style.transition = ".5s";
                        this.parentNode.parentNode.style.opacity = "0";
                        this.parentNode.parentNode.style.marginTop = "-50px";
                        let epic = this;
                        setTimeout(litTime = () => {
                            this.parentNode.parentNode.remove();
                        }, 500);
                    });
                }
            }
        });
        lists.appendChild(list);
    }
});