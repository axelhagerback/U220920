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

    var emptyCustomerList = document.getElementById('customerList');
    emptyCustomerList.innerHTML = ''; 

    customers.forEach(person => {
        const listAttribute = document.createElement('li');
        listAttribute.innerHTML = (`Customer name: ${person.Name} | Customer contactnumber: ${person.PhoneNumber}`+
        ` | Customer email: <a href=mailto:${person.Email}>${person.Email}</a>`);
        customerList.appendChild(listAttribute);
    });

    document.getElementById('inputName').value = '';
    document.getElementById('inputPhoneNumber').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputAddress').value = '';
    document.getElementById('inputPostalCode').value = '';
};

function hideShowList() {
     customerList.hidden = !customerList.hidden;
};

function search() {
   var inputID = document.getElementById('searchInput').value;
   var outputID = document.getElementById('searchOutput');

   findEmail = (person => {
        return person.Email === inputID;
   });

   outputID.innerHTML = (`Name: ${customers.find(findEmail).Name} | Contactnumber: ${customers.find(findEmail).PhoneNumber} | `+
   `Email: ${customers.find(findEmail).Email} | Address: ${customers.find(findEmail).Address} | Postal Code: ${customers.find(findEmail).PostalCode}`);

}