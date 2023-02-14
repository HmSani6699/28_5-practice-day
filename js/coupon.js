document.getElementById('coupon-btn').addEventListener('click', function () {
    const couponInputFiled = document.getElementById('coupon-filed');
    const couponValue = couponInputFiled.value;
    couponInputFiled.value = '';
    if (couponValue === 'DICS30') {
        document.getElementById('discount-element').innerText = 2000 * 0.3
    }
    else {
        alert('please provide your coupon code')
    }
}) 