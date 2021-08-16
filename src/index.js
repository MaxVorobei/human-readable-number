module.exports = function toReadable (number) {
    if ( number === 0) {
        return 'zero'
    }

  const strNum = number.toString();
  switch (strNum.length) {
    case 1:
        return plainNumber(number);
    case 2:
        if (strNum[0] === '1') {
            return from11To19(number);
        } else {
            const space = strNum[1] === '0' ? '' : ' ';
            return twoDigitNumber(strNum[0]) + space + plainNumber(+strNum[1]);
        }
    case 3:
        const spacePlain = strNum[2] === '0' ? '' : ' ';
        const spaceTD = (strNum[1] === '0' && strNum[2] === '0') ? '' : ' ';
        if (strNum[1] === '0') {
            return plainNumber(+strNum[0]) + ' hundred' + spaceTD + plainNumber(+strNum[2]);
        } else if (strNum[1] === '1') {
            return plainNumber(+strNum[0]) + ' hundred' + spaceTD + from11To19(+`${strNum[1]}${strNum[2]}`);
        } else {
            return plainNumber(+strNum[0]) + ' hundred' + spaceTD + twoDigitNumber(+strNum[1]) + spacePlain + plainNumber(+strNum[2]);
        }
  }
}

function plainNumber (number) {
    switch (number) {
        case 0:
            return '';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
    }
}

function twoDigitNumber (strNum) {
    switch (+strNum) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 6:
            return 'sixty';
        case 7:
            return 'seventy';
        case 8:
            return 'eighty';
        case 9:
            return 'ninety';
    }
}

function from11To19 (strNum) {
    switch (+strNum) {
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen'
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
    }
}