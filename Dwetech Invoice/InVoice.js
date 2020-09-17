var Invoice = {
    
    from: {
        name: '',
        address: ''
    },
    to: {
        name: '',
        address: ''
    },
    invoice_no: '',
    invoice_serial: '',
    invoice_date: '',
    invoice_due_date: '',
    items: [],
    invocie_notes: '',
    paid: 0,
    Total: '',
}


function addList(){
    $('#formList').append(` <form class="mb-3" id="From-Group" class="From-Group" >
    <div class="form-row">
      <div class="col">
          <p >Item</p>
        <select name="Select" id="Select" class="form-control selectOption" style="border: none;">
            <Option>Product</Option>
            <Option>Service</Option>
            <Option>Expense</Option>
            <Option>Hours</Option>
            <Option>Days</Option>
        </select>
      </div>
      <div class="col">
          <p >Description</p>
          <textarea name="textarea" id="textareaDes" placeholder="Des" class="form-control textareaDes" rows="1" style="border: none; resize: none;"></textarea>
      </div>
      <div class="col">
          <p>UnitPrice</p>
            <input  type="number" class="form-control UnitPrice calculateMe" onkeyup="Calculate()" placeholder="U.P." style="border: none;" >
      </div>
      <div class="col">
        <p>Quantity</p>
        <input type="number" class="form-control Quantity calculateMe" onkeyup="Calculate()" style="border: none;" placeholder="Q.T"  >
    </div>
    <div class="col">
        <p>Amount</p>
        <input  class="form-control Amount" id="Amount" style="border: none;"type="text" onkeyup="CalculateTotal()" placeholder="Amount" >
    </div>
    </div>
    
  </form>`)
}


function getAllItems(){
   
        
        Invoice.from.name = $('#firstFromForm').find('#FormInput').val();
        Invoice.from.address =   $('#firstFromForm').find('#textareaAddressFrom').val();

            $('#firstFromForm').find('#FormInput').val('');
            $('#firstFromForm').find('#textareaAddressFrom').val('');

        Invoice.to.name = $('#firstFromForm').find('#ToInput').val()
        Invoice.to.address = $('#firstFromForm').find('#FormTotextareaAddress').val()
                    
         
       Invoice.invoice_no = $('#SecondFromForm').find('#INVOICE_NAME').val();
        Invoice.invoice_serial= $('#SecondFromForm').find('#InvoiceSerial').val();
        Invoice.invoice_date= $('#SecondFromForm').find('#InvoiceDate').val();
        Invoice.invoice_due_date = $('#SecondFromForm').find('#DueDate').val();

        $('#SecondFromForm').find('#INVOICE_NAME').val('');
        $('#SecondFromForm').find('#InvoiceSerial').val('');
        $('#SecondFromForm').find('#InvoiceDate').val('');
        $('#SecondFromForm').find('#DueDate').val('');
        
        

        

        $('#formList').find('.form-row').each(function(i, v){
            if($(v).find('.selectOption  option:selected').val() != '' && $(v).find('.textareaDes').val() != '' && $(v).find('.UnitPrice').val() != ''
            && $(v).find('.Quantity').val() != '' && $(v).find('.Amount').val() != '' ){
                Invoice.items.push({
                    select: $(v).find('.selectOption  option:selected').val(),
                    description:  $(v).find('.textareaDes').val(),
                    UnitPrice: $(v).find('.UnitPrice').val(),
                    Quantity:  $(v).find('.Quantity').val(),
                    Amount: $(v).find('.Amount').val(),
                })
            }
        })
        

        $('#formList').find('.textareaDes').val('');
        $('#formList').find('.UnitPrice').val('');
        $('#formList').find('.Quantity').val('');
        $('#formList').find('.Amount').val('');
        $('.col-12').find('#formList').html(` <form class="mb-3" id="From-Group" class="From-Group" >
        <div class="form-row">
          <div class="col">
              <p >Item</p>
            <select name="Select" id="Select" class="form-control selectOption" style="border: none;">
                <Option>Product</Option>
                <Option>Service</Option>
                <Option>Expense</Option>
                <Option>Hours</Option>
                <Option>Days</Option>
            </select>
          </div>
          <div class="col">
              <p >Description</p>
              <textarea name="textarea" id="textareaDes" placeholder="Des" class="form-control textareaDes" rows="1" style="border: none; resize: none;"></textarea>
          </div>
          <div class="col">
              <p>UnitPrice</p>
                <input  type="number" class="form-control UnitPrice calculateMe" onkeyup="Calculate()" placeholder="U.P." style="border: none;" >
          </div>
          <div class="col">
            <p>Quantity</p>
            <input type="number" class="form-control Quantity calculateMe" onkeyup="Calculate()" style="border: none;" placeholder="Q.T"  >
        </div>
        <div class="col">
            <p>Amount</p>
            <input  class="form-control Amount" id="Amount" style="border: none;" type="text" onkeyup="CalculateTotal()" placeholder="Amount" >
        </div>
        </div>
        
      </form>`)


       
        Invoice.invocie_notes = $('.row3').find('#invoiceNotes').val();
        var saved = localStorage.getItem('Saved') != null ? JSON.parse(localStorage.getItem('Saved')) : [];
        saved.push( Invoice );
        localStorage.setItem('Saved', JSON.stringify(saved));
        
    }
        
    



    function Calculate(){
       
     var total = '';
    var ATotal = 0;
     $('#formList').find('.form-row').each(function(i, v){

        if($(v).find('.UnitPrice').val() != '' && $(v).find('.Quantity').val() != ''){
 
            var price = $(v).find('.UnitPrice').val();
            var items = $(v).find('.Quantity').val();
            if(price != NaN && items != NaN){
                total = price * items;
            } 
            $(v).find('#Amount').val(total);
            
        } 
        
    })
   
    $('#formList').find('.form-row').each(function(i, v){
       
        var porice = $(v).find('#Amount').val();
        if(parseInt(porice) != ''){
            ATotal = parseInt(ATotal) + parseInt(porice);
        }else{
            $(v).find('#Amount').val(0);
        }
       
    });
    $('#Result').html(ATotal)
   
    Invoice.Total = $('.row3').find('#Result').html();
}
    // function CalculateTotal(){
    //     var Total = 0;
    //     $('#formList').find('.form-row').each(function(i, v){
    //         var price = $(v).find('#Amount').val();
    //         if(parseInt(price)){
    //             Total = parseInt(Total) + parseInt(price);
    //         }else{
    //             $(v).find('#Amount').val(0);
    //         }
    //         console.log(price)
    //     });
    //     $('#Result').innerText(Total);
    // }

    $(".fa-list").click(function(){
        $(".nav").toggle();
      });
      
     