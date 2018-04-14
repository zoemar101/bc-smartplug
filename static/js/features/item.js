
$(document).ready(function ()  {
    var table = $('#itemList').DataTable();
    var requestTB = $('#listRequest').DataTable();
    var logsTB = $('#logsTable').DataTable();
})

function viewDetails(data) {
$.ajax({
    		url: 'http://127.0.0.1:5000/tasks',
    		type:"GET",
    		dataType: "json",
    		success: function(resp) {

            }
		});

}

function deleteItem(id) {

    $.ajax({
    		url: '/deleteItem',
    		type:"GET",
    		data: {delid: id},
    		success: function() {
                location.reload()
            }
		});

    console.log("deleted="+id )
}

function updateItem(id){

    tcode = '#parcode_'+id
    tname = '#parname_'+id
    tquan = '#parquan_'+id
    tdis = '#pardis_'+id

    code = $(tcode).val()
    name = $(tname).val()
    quan = $(tquan).val()
    dis = $(tdis).val()


    $.ajax({
    		url: '/updateItem',
    		type:"GET",
    		data: {upid: id, upname: name, upcode:code, upquan:quan, updis: dis},
    		success: function() {
                location.reload()
            }
		});



}