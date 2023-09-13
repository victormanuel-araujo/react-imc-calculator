import * as Constants from "./mask-input.constants";

function maskChar(currentChar: string, currentMaskChar: string) {
  if (currentMaskChar === Constants.ANY_CHAR_MASK) return currentChar;

  const upperCharCode = String(currentChar).toUpperCase().charCodeAt(0);
  const isAlphabetic =
    upperCharCode >= Constants.CHAR_CODE_FIRST_LETTER_UPPER &&
    upperCharCode <= Constants.CHAR_CODE_LAST_LETTER_UPPER;
  const isNumber =
    !isNaN(Number(currentChar)) &&
    upperCharCode >= Constants.CHAR_CODE_FIRST_NUMBER_UPPER &&
    upperCharCode <= Constants.CHAR_CODE_LAST_NUMBER_UPPER;

  if (
    currentMaskChar === Constants.ALPHANUMERIC_CHAR_MASK &&
    (isAlphabetic || isNumber)
  )
    return currentChar;
  if (currentMaskChar === Constants.ALPHABETIC_CHAR_MASK && isAlphabetic)
    return currentChar;
  if (currentMaskChar === Constants.NUMBER_CHAR_MASK && isNumber)
    return currentChar;

  return null;
}

export function maskValue(value: string, mask: string, erasing?: boolean) {
  let maskedValue = "";
  let accessIndex = 0,
    maskAccessIndex = 0;

  while (accessIndex < value?.length) {
    const shouldEraseUnwantedMask =
      erasing && maskAccessIndex === value?.length - 1;
    if (accessIndex > value?.length - 1 || maskAccessIndex > mask?.length - 1)
      break;

    if (
      !Constants.ALL_VALID_MASKS.includes(mask[maskAccessIndex]) &&
      !shouldEraseUnwantedMask
    ) {
      maskedValue += mask[maskAccessIndex];
      maskAccessIndex++;
      continue;
    }

    const replaceChar = maskChar(value[accessIndex], mask[maskAccessIndex]);

    if (!replaceChar) {
      accessIndex++;
      continue;
    }

    maskedValue += replaceChar;
    accessIndex++;
    maskAccessIndex++;
  }

  return maskedValue;
}

export function unmaskValue(maskedValue: string, mask: string) {
  let unmaskedValue = "";
  let accessIndex = 0,
    maskAccessIndex = 0;

  while (accessIndex < maskedValue?.length) {
    if (
      accessIndex > maskedValue?.length - 1 ||
      maskAccessIndex > mask?.length - 1
    )
      break;
    if (!Constants.ALL_VALID_MASKS.includes(mask[maskAccessIndex])) {
      maskAccessIndex++;
      continue;
    }

    const replaceChar = maskChar(
      maskedValue[accessIndex],
      mask[maskAccessIndex]
    );

    if (!replaceChar) {
      accessIndex++;
      continue;
    }

    unmaskedValue += replaceChar;
    accessIndex++;
    maskAccessIndex++;
  }

  return unmaskedValue;
}
