let newList = document.querySelector(".newList");

newList.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let list = document.createElement("div"),
            listTitle = document.createElement("h3"),
            listName = newList.value,
            x = document.createElement("div"),
            edit = document.createElement("img"),
            toDo = document.createElement("div"),
            h1 = document.createElement("h1"),
            input = document.createElement("input"),
            listz = document.createElement("div");
        input.placeholder = "Enter new tasks here";
        input.classList.add("newListItem");
        input.type = "text";
        document.querySelector("main").appendChild(toDo);
        toDo.classList.add("toDo");
        toDo.classList.add("active");
        toDo.appendChild(h1);
        toDo.appendChild(listz);
        listz.classList.add("listz");
        toDo.appendChild(input);
        h1.innerHTML = newList.value;
        list.appendChild(listTitle);
        list.appendChild(edit);
        list.appendChild(x);
        listTitle.innerHTML = listName;
        listTitle.setAttribute("contenteditable", "false");
        list.classList.add("list");
        x.classList.add("x");
        x.innerHTML = "x";
        edit.src = "pencil.png";
        newList.value = "";
        list.classList.add('list' + (toDo.parentNode.childElementCount - 1));
        toDo.classList.add('list' + (toDo.parentNode.childElementCount - 1));
        document.querySelector(".listBlank").style.display = "none";
        input.addEventListener("keydown", function(event) {
            if (event.keyCode === 13) {
                let listItem = document.createElement("div"),
                    check = document.createElement("input"),
                    p = document.createElement("p"),
                    iconWrap = document.createElement("div"),
                    whitePencil = document.createElement("img"),
                    listX = document.createElement("div");
                listItem.classList.add("listItem");
                check.type = "checkbox";
                iconWrap.classList.add("iconWrap");
                whitePencil.src = "pencil.png";
                listX.classList.add("listX");
                listX.innerHTML = "x";
                p.innerHTML = input.value;
                listz.appendChild(listItem);
                listItem.appendChild(check);
                listItem.appendChild(p);
                listItem.appendChild(iconWrap);
                iconWrap.appendChild(whitePencil);
                iconWrap.appendChild(listX);
                input.value = "";
                for (let i = 0; i < listz.childElementCount; i++) {
                    document.querySelectorAll(".listX")[i].addEventListener("click", function() {
                        this.parentNode.parentNode.style.transition = "1s";
                        this.parentNode.parentNode.style.opacity = "0";
                        this.parentNode.parentNode.style.marginTop = "-50px";
                        let epic = this;
                        setTimeout(litTime = () => {
                            this.parentNode.parentNode.remove();
                        }, 1000);
                    });
                }
            }
        });
        document.querySelector(".lists").appendChild(list);
        for (let i = 0; i < document.querySelector(".lists").childElementCount; i++) {
            document.querySelectorAll(".x")[i].addEventListener("click", function() {
                this.parentNode.style.transition = "1s";
                this.parentNode.style.opacity = "0";
                this.parentNode.style.marginTop = "-50px";
                setTimeout(sickGnasty = () => {
                    this.parentNode.remove();
                }, 1000);
                document.querySelector("main").querySelector(".list" + (i + 1)).remove();
                console.log(i + 1);
                if (document.querySelector("main").childElementCount === 1) {
                    document.querySelector(".listBlank").style.display = "block";
                }
            });
            // }
            // for (let i = 0; i < document.querySelector(".lists").childElementCount; i++) {
            //     document.querySelectorAll("img")[i].addEventListener("click", function() {
            //         this.previousElementSibling.contentEditable = "true";
            //         let superEpic = this;
            //         this.parentNode.addEventListener("keydown", function(ev) {
            //         })
            //     });
            // }
        }
    }
});