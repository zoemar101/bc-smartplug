//window.onload = initItems()
 var array;
function addMembers() {
    var x = document.getElementById("members").rows.length;
    var id = $("#memId").val();
    var name = $("#memName").val();
    var table = document.getElementById("members");
    if (id == ""){

    }
    else if  (name == ""){

    }
    else {
        var row = table.insertRow(x);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = id;
        cell2.innerHTML = name;
        $("#memId").val('');
        $("#memName").val('');
    }


}

function addEpt() {
    var x = document.getElementById("reqEpt").rows.length;
    var itm =  $("#llitems").val()
    var qty = $("#qtyEpt" ).val()
    console.log(itm)
    var table = document.getElementById("reqEpt");
    if (itm == ""){

    }
    else if  (qty == ""){

    }
    else {
        var row = table.insertRow(x);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = qty;
        cell2.innerHTML = itm;
        $("#llitems").val('');
        $("#qtyEpt").val('');
    }


}

function initItems(){
    var name = []
    var qnty = []
    $.ajax({
    		url: 'http://192.168.1.109:5000/getItems',
    		type:"GET",
    		dataType: "json",
    		success: function(resp) {
				$("#tasks").html("");
				if (resp.status  == 'ok') {
				  for (i = 0; i < resp.count; i++)
                                  {
                                      name.push(resp.entries[i].nameI)
                                      qnty.push(resp.entries[i].quantity)
	                          }
                    console.log(name)
				} else
				{
                                       $("#tasks").html("");
					alert(resp.message);
				}
    		}

		});

    $( function() {
    $( "#idnumber" ).autocomplete({
      source: name
    });
  } );

}

function getReqItem(){
    array = $.map($('table tr'),function(val,i){
      var obj = {};
      obj[$(val).find('td:first').text()] = $(val).find('td:last').text();
      return obj;
    });
    array.shift()
    //alert(JSON.stringify(array))
    array = JSON.stringify(array)

    li = JSON.parse(array)
    submitReq()

}

function submitReq(){
    reqidnum = $("#rqidnumber").val()
    reqname = $("#rqname").val()
    reqsub = $("#rqsubject").val()
    var x = document.getElementById("reqEpt").rows.length;
    //alert(array)

    if (reqidnum == ""){
        console.log("wala")
    }else if(reqname == ""){
        console.log("wala")
    }else if (reqsub == "") {
        console.log("wala")
    }else if(x == 1){
        $("#errTable").show()
    }else
    {
        $.ajax({
        url: 'http://127.0.0.1:5000/submitRequest',
        type: "GET",
        data: {parlist:array, parid:reqidnum, parname:reqname,parsub:reqsub},
        success: function (resp) {
            /*l = resp.listahan[0]
            l1 = resp.sulod
            l2 = JSON.stringify(l1);
            //alert(list)
            alert(l1)*/
            alert("Request Submitted!!")
        }
    })
    }

}

