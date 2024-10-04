const urgencyField = document.getElementById('urgency');
const impactField = document.getElementById('impact');
const riskAssessment = document.getElementById('riskAssessment');

let hashMap = {};

hashMap["Low"] = 1;
hashMap["Medium"] = 2;
hashMap["High"] = 3;



let array = [
    ...Array(2).fill("Low"),
    ...Array(5).fill("Medium"),
    ...Array(2).fill("High")
];

array.unshift(null);

urgencyField.addEventListener('change', function () {
    updateRiskAssessment();
});
impactField.addEventListener('change', function () {
    updateRiskAssessment();
});

function updateRiskAssessment() {
    const urgencyValue = hashMap[urgencyField.value];
    const impactValue = hashMap[impactField.value];

    if (urgencyValue && impactValue) {
        const index = urgencyValue * impactValue;
        riskAssessment.value = array[index];
    } else {
        riskAssessment.value = '';
    }
}