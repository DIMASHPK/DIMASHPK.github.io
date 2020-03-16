let scrollLine = document.querySelector("input[type=range]");
let widthOfWords = document.querySelector(".widthOfWords");
let getWords = document.querySelector(".getYourWordsInput");
let yourText = document.querySelector(".word");
let getPrice = document.querySelector(".getPrice p");
let containerOfTextWidth = document.querySelector(".yourWordsWrap").offsetWidth;
let newColor = document.querySelectorAll(".colors .color");
let fonts = document.querySelectorAll(".fonts p");
let prevFontButton = document.querySelector("button.prev");
let nextFontButton = document.querySelector("button.next");
let wordsForCalculate = "";
let valueOfWidth = 40;
let left = 0;
let i = 0;

/* change text color */
newColor.forEach(color =>
  color.addEventListener("click", ({ target }) => {
    yourText.style.textShadow = `0 0 5px ${target.dataset.color}, 0 0 10px ${target.dataset.color}, 0 0 20px ${target.dataset.color},
    0 0 40px ${target.dataset.color}, 0 0 80px ${target.dataset.color}, 0 0 90px ${target.dataset.color}, 0 0 100px ${target.dataset.color}`;
    yourText.style.color = target.dataset.color;
  })
);

/* getText */
getWords.oninput = ({ target: { value } }) => {
  yourText.innerHTML = value.length > 0 ? value : "Ваш текст";
  wordsForCalculate = value.replace(/\s/g, "");
  if (value.length > 0) {
    scrollLine.disabled = false;
    yourText.style.fontSize = getSizeOfText();
  } else {
    scrollLine.value = 0;
    scrollLine.disabled = true;
    widthOfWords.innerHTML = "Ваша ширина: " + 40 + "см";
    valueOfWidth = 40;
    yourText.style.fontSize = 20 + "px";
  }

  getSallary(wordsForCalculate);
};

/* positionFonts */
fonts.forEach(font => {
  font.style.left = left + "%";
  left += 100;
});

/* changeFont */
prevFontButton.addEventListener("click", () => prevFont());
nextFontButton.addEventListener("click", () => nextFont());

/* getWidthOfText */
scrollLine.oninput = ({ target: { value } }) => {
  widthOfWords.innerHTML = "Ваша ширина: " + value + "см";
  console.log();
  valueOfWidth = value;
  yourText.style.fontSize = getSizeOfText();

  getSallary(wordsForCalculate);
};

/* getPriceOfText */
function getSallary(word) {
  if (word.length > 0) {
    /* formuls for take sallery of neonWords */
    let widthOfOneLetter = (valueOfWidth - 4) / word.length;

    let valueOfHeightAndLengthOfNeonKoof = heightAndcommonLengthsOfNeonKoof();
    console.log(valueOfHeightAndLengthOfNeonKoof);
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
      } /* new */ else if (widthOfOneLetter <= 16.6) {
        return {
          height: 26,
          neonkoof: 0.474
        };
      } else if (widthOfOneLetter <= 17.3) {
        return {
          height: 27,
          neonkoof: 0.492
        };
      } else if (widthOfOneLetter <= 17.9) {
        return {
          height: 28,
          neonkoof: 0.51
        };
      } else if (widthOfOneLetter <= 18.6) {
        return {
          height: 29,
          neonkoof: 0.529
        };
      } else if (widthOfOneLetter <= 19.2) {
        return {
          height: 30,
          neonkoof: 0.547
        };
      } else if (widthOfOneLetter <= 19.8) {
        return {
          height: 31,
          neonkoof: 0.565
        };
      } else if (widthOfOneLetter <= 20.5) {
        return {
          height: 32,
          neonkoof: 0.583
        };
      } else if (widthOfOneLetter <= 21.1) {
        return {
          height: 33,
          neonkoof: 0.601
        };
      } else if (widthOfOneLetter <= 21.8) {
        return {
          height: 34,
          neonkoof: 0.62
        };
      } else if (widthOfOneLetter <= 22.4) {
        return {
          height: 35,
          neonkoof: 0.638
        };
      } else if (widthOfOneLetter <= 23.1) {
        return {
          height: 36,
          neonkoof: 0.656
        };
      } else if (widthOfOneLetter <= 23.7) {
        return {
          height: 37,
          neonkoof: 0.675
        };
      } else if (widthOfOneLetter <= 24.3) {
        return {
          height: 38,
          neonkoof: 0.692
        };
      } else if (widthOfOneLetter <= 25.0) {
        return {
          height: 39,
          neonkoof: 0.711
        };
      } else if (widthOfOneLetter <= 25.6) {
        return {
          height: 40,
          neonkoof: 0.728
        };
      } else if (widthOfOneLetter <= 26.2) {
        return {
          height: 41,
          neonkoof: 0.747
        };
      } else if (widthOfOneLetter <= 26.6) {
        return {
          height: 42,
          neonkoof: 0.765
        };
      } else if (widthOfOneLetter <= 27.6) {
        return {
          height: 43,
          neonkoof: 0.785
        };
      } else if (widthOfOneLetter <= 28.2) {
        return {
          height: 44,
          neonkoof: 0.802
        };
      } else if (widthOfOneLetter <= 28.8) {
        return {
          height: 45,
          neonkoof: 0.821
        };
      } else if (widthOfOneLetter <= 29.4) {
        return {
          height: 46,
          neonkoof: 0.838
        };
      } else if (widthOfOneLetter <= 30.1) {
        return {
          height: 47,
          neonkoof: 0.857
        };
      } else if (widthOfOneLetter <= 30.7) {
        return {
          height: 48,
          neonkoof: 0.875
        };
      } else if (widthOfOneLetter <= 31.4) {
        return {
          height: 49,
          neonkoof: 0.893
        };
      } else if (widthOfOneLetter <= 31.9) {
        return {
          height: 50,
          neonkoof: 0.909
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

/* getSizeOfText */
function getSizeOfText() {
  let widthOfWords =
    wordsForCalculate.length > 10
      ? wordsForCalculate.length / 2
      : wordsForCalculate.length;

  let textSize =
    Math.round(((containerOfTextWidth / widthOfWords) * valueOfWidth) / 200) +
    "px";

  return wordsForCalculate.length > 2 ? textSize : 20 + "px";
}

/* getFont */
function nextFont() {
  for (let k = 0; k < fonts.length; k++) {
    let [percent] = fonts[k].style.left.split("%");
    fonts[k].style.left = +percent + -100 + "%";
  }
  i++;
  disabledButton(nextFontButton, prevFontButton);
  activeFont();
}

function prevFont() {
  for (let k = 0; k < fonts.length; k++) {
    let [percent] = fonts[k].style.left.split("%");
    fonts[k].style.left = +percent + 100 + "%";
  }
  if (i !== 0) {
    i--;
  }
  disabledButton(nextFontButton, prevFontButton);
  activeFont();
}

function disabledButton(nextButton, prevButton) {
  nextButton.disabled = i === fonts.length - 1;
  prevButton.disabled = i === 0;
}

function activeFont() {
  for (let i = 0; i < fonts.length; i++) {
    console.log(fonts[i].style.fontFamily);
    fonts[i].style.left === "0%" &&
      (yourText.style.fontFamily = fonts[i].innerHTML);
  }
}
