// /*
//  promt("")

//  checking if is a number
//  1.isNaN
//  2.Number->
//  3.+<>

// */

let grossMonthlySalary; //
const personalRelief = 2400;

while (true) {
  let gross = prompt("Enter your gross salary");
  if (isNaN(gross) === false) {
    gross = Number(gross);
    if (gross > 0) {
      grossMonthlySalary = gross;
      break;
    }
  }

  alert(`Invalid amount entered.
     Ensure you enter a number greater than 0
    `);
}
//grossMonthly ->no hope. its a number the number is >0
console.log(
  `Gross salay is ${grossMonthlySalary} its type ${typeof grossMonthlySalary}`,
);
//->here
//Calculate paye.

let nssftier = null;

let nssf = 0;

if (grossMonthlySalary <= 9000) {
  //tier 1
  nssf = grossMonthlySalary * 0.06; // erning below 900;
  console.log("nssf ", nssf);
  nssftier = "nssf tier 1 below 9,000 KSH";
} else if (grossMonthlySalary <= 108000) {
  //tier 1 and tier2
  let rem = grossMonthlySalary - 9000;
  let tier1 = 9000 * 0.06;
  let tier2 = rem * 0.06;
  nssf = tier1 + tier2;
  nssftier = "nssf tier 2 between 9,000 KSH - 108,000";
} else {
  nssf = 6840;
  nssftier = "nssf tier 3 above 108,0000";
}

// console.log("nssf contibution", nssf);
// alert(`nssf if ${nssf} and tier level is ${nssftier}`);

const shif = grossMonthlySalary * (2.75 / 100);
const housing = grossMonthlySalary * (1.5 / 100);

let taxableIncome = grossMonthlySalary - (nssf + shif + housing);
let paye_tier = null;
let paye = null;

const bracket1 = 24000;
const bracket2 = 32333;
const bracket3 = 500000;
const bracket4 = 800000;

const band1 = bracket1 * 0.1;
const band2 = (bracket2 - bracket1) * 0.25;
const band3 = (bracket3 - bracket2) * 0.3;
const band4 = (bracket4 - bracket3) * 0.325;

const personal_relief = 2400;

if (taxableIncome <= 24000) {
  paye = taxableIncome * 0.1;
  paye_tier = "Paye 0-24000 KES";
} else if (taxableIncome <= 32333) {
  let diff = taxableIncome - 24000;
  let tax = diff * 0.25;
  paye = tax + band1;
  paye_tier = "Paye 24000-32333 KES";
} else if (taxableIncome <= 500000) {
  let diff = taxableIncome - 32333;
  let tax = diff * 0.3;
  paye = tax + band1 + band2;
  paye_tier = "Paye 32333-500000 KES";
} else if (taxableIncome <= 800000) {
  let diff = taxableIncome - 500000;
  let tax = diff * 0.325;
  paye = tax + band1 + band2 + band3;
  paye_tier = "Paye 500000-800000 KES";
} else {
  let diff = taxableIncome - 800000;
  let tax = diff * 0.35;
  paye = tax + band1 + band2 + band3 + band4;
  paye_tier = "Paye 800000 to infinity KES";
}

const final_paye = Math.max(0, paye - personal_relief);

// alert(`Taxable Income ${taxableIncome}
//     Paye ${paye}
//     Personal Relief ${personalRelief}
//     Final Paye ${final_paye}
//     Tier ${paye_tier}
//   `);

const totalDeduction = final_paye + nssf + shif + housing;
const netSalary = grossMonthlySalary - totalDeduction;

alert(`For gross salary ${grossMonthlySalary}
    nssf ${nssf} tier ${nssftier}
    taxable Income ${taxableIncome}
    paye ${paye} tier ${paye_tier}
    shif ${shif}
    housing ${housing}
    totalDeduction ${totalDeduction}
    Take Away ${netSalary}
  `);
