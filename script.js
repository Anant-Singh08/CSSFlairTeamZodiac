let selectedDesign = '';
let var1 = '';
function selectDesign(design, name) {
    selectedDesign = design;
    var1 = name
    const designs = document.querySelectorAll('.design');
    designs.forEach(d => d.style.border = 'none');
    document.getElementById(`design${design.split(' ')[1]}`).style.border = '2px solid #007bff';
}

function purchaseGiftCard() {
    const amount = document.getElementById('amount').value;
    const confirmation = document.getElementById('confirmation');
    
    if (selectedDesign) {
        confirmation.textContent = `You have purchased a $${amount} ${var1} gift card.`;
    } else {
        confirmation.textContent = 'Please select a design.';
    }
}
