 
 function fun(file, tablename){
    // Создаем объект XMLHttpRequest
    var xhttp = new XMLHttpRequest();

    // Загружаем XML-документ
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Получаем содержимое XML-документа
        var xmlDoc = this.responseXML;

        // Получаем все элементы "товар"
        var table = xmlDoc.getElementsByTagName(tablename);

        var htmlTable = document.getElementById('table')

        htmlTable.innerHTML = "<tr><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Паспортные данные</th><th>Наказание</th></tr>"

        // Отображаем товары на странице
        for (var i = 0; i < table.length; i++) {
        var surname = table[i].getElementsByTagName("Фамилия")[0].childNodes[0].nodeValue;
        var name = table[i].getElementsByTagName("Имя")[0].childNodes[0].nodeValue;
        var fathername = table[i].getElementsByTagName("Отчество")[0].childNodes[0].nodeValue;
        var passport = table[i].getElementsByTagName("Паспортные_x0020_данные")[0].childNodes[0].nodeValue;
        var punishment = table[i].getElementsByTagName("Наказание")[0].childNodes[0].nodeValue;
        var item = document.createElement("tr");
        //item.innerHTML = surname + " " + name + " " + fathername + " " + passport + " " + punishment;
        item.innerHTML = "<td>" + surname + "</td>" + "<td>" + name + "</td>" + "<td>" + fathername + "</td>" + "<td>" + passport + "</td>" + "<td>" + punishment + "</td>" ;
        htmlTable.appendChild(item);
        }
    }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
}