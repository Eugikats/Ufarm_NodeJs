const Validate = () => {
    // picking input fields
    let firstName = document.register.firstname
    let lastName = document.register.lastname
    let email = document.register.email
    let phone = document.register.phone
    let address = document.register.address
    let gender = document.register.gender
    let dob = document.register.dob
    let password = document.getElementById("password")

    // pick error sections
    let firstNameError = document.getElementById("fnameErr")
    let lastNameError = document.getElementById("lnameErr")
    let PhoneError = document.getElementById("phoneErr")
    let dobError = document.getElementById("dobErr")
    let emailError = document.getElementById("emailErr")
    let addressError = document.getElementById("addressErr")
    let passError = document.getElementById("passErr")
    let genderError = document.getElementById("genderErr")


    // validating first name emptiness
    if(firstName.value==""){
        firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "Please, first name can not be empty"
        firstNameError.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        firstName.focus()
        return false;
      }
      // validating first name min length
      else if(firstName.value.length < 5) {
        firstName.style.border = "1px solid red"
          firstNameError.innerHTML = "Please the first name must be atleast 5 letters"
          firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
          firstName.focus()
          return false;
      }
      // validating firstname max length
      else if(firstName.value.length > 50) {
        firstName.style.border = "2px solid red"
        firstNameError.innerHTML = "First Name must be below 50 characters"
        firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        firstName.focus()
        return false; }
       else{
        firstName.style.border = "2px solid green"
        firstNameError.innerHTML = ""
        lastName.focus()
      }
  
      //validating last name emptiness
      if(lastName.value == ""){
        lastName.style.border = "2px solid red"
          lastNameError.innerHTML = "Please last name can not be empty"
          lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";

          return false;
      }
      // validating last name min length
      else if(lastName.value.length < 5)
      {
        lastName.style.border = "2px solid red"
          lastNameError.innerHTML = "Please the last name must be atleast 5 letters"
          lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
          lastName.focus()
          return false;
      }
      // validating last name for maximum length
      else if(lastName.value.length > 50){
        lastName.style.border = "2px solid red"
          lastNameError.innerHTML = "Please the last name must be less than 50 letters"
          lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
          lastName.focus()
          return false;
      }
     else{
      lastName.style.border = "1px solid green"
      lastNameError.innerHTML = ""
      phone.focus()
    }

    // validating phone number emptiness
    if (phone.value == "") {
      phone.style.border = "2px solid red"
        PhoneError.innerHTML = "Please, phone number can not be empty"
        PhoneError.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        phone.focus()
        return false;
    }
    else {
      phone.style.border = "2px solid green"
      PhoneError.innerHTML = ""
      email.focus()
    }

    //email verification
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value == "") {
        email.style.border = "2px solid red"
        emailError.textContent = "Email is required"
        emailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        email.focus()
        return false;
    }
    else if(!(email.value.match(emailRegex)))  {
        email.style.border = "2px solid red"
        emailError.textContent = "Write a valid email containing @ and ."
    }
    else{
        email.style.border = "2px solid green"
        emailError.textContent = "";
    }

    //dob validation
  let dobValue = dob.value;
  // Calculate the age in years
  const ageInMilliseconds = Date.now() - new Date(dobValue).getTime();
  const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));

  // Get the current date and calculate the difference
  const currentDate = new Date();
  const difference = currentDate.getFullYear() - (new Date(dobValue)).getFullYear();
  if (dob.value===""){
    dob.style.border = "1px solid red"
    dobError.textContent = "Date of birth is required";
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    dob.focus()
    return false;

  }
  else if(difference < 10){
    dob.style.border = "1px solid red"
    dobError.textContent = "Sorry, you must be above ten years to register.";
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    dob.focus()
    return false;
  }
  else{
    dob.style.border = "2px solid green"
    dobError.textContent="";
    gender.focus();
  }
    // validating address emptiness
    if (address.value == "") {
      address.style.border = "2px solid red"
        addressError.innerHTML = "Please, address number can not be empty"
        addressError.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        address.focus()
        return false;
    }
    else {
      address.style.border = "1px solid green"
      addressError.innerHTML = ""
      dob.focus()
    }
    //password validation
    const passregex = /^[A-Za-z]\w{5,14}$/;
    if(password.value == "")  {
      password.style.border = "1px solid red"
      passError.textContent = "Password is required";
      passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";

      return false;
    }
    else if (!(password.value.match(passregex))) {
      password.style.border = "2px solid red"
      passError.textContent = "Password must start with an uppercase or lowercase letter, followed by between 5 and 14 alphanumeric characters"
      passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      return false;
    }
    else {
      password.style.border = "2px solid green"
      passError.textContent= "";
    }
    
    
    if (gender.value !== "Male" && gender.value !== "Female") {
      gender.style.border = "1px solid red"
      genderError.textContent = "Gender is required";
      genderError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";

      return false;
    }
    
    return true;
  }
