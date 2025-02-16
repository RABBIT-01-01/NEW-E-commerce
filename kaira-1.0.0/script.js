// Toggle password visibility
function togglePassword() {
    var passwordInput = document.getElementById("password");
    var toggleIcon = document.getElementById("toggleIcon");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        toggleIcon.textContent = "👁️";
    }
}

// Toggle confirm password visibility
function toggleConfirmPassword() {
    var confirmPasswordInput = document.getElementById("confirm-password");
    var toggleConfirmIcon = document.getElementById("toggleConfirmIcon");
    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        toggleConfirmIcon.textContent = "🙈";
    } else {
        confirmPasswordInput.type = "password";
        toggleConfirmIcon.textContent = "👁️";
    }
}

// Validate username
function validateUsername() {
    const username = document.getElementById("username").value.trim();
    const usernameError = document.getElementById("username-error");
    if (username.length < 3) {
        usernameError.textContent = "Username must be at least 3 characters long.";
        usernameError.style.display = "block";
        return false;
    } else {
        usernameError.style.display = "none";
        return true;
    }
}

// Validate email
function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        return false;
    } else {
        emailError.style.display = "none";
        return true;
    }
}

// Validate password
function validatePassword() {
    const password = document.getElementById("password").value.trim();
    const passwordError = document.getElementById("password-error");
    const passwordPattern = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must be at least 6 characters long, contain a number, and an uppercase letter.";
        passwordError.style.display = "block";
        return false;
    } else {
        passwordError.style.display = "none";
        return true;
    }
}

// Validate confirm password
function validateConfirmPassword() {
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const confirmPasswordError = document.getElementById("confirm-password-error");
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.style.display = "block";
        return false;
    } else {
        confirmPasswordError.style.display = "none";
        return true;
    }
}

// Form submission handling
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        alert('Registration successful!');
        // Here you can add code to handle the form submission, like sending data to a server
    }
});



// checkout page
function validateForm() {
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let phonePattern = /^[0-9]{10}$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}

function applyCoupon() {
    let coupon = document.getElementById("coupon-code").value;
    if (coupon === "DISCOUNT10") {
        alert("Coupon Applied! You get 10% off.");
    } else {
        alert("Invalid Coupon Code");
    }
}