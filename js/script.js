function agregarTarea() {
    const tarea = document.querySelector("#taskInput").value;
    const lista = document.querySelector("#taskList");
    const elemento = document.createElement("li");
    const button = document.createElement("button");
    const confirmar = document.createElement("confirmar");
    const div = document.createElement("div");
    elemento.textContent = tarea;
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>`;
    confirmar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                            </svg>`;

    lista.append(elemento);
    elemento.append(div);
    div.append(button);
    button.before(confirmar);
    elemento.classList.add("bg-orange-500", "p-2", "flex", "justify-between", "items-center","rounded-xl", "mb-2");
    div.classList.add("flex");
    confirmar.classList.add("p-1", "justify-self-end", "mr-4");
}
function eliminarTarea(elemento) {
    elemento.remove()
}
function confirmarTarea() {

}
