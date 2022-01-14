add = document.getElementById('AddButton');
update();
function del(item){
    console.log("delete clicked", item+1);
    x = localStorage.getItem('itemsJson')
    itemJsonArr = JSON.parse(x);
    itemJsonArr.splice(item, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr))
    update()

}
function updateOnClick(){
    document.getElementById("start_text").innerHTML = "";
    console.log("Button clicked");
    title_1 = document.getElementById('title').value;
    desc_1 = document.getElementById('description').value;
    if (!localStorage.getItem('itemsJson')) {
        itemJsonArr = [];
        itemJsonArr.push([title_1, desc_1]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr))
    }
    else {
        x = localStorage.getItem('itemsJson')
        itemJsonArr = JSON.parse(x);
        itemJsonArr.push([title_1, desc_1]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));
    }
    update()
}

function update(){
    x = localStorage.getItem('itemsJson')
    itemJsonArr = JSON.parse(x);

    body_of_table = document.getElementById("TableBody");
    let str = "";
    itemJsonArr.forEach((element, index) => {
        str += `    
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" onclick = del(${index})>Delete</button></td>
        </tr>
        `;
    });
    body_of_table.innerHTML = str;
}

add.addEventListener('click', updateOnClick)
