var productName=document.getElementById("productName")
var productPrice=document.getElementById("productPrice")
var productType=document.getElementById("productType")
var productDesc = document.getElementById("productDesc");
var addProduct = document.getElementById("addProduct");
var tableBody = document.getElementById("tableBody");
var searchProduct = document.getElementById("searchProduct");
var updateProduct = document.getElementById("updateProduct");
var productList = []//global
var targetIndex = null;
var nameError=document.getElementById("nameError")
productList = JSON.parse(localStorage.getItem('products'))//null
if (!productList ) {
productList = []
}
display()
function addItem() {
    if (nameValidation()) {
    
        var product = {
            name: productName.value,
            price: productPrice.value,
            type: productType.value,
            desc: productDesc.value,      
        }
        
        productList.push(product)
        localStorage.setItem('products',JSON.stringify(productList))
        display()
        clearForm()  
        console.log(productList);
    }
    else {
        alert('false')
    }


    
    
}

function clearForm() {
    productName.value = "";
    productPrice.value = "";
    productType.value = "";
    productDesc.value = "";
}

function display() {
    var blackBox = '';
    for (var i = 0; i < productList.length;i++){
        blackBox += `
         <tr>
        <td>${i + 1}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].type}</td>
        <td>${productList[i].desc}</td>
        <td> <button class="btn btn-warning" onclick="edit(${i})">edit</button><button class="btn btn-danger mx-2" onclick="deleteItem(${i})">delete</button></td>

    </tr>
        `;
    }
    tableBody.innerHTML=blackBox
}
// oldArray = ['montsr', 'mohammed', 'wahba']//=>localstorgae
// newArray=['montsr','mohamed']//==>
function deleteItem(index){
    productList.splice(index, 1)
    localStorage.setItem('products',JSON.stringify(productList))
    console.log(productList)
        display();
    
    
    
}

function search() {
    var term = ''
    var text=''
    var blackBox = '';
    for (var i = 0; i < productList.length; i++){
        text = productList[i].name.toLowerCase()
        term = searchProduct.value.toLowerCase()
        if (text.includes(term)) {
          blackBox += `
         <tr>
        <td>${i + 1}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].type}</td>
        <td>${productList[i].desc}</td>
        <td> <button class="btn btn-warning">edit</button><button class="btn btn-danger mx-2" onclick="deleteItem(${i})">delete</button></td>

    </tr>
        `;
        }
    }
    tableBody.innerHTML=blackBox
    
}



function edit(index) {
    targetIndex=index
    productName.value = productList[index].name
    productPrice.value = productList[index].price
    productType.value = productList[index].type
    productDesc.value = productList[index].desc
    addProduct.classList.add('d-none');
    updateProduct.classList.remove('d-none')
}
 
function updateItem() {
    var product = {
        name:productName.value,
        price:productPrice.value,
        type:productType.value,
        desc:productDesc.value
    }
    productList.splice(targetIndex, 1, product)
    localStorage.setItem("products", JSON.stringify(productList));
    display();
addProduct.classList.remove("d-none");
    updateProduct.classList.add("d-none");
    clearForm()
}




function nameValidation() {
    var regex = /^[A-Z][a-z]{3,5}$/;
    var text = productName.value
    var result = regex.test(text)
    if(result){
        nameError.classList.add('d-none')
        productName.classList.add('is-valid')
        productName.classList.remove("is-invalid");

        return true
    }
    else {
        nameError.classList.remove('d-none')
        productName.classList.add("is-invalid");
        productName.classList.remove("is-valid");


        return false
    }
    
}

// local storage- session storage

// localStorage.setItem('names','montsr')
// localStorage.setItem('names','montsr2')
// console.log(localStorage.getItem("names"));
// localStorage.length()
// localStorage.removeItem('names')
// localStorage.clear()





//string methods
// var userName = " Mohamm ed "
// console.log(userName);

// length
// console.log(userName.length);
// console.log(userName.includes("x"));
// console.log(userName.indexOf("m"));
// console.log(userName.lastIndexOf("m"));
// console.log(userName.toLowerCase());
// console.log(userName.toUpperCase());
// console.log(userName.trim());
// console.log(userName.trimStart());
// console.log(userName.trimEnd());
// console.log(userName.startsWith(' m'));
// console.log(userName.endsWith(' m'));
// console.log(userName.replaceAll('m', 'x'));
// console.log(userName.replace('m', 'x'));
//!reduce http request
//!sql injection
//!SEO -PERFORMANCE
//?REGEX
// client side       - -----> request
// html-css-js                          response(error)<------                            -                  server side
// html-css-js       -                               -                  php -.net-nodejs
//  SELECT * FROM USERS

// 
// var regex = /^[A-Z][a-z]{3,5}$/;
// var text = "Montsr"
// console.log(regex.test(text));




