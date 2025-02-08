<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>بحث في الجدول</title>
<style>
    body {
        font-family: Arial, sans-serif;
        text-align: center;
    }
    table {
        margin: 20px auto;
        border-collapse: collapse;
        width: 80%;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
    }
    th {
        background-color: #f2f2f2;
    }
    input[type="text"] {
        padding: 5px;
        margin-bottom: 10px;
    }
</style>
</head>
<body>

<h1>بحث في الجدول</h1>

<input type="text" id="searchInput" onkeyup="searchTable()" placeholder="ابحث هنا...">

<table id="dataTable">
  <tr>
    <th>عمود 1</th>
    <th>عمود 2</th>
  </tr>
  <tr>
    <td>قيمة 1</td>
    <td>قيمة 2</td>
  </tr>
  <tr>
    <td>قيمة 3</td>
    <td>قيمة 4</td>
  </tr>
  <!-- يمكنك إضافة صفوف إضافية هنا -->
</table>

<script>
function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");
    
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0]; // يمكنك تغيير الفهرس هنا ليكون العمود الذي تريد البحث فيه
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}
</script>

</body>
</html>