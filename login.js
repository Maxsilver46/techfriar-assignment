function validateForm() {
    let x = document.forms.name.value;
    if (x != "") {
      alert("Name must be filled out");
      window.location.assign('marvel.html');
    }
    

}