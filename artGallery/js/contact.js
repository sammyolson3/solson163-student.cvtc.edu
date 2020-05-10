function submitClicked() {
    var name = document.getElementById('artistName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phoneNum').value;
    var message = document.getElementById('statement').value;
    var artTitle = document.getElementById('artworkTitle').value;
    var file = document.getElementById('image').value;
    var fileExt = file.split('.').pop();
    var extLower = fileExt.toLowerCase();

    if (name != "" && email != "" && phone != "" && message != "" && artTitle != "" && file != "") {
        var valid = true;
    } else {
        var valid = false;
    }

    if (valid) {
        if (extLower == "jpg" || extLower == "png") {
            var r = confirm("Please confirm your information.\n" +
                            "Name: " + name + "\n" +
                            "Email: " + email + "\n" +
                            "Phone #: " + phone + "\n" +
                            "Message: " + message + "\n" +
                            "Artwork Title: " + artTitle + "\n" +
                            "File Name: " + file);
            if (r) {
                alert("Submitted successful!");
            } else {
                alert("Submit cancelled.");
            }
        } else {
            alert("Please enter a jpg or png file type.");
        }
    } else {
        alert("Please fill in all fields.");
    }
}
