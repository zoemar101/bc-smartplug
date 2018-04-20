/**
 * Created by JOMAR T. BALUARTE on 17 Apr 2018.
 */
$(function() {
    $('#change-stat').change(function() {
      $('#status').html($(this).prop('checked'))
    })

  })

function changestat () {
    $.ajax({
        url:'/transactions/new',
        type:'',
        dataType:'POST',

        success: function(response){}

    })
}
