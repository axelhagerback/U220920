var customers = [];

var person = {
    Name: '',
    PhoneNumber: '',
    Email: '',
    Address: '',
    PostalCode: ''
};

function submitInformation() {
    var name = document.getElementById('inputName').value;
    var phoneNumber = document.getElementById('inputPhoneNumber').value;
    var email = document.getElementById('inputEmail').value;
    var address = document.getElementById('inputAddress').value;
    var postalCode = document.getElementById('inputPostalCode').value;

    person = {Name: name, PhoneNumber: phoneNumber, Email: email, Address: address, PostalCode: postalCode};
    customers.push(person);

    document.getElementById('inputName').value = '';
    document.getElementById('inputPhoneNumber').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputAddress').value = '';
    document.getElementById('inputPostalCode').value = '';
};