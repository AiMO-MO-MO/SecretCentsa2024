// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Attach the click event to the present element
    const present = document.querySelector('.present');
    present.addEventListener('click', openGift);
});

function openGift() {
    const giftMessage = document.getElementById('giftMessage');
    giftMessage.classList.remove('hidden');
}