//selected input turns correlating label color gray
$(document).on('focus active', 'input',function(){
    $('label[for='+$(this).attr('id')+']').addClass('active');
});
//unselected input returns to color
$(document).on('blur', 'input',function(){
    $('label[for='+$(this).attr('id')+']').removeClass('active');
});

function submitClicked() {
    var name = document.getElementById('artistName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phoneNum').value;
    var message = document.getElementById('statement').value;
    var artTitle = document.getElementById('artworkTitle').value;
    var body = "";


    if (name != "" && email != "" && phone != "" && message != "" && artTitle != "") {
        var valid = true;

    } else {
        var valid = false;
    }

    if (valid) {
      body = "Dear Art Gallery,%0D%0A%0D%0A" +
               artTitle + " is the title of this art piece.%0D%0A" +
               "Here is a statement about this piece: %0D%0A" +
                message + "%0D%0A%0D%0A" +
               "Thank you,%0D%0A" +
               name + "%0D%0A" +
               email + "%0D%0A" +
               phone;

        // constructed the body of the message above.
      window.open('mailto:example@gmail.com?subject=Artwork Submission&body=' + body);
      alert('Thank you for the submission! If we choose your artwork, we will be in contact shortly.');


    } else {
        alert("Please fill in all fields.");
    }
}


function btn() {

  submitClicked();

}
