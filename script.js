document.addEventListener('DOMContentLoaded', function () {
  var generatePasswordButton = document.getElementById('generatePasswordButton');

  generatePasswordButton.addEventListener('click', function () {
    var passwordLength = prompt('Enter the length of the password (between 8 and 128 characters):');

    if (passwordLength === null) {
      // User clicked cancel or closed the prompt
      return;
    }

    passwordLength = parseInt(passwordLength);

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert('Invalid password length. Please enter a length between 8 and 128 characters.');
      return;
    }

    var includeLowercase = confirm('Include lowercase characters?');
    var includeUppercase = confirm('Include uppercase characters?');
    var includeNumeric = confirm('Include numeric characters?');
    var includeSpecialChars = confirm('Include special characters? ($@%&*, etc.)');

    if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecialChars)) {
      alert('At least one character type must be selected. Please try again.');
      return;
    }

    var password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecialChars);

    // Display the password in the textarea
    var passwordTextarea = document.getElementById('password');
    passwordTextarea.value = password;
  });

  function generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecialChars) {
    var charset = '';
    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numericChars = '0123456789';
    var specialChars = '$@%&*';

    if (includeLowercase) {
      charset += lowercaseChars;
    }

    if (includeUppercase) {
      charset += uppercaseChars;
    }

    if (includeNumeric) {
      charset += numericChars;
    }

    if (includeSpecialChars) {
      charset += specialChars;
    }

    var password = '';
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    return password;
  }
});
