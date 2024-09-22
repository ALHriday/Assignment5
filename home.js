const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');

const donationHistorySection = document.getElementById('donation-history-section');
const donationCardSection = document.getElementById('donation-card-section');


// console.log(donationHistorySection, donationCardSection);

donationBtn.addEventListener('click', function () {
    donationHistorySection.classList.add('hidden');
    donationHistorySection.classList.add('flex');
    donationCardSection.classList.remove('hidden');

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




