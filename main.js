class Product{
    constructor(id, name, amount, cost){
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.cost = cost;
    }

    getId(){
        return this.id;
    }

    value(){
        return this.amount * this.cost;
    }
}

let list = new Array();

let btnAdd = document.querySelector('#btnAdd');
btnAdd.addEventListener('click', addProduct);

let btnIns = document.querySelector('#btnInsert');
btnIns.addEventListener('click', insertProduct);

let btnDel = document.querySelector('#btnDelete');
btnDel.addEventListener('click', deleteProduct);

let btnSearch = document.querySelector('#btnSearch');
btnSearch.addEventListener('click', searchProduct);

let btnListN = document.querySelector('#btnNormalO');
btnListN.addEventListener('click', listProductsNormal);

let btnListR = document.querySelector('#btnReverseO');
btnListR.addEventListener('click', listProductsReverse);

function addProduct(){
    if(list.length < 20){
        let inpId = document.querySelector('#idA');
        let inpName = document.querySelector('#name');
        let inpAmount = document.querySelector('#amount');
        let inpCost = document.querySelector('#cost');

        let id = inpId.value;
        let name = inpName.value;
        let amount = Number(inpAmount.value);
        let cost = Number(inpCost.value);

        if(id && name && amount && cost){
            if(exist(id)){
                alert("Ya existe un producto con ese código");
            }else{
                let product = new Product(id, name, amount, cost);
                list.push(product);
                alert("El producto se ha agregado con exito");
                console.log(list);
            }

            inpId.value = '';
            inpName.value = '';
            inpAmount.value = '';
            inpCost.value = '';
        }else{
            alert("Se requieren todos los campos llenos");
        }
    }else{
        alert("Ya se ha alcanzado el límite de artículos (20). Elimine alguno para poder agregar uno nuevo.");
    }
}

function insertProduct(){
    if(list.length < 20){
        let inpId = document.querySelector('#idA');
        let inpName = document.querySelector('#name');
        let inpAmount = document.querySelector('#amount');
        let inpCost = document.querySelector('#cost');
        let inpPos = document.querySelector('#position');

        let id = inpId.value;
        let name = inpName.value;
        let amount = Number(inpAmount.value);
        let cost = Number(inpCost.value);
        let pos = Number(inpPos.value);

        if(id && name && amount && cost && pos){
            if(find(id) >= 0){
                alert("Ya existe un producto con ese código");
            }else if(pos > list.length || pos < 0){
                alert("Posición no válida");
            }else{
                let product = new Product(id, name, amount, cost);
                let lastIndex = list.length - 1;
                list.push(list[lastIndex]);
                for(let i = lastIndex; i >= pos; i--){
                    list[i] = list[i-1];
                }
                list[pos - 1] = product;
                alert("El producto se ha agregado con exito en la posición indicada");
                console.log(list);
            }

            inpId.value = '';
            inpName.value = '';
            inpAmount.value = '';
            inpCost.value = '';
            inpPos.value = '';
        }else{
            alert("Se requieren todos los campos llenos");
        }
    }else{
        alert("Ya se ha alcanzado el límite de artículos (20). Elimine alguno para poder agregar uno nuevo.");
    }
}

function deleteProduct(){
    let inpId = document.querySelector('#idE');
    let id = inpId.value;
    let index = find(id);
    if(index >= 0){
        for(let i = index; i < list.length; i++){
            list[i] = list[i+1];
        }
    }else{
        alert("No existe un producto con ese código");
    }
}

function searchProduct(){

}

function listProductsNormal(){

}

function listProductsReverse(){

}

function find(id){
    for(let i = 0; i < list.length; i++){
        if(id == list[i].getId()){
            return i;
        }
    }
    return -1;
}

