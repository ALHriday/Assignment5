const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');

const donationHistorySection = document.getElementById('donation-history-section');
const donationCardSection = document.getElementById('donation-card-section');


// ....Click Handler for Donation and History Button.....

donationBtn.addEventListener('click', function () {
    donationHistorySection.classList.add('hidden');
    donationHistorySection.classList.add('flex');
    donationCardSection.classList.remove('hidden');
    donationCardSection.classList.add('flex');

    historyBtn.classList.remove('bg-green-500');
    donationBtn.classList.add('bg-green-500');

});

historyBtn.addEventListener('click', function () {
    donationCardSection.classList.remove('flex');
    donationCardSection.classList.add('hidden');
    donationHistorySection.classList.remove('hidden');
    donationHistorySection.classList.add('flex');

    historyBtn.classList.add('bg-green-500');
    donationBtn.classList.remove('bg-green-500');

});

//  Multi Uses function for input by ID.....

function inputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNum = parseFloat(inputValue);
    return inputValueNum;
};

var totalAmountNum = 55000;

document.getElementById('total-amount').innerText = totalAmountNum;

let donationAmount = 0;
let donationAmount2 = 0;
let donationAmount3 = 0;

// ......Donation For Noakhali Part.........

document.getElementById('donation-for-noakhali-btn').addEventListener('click', function () {
    const donationValue = inputValueById('donation-for-noakhali');
    
    if (isNaN(donationValue) || typeof donationValue !== "number" || donationValue <= 0) {
        return alert('Invalid Donation Amount');
    }

    document.getElementById('noakhali-amount').innerText = donationAmount += donationValue;
    document.getElementById('total-amount').innerText = totalAmountNum -= donationValue;
    const text = 'Taka is Donated for Flood at Noakhali, Bangladesh';
    history(donationHistorySection, donationValue, text);
    document.getElementById('my_modal_5').showModal();
    document.getElementById('donation-for-noakhali').value = '';
});

// ......Donation For Feni Part.........

document.getElementById('donation-for-feni-btn').addEventListener('click', function () {
    const donationValue = inputValueById('donation-for-feni');
    
    if (isNaN(donationValue) || typeof donationValue !== "number" || donationValue <= 0) {
        return alert('Invalid Donation Amount');
    }

    document.getElementById('feni-amount').innerText = donationAmount2 += donationValue;
    document.getElementById('total-amount').innerText = totalAmountNum -= donationValue;
    const text = 'Taka is Donated for Flood at Feni, Bangladesh';
    history(donationHistorySection, donationValue, text);
    document.getElementById('my_modal_5').showModal();
    document.getElementById('donation-for-feni').value = '';
});

// ......Donation For Quota Movement Injured people Part.........

document.getElementById('donation-for-injured-btn').addEventListener('click', function () {
    const donationValue = inputValueById('donation-for-injured');
    
    if (isNaN(donationValue) || typeof donationValue !== "number" || donationValue <= 0) {
        return alert('Invalid Donation Amount');
    }

    document.getElementById('donation-for-injured-amount').innerText = donationAmount3 += donationValue;
    document.getElementById('total-amount').innerText = totalAmountNum -= donationValue;
    const text = 'Taka is Donated for injured in the Quota Movement';
    history(donationHistorySection, donationValue, text);
    document.getElementById('my_modal_5').showModal();
    document.getElementById('donation-for-injured').value = '';
    
});

// .......Reusable funtion for history........

function history(section, donationMoney,text) {
    const date = new Date();

    section.innerHTML += `
    <div class="p-4 border-2 rounded-xl shadow-md">
        <h1 class="text-xl font-bold">${donationMoney} ${text}</h1>
        <p class="mt-3 p-2 bg-slate-200 rounded-md text-black">Date: ${date}</p>
    </div>
    `;
}


