function submitClicked() {
    var name = document.getElementById('artistName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phoneNum').value;
    var message = document.getElementById('statement').value;
    var artTitle = document.getElementById('artworkTitle').value;
    var file = document.getElementById('image').value;
    var fileExt = file.split('.').pop();

    if (fileExt == "jpg" || fileExt == "png") {
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
      alert("Please submit JPG or PNG image file");
    }

}
