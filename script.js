// start Create function to add task

let inputBox = document.querySelector('#inputBox');
let list = document.querySelector('#list');

inputBox.addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        addItem(this.value)
        this.value = ""
    }
})

let addItem = (inputBox) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputBox}<i></i>`;

        // success
        listItem.addEventListener("click", function(){
            this.classList.toggle('done');
        })

        // remove
        listItem.querySelector('i').addEventListener("click", function(){
            listItem.remove();
        })

        list.appendChild(listItem);
}

// end Create function to add task