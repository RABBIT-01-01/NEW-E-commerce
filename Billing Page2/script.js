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