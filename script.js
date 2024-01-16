document.addEventListener('DOMContentLoaded', function () {
  var generatePasswordButton = document.getElementById('generatePasswordButton');

  generatePasswordButton.addEventListener('click', function () {
    // Prompt for password length
    var passwordLength = prompt('Enter the length of the password (between 8 and 128 characters):');

    // Validate password length
    if (passwordLength >= 8 && passwordLength <= 128) {
      // Prompt for character types
      var includeLowercase = confirm('Include lowercase characters?');
      var includeUppercase = confirm('Include uppercase characters?');
      var includeNumeric = confirm('Include numeric characters?');
      var includeSpecialChars = confirm('Include special characters? ($@%&*, etc.)');

      // Validate that at least one character type is selected
      if (includeLowercase || includeUppercase || includeNumeric || includeSpecialChars) {
        // Generate the password
        var password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecialChars);

        // Display the password in an alert
        alert('Generated Password: ' + password);
      } else {
        alert('At least one character type must be selected. Please try again.');
      }
    } else {
      alert('Invalid password length. Please enter a length between 8 and 128 characters.');
    }
  });