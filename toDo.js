let newList = document.querySelector(".newList");

newList.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let lists = document.querySelector(".lists"),
            list = document.createElement("div"),
            toDo = document.createElement("div"),
            main = document.querySelector("main");
        main.appendChild(toDo)
        lists.appendChild(list);
        list.innerHTML = `<div class='active list'><h3 contenteditable='false'>${newList.value}</h3><img src='pencil.png'><div class='x'>x</div></div>`;
        toDo.innerHTML = `<div class='toDo active'><h1>${newList.value}</h1><div class='listz'></div><input placeholder="Enter new tasks here" type="text"></div>`;
        newList.value = "";
        list.classList.add('list' + (toDo.parentNode.childElementCount - 1));
        toDo.classList.add('list' + (toDo.parentNode.childElementCount - 1));
        document.querySelector(".listBlank").style.display = "none";
        if (document.querySelector(".lists").childElementCount >= 2) {
            document.querySelector("nav").querySelector(".active").classList.remove("active");
            document.querySelector("main").querySelector(".active").classList.remove("active");
        }
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
        document.querySelector(".lists").appendChild(list);
        for (let i = 0; i < document.querySelector(".lists").childElementCount; i++) {
            document.querySelectorAll(".x")[i].addEventListener("click", function() {
                this.parentNode.style.transition = ".5s";
                this.parentNode.style.opacity = "0";
                this.parentNode.style.marginTop = "-50px";
                setTimeout(sickGnasty = () => {
                    this.parentNode.remove();
                }, 500);
                document.querySelector("main").querySelector(`.list${i + 1}`).remove();
                if (document.querySelector("main").childElementCount === 1) {
                    document.querySelector(".listBlank").style.display = "block";
                }
            });
        }
    }
});