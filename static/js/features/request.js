/**
 * Created by user on 12/26/2016.
 */
function getReq(id){
    $.ajax({
    		url: '/getReq',
    		type:"GET",
    		dataType: "JSON",
            data: {getid: id},
    		success: function(recs) {
                $("#reqrID").text("")
                $("#reqItems tr").remove();
                $("#reqrID").text(recs.res[0].id)

                var bt = '<button id="deleter" class="btn btn-danger" onclick="deleteReq('+ recs.res[0].reqID +')">DELETE REQUEST</button>'
                                $("#deleteREQ").empty()
                                document.getElementById('deleteREQ').innerHTML = bt;


                for (i = 0; i < recs.count; i++){
                        itmQuan = recs.res[i].itemquan
                        itmCode = recs.res[i].itemcode
                        itmName = recs.res[i].itemname
                        issdate = recs.res[i].issDate
                        itmID = recs.res[i].itemID
                        britemid = recs.res[i].britemid
                        console.log(britemid)


                        var x = document.getElementById("reqItems").rows.length;
                        var table = document.getElementById("reqItems");

                            var row = table.insertRow(x);
                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            var cell3 = row.insertCell(2);
                            var cell4 = row.insertCell(3);
                            cell1.innerHTML = itmQuan;
                            cell2.innerHTML = itmCode;
                            cell3.innerHTML = itmName;

                            if( issdate == null ){
                                cell4.innerHTML = '<button class="btn btn-default" onclick="notifya();issueItem('+britemid+')"> Release '+ britemid +' </button>'

                            }
                            else{
                                cell4.innerHTML = '<button class="btn btn-default" onclick="notifyRETURN();returnItem(' + britemid + ')"> Return </button>'
                                document.getElementById("deleter").disabled = true;
                            }

                }

                console.log(recs.res[0])
            }
		});
}

function deleteReq(id){
    $.ajax({
        url: '/deleteRequest',
        type: "GET",
        dataType: "JSON",
        data: {delreqid: id},
        success: function (recs) {
            console.log("ok")
            //location.reload()
        }
    })
     location.reload()
}

function issueItem(id){
    console.log(id)
    $.ajax({
        url: '/issueItem',
        type: "GET",
        dataType: "JSON",
        data: {issid: id},
        success: function (recs) {
            this.button.prop('disabled', true);
            console.log("ok")
        }
    })
}

function returnItem(id){
    console.log(id)
    $.ajax({
        url: '/returnItem',
        type: "GET",
        dataType: "JSON",
        data: {retid: id},
        success: function (recs) {
            console.log("ok")
        }
    })
}

function notifya(){
    alertify.success("Item Release !! :)");
}

function notifyRETURN(){
    alertify.success("Item Return !! :)");
}