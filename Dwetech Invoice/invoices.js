var post0 = '';
var details = localStorage.getItem('Saved')
    if(details == null){
        details = [];
    }else{
        details = JSON.parse(details)
    }
    
    $('.table').find('#addInvoicePrv').each(function(i, v){
        post0+=
        `<tr id=`+i+`>
        <td>`+details.invoice_serial+`</td>
        <td>`+details.from.name+`</td>
        <td>`+details.invoice_no+`</td>
        <td>`+details.Total+`</td>
        <td>`+details.invoice_due_date+`</td>
        <td>`+details.invoice_date+`</td>
        <td></td>
        <td><a href="viewInvoice.html"><i class="fa fa-file-o"></i> View</td>
        <td><i class="fa fa-times"></i> Remove</td>
        </tr>`
        $('.table').find('#addInvoicePrv').html(post0)
    });
    