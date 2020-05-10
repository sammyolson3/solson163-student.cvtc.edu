function submitClicked() {
    var name = document.getElementById('artistName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phoneNum').value;
    var message = document.getElementById('statement').value;
    var artTitle = document.getElementById('artworkTitle').value;
    var file = document.getElementById('image').value;
    var fileExt = file.split('.').pop();
    var extLower = fileExt.toLowerCase();
    var body = "";

    if (name != "" && email != "" && phone != "" && message != "" && artTitle != "" && file != "") {
        var valid = true;
    } else {
        var valid = false;
    }

    if (valid) {
        body = "Dear Art Gallery,%0D%0A%0D%0A" +
               message + "%0D%0A%0D%0A" +
               "Thank you,%0D%0A" +
               name + "%0D%0A" +
               email + "%0D%0A" +
               phone;

        // constructed the body of the message above.
        // %0D%0A is the new line character.
        // you can add parameters below by adding a ? to the end
        // of mailto: and the & symbol to add multiple parameters.
        // mailto:...?subject=subject&body=body&cc=cc....

        window.open('mailto:example@gmail.com?subject=' + artTitle + '&body=' + body)
    } else {
        alert("Please fill in all fields.");
    }
}
