let btnAdd = document.getElementById("submit");
let lista = document.querySelector(".lista");
let divExcluir = document.getElementById("divExcluir");
let user = document.getElementById("userinput");

btnAdd.addEventListener("click", () => {
   if (validacao(user.value)) {
        let item = document.createElement("li");
        item.setAttribute("class", "itens");
        let iconeExcluir = document.createElement("img");
        let iconeVerificar = document.createElement("img");
        let divLeft = document.createElement("div");
        divLeft.setAttribute("id", "left")
        let divRight = document.createElement("div");
        divRight.setAttribute("id", "right")
        divLeft.textContent = user.value;
        divRight.appendChild(AdicionarCheck(iconeVerificar));
        divRight.appendChild(AdicionarX(iconeExcluir));
        item.appendChild(divLeft);
        item.appendChild(divRight);
        lista.appendChild(item);
        ExcluirTarefa(AdicionarX(iconeExcluir), item);
        ChecarTarefa(AdicionarCheck(iconeVerificar), item);
        user.value = "";
        user.focus();
        divExcluir.style.visibility = "visible";
        divExcluir.addEventListener("click", () => {
            for (let i = 0; i < tarefas.length; i++) {
                tarefas[i].remove();
                cont = 0;
            }
        })

        divExcluir.addEventListener("mouseenter", () => {
            AdicionarX(iconeExcluir).classList.add('opacity')
        })

        divExcluir.addEventListener("mouseleave", () => {
            AdicionarX(iconeExcluir).classList.remove('opacity')
        })
    }

    else {
        alert("Digite algo para adicionar a lista de tarefas");
    }
})

let tarefas = document.getElementsByClassName("itens");
setInterval(() => {
    if (tarefas.length <= 0) {
        divExcluir.style.visibility = "hidden";
    }
    else {
        divExcluir.style.visibility = "visible";
    }
}, 50);

function validacao(value) {
    if (value === "") {
        return false;
    }
    else {
        return true;
    }

}

function AdicionarX(iconeX) {
    iconeX.setAttribute("class", "iconex")
    iconeX.setAttribute("src", "excluir.png");
    return iconeX;
}


function AdicionarCheck(iconeCheck) {
    iconeCheck.setAttribute("class" , "iconecheck")
    iconeCheck.setAttribute("src", "verificar.png");
    return iconeCheck;
}

function ExcluirTarefa(iconeX, tarefa) {
    iconeX.addEventListener("click", () => {
        tarefa.remove();
    })
}

function ChecarTarefa(iconeCheck, tarefa) {
    iconeCheck.addEventListener("click", () => {
        tarefa.style.textDecoration = "line-through";
    })
}




