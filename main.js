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

    getName(){
        return this.name;
    }

    getAmount(){
        return this.amount;
    }

    getCost(){
        return this.cost;
    }

    getValue(){
        return this.amount * this.cost;
    }
}

let titleAgregar = document.createElement("h1");
titleAgregar.innerHTML = 'Agregar e Insertar';

let inpCodigoA = document.createElement("input");
inpCodigoA.setAttribute('type', 'text');
inpCodigoA.setAttribute('style', 'margin-right: 2%;');
inpCodigoA.setAttribute('placeholder', 'Código');
inpCodigoA.setAttribute('id', 'idA');

let inpNombre = document.createElement("input");
inpNombre.setAttribute('type', 'text');
inpNombre.setAttribute('style', 'margin-right: 2%;');
inpNombre.setAttribute('placeholder', 'Nombre');
inpNombre.setAttribute('id', 'name');

let inpCantidad = document.createElement("input");
inpCantidad.setAttribute('type', 'number');
inpCantidad.setAttribute('style', 'margin-right: 2%;');
inpCantidad.setAttribute('placeholder', 'Cantidad');
inpCantidad.setAttribute('id', 'amount');

let inpCosto = document.createElement("input");
inpCosto.setAttribute('type', 'number');
inpCosto.setAttribute('style', 'margin-right: 2%;');
inpCosto.setAttribute('placeholder', 'Costo');
inpCosto.setAttribute('id', 'cost');

let btnAgregar = document.createElement("input");
btnAgregar.setAttribute('type', 'button');
btnAgregar.setAttribute('style', 'margin-right: 4%;');
btnAgregar.setAttribute('value', 'Agregar');
btnAgregar.setAttribute('id', 'btnAdd');

let inpPosicion = document.createElement("input");
inpPosicion.setAttribute('type', 'number');
inpPosicion.setAttribute('style', 'margin-right: 2%;');
inpPosicion.setAttribute('placeholder', 'Posición');
inpPosicion.setAttribute('id', 'position');

let btnInsertar = document.createElement("input");
btnInsertar.setAttribute('type', 'button');
btnInsertar.setAttribute('value', 'Insertar');
btnInsertar.setAttribute('id', 'btnInsert');

let titleEliminar = document.createElement("h1");
titleEliminar.innerHTML = 'Eliminar';

let inpCodigoE = document.createElement("input");
inpCodigoE.setAttribute('type', 'text');
inpCodigoE.setAttribute('style', 'margin-right: 2%;');
inpCodigoE.setAttribute('placeholder', 'Código de producto');
inpCodigoE.setAttribute('id', 'idE');

let btnEliminar = document.createElement("input");
btnEliminar.setAttribute('type', 'button');
btnEliminar.setAttribute('value', 'Eliminar');
btnEliminar.setAttribute('id', 'btnDelete');

let titleBuscar = document.createElement("h1");
titleBuscar.innerHTML = 'Buscar';

let inpCodigoB = document.createElement("input");
inpCodigoB.setAttribute('type', 'text');
inpCodigoB.setAttribute('style', 'margin-right: 2%;');
inpCodigoB.setAttribute('placeholder', 'Código de producto');
inpCodigoB.setAttribute('id', 'idB');

let btnBuscar = document.createElement("input");
btnBuscar.setAttribute('type', 'button');
btnBuscar.setAttribute('value', 'Buscar');
btnBuscar.setAttribute('id', 'btnSearch');

let resBusqueda = document.createElement("label");

let titleListar = document.createElement("h1");
titleListar.innerHTML = 'Listar todos los productos';

let btnNormal = document.createElement("input");
btnNormal.setAttribute('type', 'button');
btnNormal.setAttribute('style', 'margin-right: 2%;');
btnNormal.setAttribute('value', 'Orden normal');
btnNormal.setAttribute('id', 'btnNormalO');

let btnInverso = document.createElement("input");
btnInverso.setAttribute('type', 'button');
btnInverso.setAttribute('value', 'Orden inverso');
btnInverso.setAttribute('id', 'btnReverseO');

let listaProd = document.createElement("table");
listaProd.setAttribute('id', 'products');

document.body.appendChild(titleAgregar);
document.body.appendChild(inpCodigoA);
document.body.appendChild(inpNombre);
document.body.appendChild(inpCantidad);
document.body.appendChild(inpCosto);
document.body.appendChild(btnAgregar);
document.body.appendChild(inpPosicion);
document.body.appendChild(btnInsertar);
document.body.appendChild(titleEliminar);
document.body.appendChild(inpCodigoE);
document.body.appendChild(btnEliminar);
document.body.appendChild(titleBuscar);
document.body.appendChild(inpCodigoB);
document.body.appendChild(btnBuscar);
document.body.appendChild(resBusqueda);
document.body.appendChild(titleListar);
document.body.appendChild(btnNormal);
document.body.appendChild(btnInverso);
document.body.appendChild(listaProd);

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
            if(find(id) >= 0){
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
    if(id){
        let index = find(id);
        if(index >= 0){
            alert(`Se ha eliminado el producto: ${list[index].getName()}`);
            for(let i = index; i < list.length - 1; i++){
                list[i] = list[i+1];
            }
            list.pop();
            
            console.log(list);
        }else{
            alert("No existe un producto con ese código");
        }
        inpId.value = '';
    }else{
        alert("No se ha indicado el codigo del producto a eliminar");
    }
}

function searchProduct(){
    resBusqueda.innerHTML = "";
    let inpId = document.querySelector('#idB');
    let id = inpId.value;

    if(id){
        let index = find(id);
        if(index >= 0){
            let product = list[index];
            resBusqueda.innerHTML = `<br> Posición: ${index + 1}     Código: ${product.getId()}     Nombre: ${product.getName()}     Cantidad: ${product.getAmount()}     Costo: $${product.getCost()}     Valor total de mercancia: $${product.getValue()}`;
        }else{
            alert("No existe un producto con ese código");
        }
    }else{
        alert("No se ha indicado el codigo del producto a buscar");
    }
}

function listProductsNormal(){
    let productsList = document.querySelector('#products');
    productsList.innerHTML = "";
    if(list.length > 0){
        let row = productsList.insertRow(-1);
        let colPos = row.insertCell(0);
        let colId = row.insertCell(1);
        let colName = row.insertCell(2);
        let colAmount = row.insertCell(3);
        let colCost = row.insertCell(4);
        let colValue = row.insertCell(5);

        colPos.innerHTML = "Posición";
        colId.innerHTML = "Código";
        colName.innerHTML = "Nombre";
        colAmount.innerHTML = "Cantidad";
        colCost.innerHTML = "Costo";
        colValue.innerHTML = "Valor de mercancia";

        for(let i = 0; i < list.length; i++){
            let row = productsList.insertRow(-1);
            let colPos = row.insertCell(0);
            let colId = row.insertCell(1);
            let colName = row.insertCell(2);
            let colAmount = row.insertCell(3);
            let colCost = row.insertCell(4);
            let colValue = row.insertCell(5);

            let product = list[i];

            colPos.innerHTML = i + 1;
            colId.innerHTML = product.getId();
            colName.innerHTML = product.getName();
            colAmount.innerHTML = product.getAmount();
            colCost.innerHTML = product.getCost();
            colValue.innerHTML = product.getValue();
        }
    }else{
        alert("No hay productos registrados aún");
    }
}

function listProductsReverse(){
    let productsList = document.querySelector('#products');
    productsList.innerHTML = "";
    if(list.length > 0){
        let row = productsList.insertRow(-1);
        let colPos = row.insertCell(0);
        let colId = row.insertCell(1);
        let colName = row.insertCell(2);
        let colAmount = row.insertCell(3);
        let colCost = row.insertCell(4);
        let colValue = row.insertCell(5);

        colPos.innerHTML = "Posición";
        colId.innerHTML = "Código";
        colName.innerHTML = "Nombre";
        colAmount.innerHTML = "Cantidad";
        colCost.innerHTML = "Costo";
        colValue.innerHTML = "Valor de mercancia";

        for(let i = list.length; i > 0; i--){
            let row = productsList.insertRow(-1);
            let colPos = row.insertCell(0);
            let colId = row.insertCell(1);
            let colName = row.insertCell(2);
            let colAmount = row.insertCell(3);
            let colCost = row.insertCell(4);
            let colValue = row.insertCell(5);

            let product = list[i-1];

            colPos.innerHTML = i;
            colId.innerHTML = product.getId();
            colName.innerHTML = product.getName();
            colAmount.innerHTML = product.getAmount();
            colCost.innerHTML = product.getCost();
            colValue.innerHTML = product.getValue();
        }
    }else{
        alert("No hay productos registrados aún");
    }
}

function find(id){
    for(let i = 0; i < list.length; i++){
        if(id == list[i].getId()){
            return i;
        }
    }
    return -1;
}