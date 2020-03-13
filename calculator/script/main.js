let scrollLine = document.querySelector("input[type=range]");
let widthOfWords = document.querySelector(".widthOfWords");
let getWords = document.querySelector(".getYourWordsInput");
let yourText = document.querySelector(".word");
let getPrice = document.querySelector(".price p");
let wordsForCalculate = "";
let valueOfWidth = 40;

getWords.oninput = ({ target: { value } }) => {
  yourText.innerHTML = value.length > 0 ? value : "Ваш текст";
  wordsForCalculate = value.replace(/\s/g, "");
  if (value.length > 0) {
    scrollLine.disabled = false;
  } else {
    scrollLine.value = 0;
    scrollLine.disabled = true;
    widthOfWords.innerHTML = "Ваша ширина: " + 40;
    valueOfWidth = 40;
    yourText.style.fontSize = 40 + "px";
  }

  getSallary(wordsForCalculate);
};

scrollLine.oninput = ({ target: { value } }) => {
  widthOfWords.innerHTML = "Ваша ширина: " + value;
  valueOfWidth = value;
  yourText.style.fontSize = value + "px";
  getSallary(wordsForCalculate);
};

function getSallary(word) {
  if (word.length > 0) {
    /* formuls for take sallery of neonWords */

    let widthOfOneLetter = (valueOfWidth - 4) / word.length;

    let valueOfHeightAndLengthOfNeonKoof = heightAndcommonLengthsOfNeonKoof();

    let square =
      ((valueOfHeightAndLengthOfNeonKoof.height + 4) * valueOfWidth) / 10000;

    let priceOfMainPartOfProduct = square * 32.5;

    let commonLengthsOfNeon =
      wordsForCalculate.length * valueOfHeightAndLengthOfNeonKoof.neonkoof;

    let priceOfProductGrav = commonLengthsOfNeon * 1.12;

    let lengthOfLineCutting = ((parseInt(valueOfWidth) + 9 + 4) * 2) / 100;

    let priceOfProductCutting = lengthOfLineCutting * 0.5;

    let powerOfNeon = commonLengthsOfNeon * 9;

    let quantityLinesForSoldering = wordsForCalculate.length * 2;

    let costPriceOfMaterial =
      priceOfMainPartOfProduct +
      priceOfProductGrav +
      priceOfProductCutting +
      sallaryOfDelivery() +
      commonLengthsOfNeon * 3.08 +
      PowerSupplyForNEon();

    let costPriceSoldering = quantityLinesForSoldering * 1.22;

    let sallary = (costPriceSoldering + costPriceOfMaterial + 6.56) * 1.75 + 24;

    let sallaryInHrn = sallary * 26.8;
    getPrice.innerHTML = "Ваша цена: " + Math.round(sallaryInHrn) + "грн";

    /* tables of value */
    function heightAndcommonLengthsOfNeonKoof() {
      if (widthOfOneLetter <= 5.8) {
        return {
          height: 9,
          neonkoof: 0.164035087719298
        };
      } else if (widthOfOneLetter <= 6.4) {
        return {
          height: 10,
          neonkoof: 0.181780701754386
        };
      } else if (widthOfOneLetter <= 7) {
        return {
          height: 11,
          neonkoof: 0.200368421052632
        };
      } else if (widthOfOneLetter <= 7.7) {
        return {
          height: 12,
          neonkoof: 0.218754385964912
        };
      } else if (widthOfOneLetter <= 8.3) {
        return {
          height: 13,
          neonkoof: 0.236824561403509
        };
      } else if (widthOfOneLetter <= 9) {
        return {
          height: 14,
          neonkoof: 0.254947368421053
        };
      } else if (widthOfOneLetter <= 9.6) {
        return {
          height: 15,
          neonkoof: 0.27330701754386
        };
      } else if (widthOfOneLetter <= 10.25) {
        return {
          height: 16,
          neonkoof: 0.291368421052632
        };
      } else if (widthOfOneLetter <= 10.9) {
        return {
          height: 17,
          neonkoof: 0.30969298245614
        };
      } else if (widthOfOneLetter <= 11.53) {
        return {
          height: 18,
          neonkoof: 0.328157894736842
        };
      } else if (widthOfOneLetter <= 12.2) {
        return {
          height: 19,
          neonkoof: 0.346271929824561
        };
      } else if (widthOfOneLetter <= 12.8) {
        return {
          height: 20,
          neonkoof: 0.364622807017544
        };
      } else if (widthOfOneLetter <= 13.45) {
        return {
          height: 21,
          neonkoof: 0.382675438596491
        };
      } else if (widthOfOneLetter <= 14.1) {
        return {
          height: 22,
          neonkoof: 0.401
        };
      } else if (widthOfOneLetter <= 14.7) {
        return {
          height: 23,
          neonkoof: 0.419043859649123
        };
      } else if (widthOfOneLetter <= 15.4) {
        return {
          height: 24,
          neonkoof: 0.437368421052632
        };
      } else if (widthOfOneLetter <= 16) {
        return {
          height: 25,
          neonkoof: 0.455394736842105
        };
      } else {
        return {
          height: 9,
          neonkoof: 0.164035087719298
        };
      }
    }

    function PowerSupplyForNEon() {
      if (powerOfNeon <= 12) {
        return 1.6;
      } else if (powerOfNeon <= 24) {
        return 2.4;
      } else if (powerOfNeon <= 36) {
        return 3.6;
      } else if (powerOfNeon <= 48) {
        return 4.2;
      } else if (powerOfNeon <= 64) {
        return 8;
      } else if (powerOfNeon <= 72) {
        return 5.2;
      } else if (powerOfNeon <= 96) {
        return 6.5;
      } else if (powerOfNeon > 96) {
        return 11;
      }
    }

    function sallaryOfDelivery() {
      if (square <= 0.15) {
        return 1.4;
      } else if (square <= 0.3) {
        return 2;
      } else if (square <= 0.5) {
        return 2.6;
      } else if (square <= 0.7) {
        return 3.4;
      } else if (square > 0.7) {
        return 5;
      }
    }
  } else {
    getPrice.innerHTML = "Ваша цена:";
  }
}
