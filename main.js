
!function() 
{
    

    let arr = [],
        l = document.getElementById("l"),
        r = document.getElementById("r"),
        contenido = document.getElementById("contenido"),
        textos = document.querySelectorAll("[data-text]"),
        cont = 0,
        total = arr.length,
        miniatura = document.querySelectorAll("[data-target]"),
        arr2 = [], arrAlt = [],
        $total2 = miniatura.length,
        l2 = document.getElementById("l2"),
        r2 = document.getElementById("r2"),
        c = 0, u = 1, d = 2, t = 3, o = 4,
        links = document.querySelectorAll("[data-link]"),
        arr3 = [],
        $total3,
        c2 = 0, u2 = 1, d2 = 2, t2 = 3, o2 = 4,
        titulo_min = document.querySelectorAll("[data-ta]"),
        arr4 = [],
        main_text = document.getElementById("main-text")




    titulo_min.forEach(valor => {
        arr4.push(valor.textContent)
        valor.addEventListener("click", () => {
            main_text.textContent = valor.textContent
        })

    })


    for (let i = 0; i < miniatura.length; i++) {
        miniatura[i].setAttribute("alt", arr4[i])
    }



    links.forEach(valor => {
        arr3.push(valor.href)
    })





    links.forEach((value, i) => {
        value.addEventListener("click", (e) => {
            console.log(value.getAttribute("href"));
            miniatura[i].classList.remove("no-active")
            textos[0].textContent = miniatura[i].alt
            contenido.setAttribute("src", value.getAttribute("href"))
            e.preventDefault()
        })

    })
    $total3 = arr3.length


    console.log(arr3.length, $total3);




    miniatura.forEach(elemento => {
        arr2.push(elemento.src)
        arrAlt.push(elemento.alt)
    });




    miniatura.forEach(hola => {
        hola.addEventListener("click", () => {
            console.log(hola.getAttribute("src"));
        })
    })

    contenido.src = arr3[0]
    main_text.textContent = arr4[0]



    l2.addEventListener("click", () => {
        --c
        c < 0 ? c = ($total2 - 1) : console.log("izquierda");

        --u
        u < 0 ? u = ($total2 - 1) : console.log("izquierda");

        --d
        d < 0 ? d = ($total2 - 1) : console.log("izquierda");

        --t
        t < 0 ? t = ($total2 - 1) : console.log("izquierda");

        --o
        o < 0 ? o = ($total2 - 1) : console.log("izquierda");


        miniatura[0].setAttribute("src", arr2[c])
        miniatura[1].setAttribute("src", arr2[u])
        miniatura[2].setAttribute("src", arr2[d])
        miniatura[3].setAttribute("src", arr2[t])
        miniatura[4].setAttribute("src", arr2[o])




        miniatura[0].setAttribute("alt", arrAlt[c])
        miniatura[1].setAttribute("alt", arrAlt[u])
        miniatura[2].setAttribute("alt", arrAlt[d])
        miniatura[3].setAttribute("alt", arrAlt[t])
        miniatura[4].setAttribute("alt", arrAlt[o])


        titulo_min[0].textContent = arr4[c]
        titulo_min[1].textContent = arr4[u]
        titulo_min[2].textContent = arr4[d]
        titulo_min[3].textContent = arr4[t]
        titulo_min[4].textContent = arr4[o]



        links[0].setAttribute("href", arr3[c])
        links[1].setAttribute("href", arr3[u])
        links[2].setAttribute("href", arr3[d])
        links[3].setAttribute("href", arr3[t])
        links[4].setAttribute("href", arr3[o])
    })




    r2.addEventListener("click", () => {
        c < ($total2 - 1) ? ++c : c = 0
        u < ($total2 - 1) ? ++u : u = 0
        d < ($total2 - 1) ? ++d : d = 0
        t < ($total2 - 1) ? ++t : t = 0
        o < ($total2 - 1) ? ++o : o = 0

        miniatura[0].setAttribute("src", arr2[c])
        miniatura[1].setAttribute("src", arr2[u])
        miniatura[2].setAttribute("src", arr2[d])
        miniatura[3].setAttribute("src", arr2[t])
        miniatura[4].setAttribute("src", arr2[o])



        miniatura[0].setAttribute("alt", arrAlt[c])
        miniatura[1].setAttribute("alt", arrAlt[u])
        miniatura[2].setAttribute("alt", arrAlt[d])
        miniatura[3].setAttribute("alt", arrAlt[t])
        miniatura[4].setAttribute("alt", arrAlt[o])



        titulo_min[0].textContent = arr4[c]
        titulo_min[1].textContent = arr4[u]
        titulo_min[2].textContent = arr4[d]
        titulo_min[3].textContent = arr4[t]
        titulo_min[4].textContent = arr4[o]



        links[0].setAttribute("href", arr3[c])
        links[1].setAttribute("href", arr3[u])
        links[2].setAttribute("href", arr3[d])
        links[3].setAttribute("href", arr3[t])
        links[4].setAttribute("href", arr3[o])
    })







    l.addEventListener("click", () => {
        --cont
        cont < 0 ? cont = ($total3 - 1) : console.log("izquierda");
        contenido.setAttribute("src", arr3[cont])

        main_text.textContent = arr4[cont]

    })



    r.addEventListener("click", () => {
        ++cont
        cont < $total3 ? console.log("derecha") : cont = 0
        contenido.setAttribute("src", arr3[cont])

        main_text.textContent = arr4[cont]

    })


}();


















