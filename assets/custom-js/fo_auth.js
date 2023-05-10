  const Validate = () => {
    // picking input fields and their names
    let firstName = document.register.firstname
    let lastName = document.register.lastname
    let uniqueno = document.register.uniquenumber
    let gender = document.register.gender
    let dob = document.register.dob
    let activity = document.register.activities
    let password = document.getElementById("password")
    let ward = document.register.ward
    let phone = document.register.phonenumber
    let address = document.register.address
    let residence = document.register.residencetype
    let yor = document.register.yor
    

  

    //pick error sections
    let firstNameError = document.getElementById("fnameErr")
    let lastNameError = document.getElementById("lnameErr")
    let uniquenoError = document.getElementById("uniquenoErr")
    let passError = document.getElementById("passErr")
    let genderError = document.getElementById("genderErr")
    let dobError = document.getElementById("dobErr")
    let wardError = document.getElementById("wardErr")
    let phoneError = document.getElementById("phoneErr")
    let activityError = document.getElementById("activityError")
    let addressError = document.getElementById("addressErr")
    let residenceErr = document.getElementById("residenceErr")
    let yorErr = document.getElementById("yorErr")
    


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
      return false;
    } else{
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
        return false;
    }
    // validating last name for maximum length
    else if(lastName.value.length > 50){
      lastName.style.border = "2px solid red"
        lastNameError.innerHTML = "Please the last name must be less than 50 letters"
        lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        return false;
    }
   else{
    lastName.style.border = "1px solid green"
    lastNameError.innerHTML = ""
   gender.focus()
  }

  //gender validation
  if (gender.value !== "Male" && gender.value !== "Female") {
    gender.style.border = "1px solid red"
    genderError.textContent = "Gender is required";
    genderError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";

    return false;
  }
  else {
    gender.style.border = "2px solid green"
    genderError.textContent="";
    dob.focus();
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

  //ward validation
  if (ward.value=="") {
    ward.style.border = "1px solid red"
    wardError.textContent = "Ward is required";
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";

    return false;
  }
  else {
    ward.style.border = "2px solid green"
    wardError.textContent="";
    activity.focus();
  }

  //activity validation
  if (activity.value=="") {
    activity.style.border = "1px solid red"
    activityError.textContent = "Activity is required";
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";

    return false;
  }
  else {
    activity.style.border = "2px solid green"
    activityError.textContent="";
    uniqueno.focus();
  }
    //unique number verifications
    const foregex = /^FO-([0-9]{3})+$/;
    if(uniqueno.value == "") {
      uniqueno.style.border = "1px solid red"
      uniquenoError.textContent = "Unique number is required";
      uniquenoError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      return false;
    }
    else if(!(uniqueno.value.match(foregex))){
      uniqueno.style.border = "1px solid red"
      uniquenoError.textContent = "Unique number must follow this formart FO-000";
      uniquenoError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      return false;
    }else {
      uniqueno.style.border = "1px solid green"
      uniquenoError.textContent = "";
      phone.focus()
    }

     //phone number validation
  if(phone.value == ""){
    phone.style.border = "2px solid red"
      phoneError.innerHTML = "Please, phone number can not be empty"
      phoneError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      phone.focus()
      return false;
  }
  else {
    phone.style.border = "2px solid green"
    phoneError.textContent="";
    residence.focus();
  }

  //residence type validation
  if(residence.value == ""){
    residence.style.border = "2px solid red"
      residenceErr.innerHTML = "Please, residence number can not be empty"
      residenceErr.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      residence.focus()
      return false;
  }
  else {
    residence.style.border = "2px solid green"
    residenceErr.textContent="";
    yor.focus();
  }
  if(yor.value == ""){
    yor.style.border = "2px solid red"
      yorErr.innerHTML = "Please, years of residence can not be empty"
      yorErr.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      yor.focus()
      return false;
  }
  else {
    yor.style.border = "2px solid green"
    yorErr.textContent="";
    password.focus();
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
    // password.focus()
  }

    //password validation
    const passregex = /^[A-Za-z]\w{7,14}$/;
    if(password.value == "")  {
      password.style.border = "1px solid red"
      passError.textContent = "Password is required";
      passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      return false;
    }
    else if (!(password.value.match(passregex))) {
      password.style.border = "1px solid red"
      passError.textContent = "Password must start with letters then end with numbers"
      passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      return false;
    }
    else if(password.value.length > 15) {
      password.style.border = "1px solid red"
      passError.textContent = "Please the password must not be more than 15 characters";
      passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      return false;
    }
    else {
      password.style.border = "1px solid green"
      passError.textContent= "";
    }

    return true;
  }
  