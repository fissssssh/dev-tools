export interface Converter {
  convert(value: string): string;
  reverse(value: string): string;
}

export class TextHexConverter implements Converter {
  convert(value: string): string {
    if (value.length % 2 !== 0) {
      throw new Error("Invalid hex string length");
    }

    let asciiString = "";
    for (let i = 0; i < value.length; i += 2) {
      const hexPair = value.substring(i, i + 2);
      const charCode = parseInt(hexPair, 16);
      asciiString += String.fromCharCode(charCode);
    }

    return asciiString;
  }

  reverse(value: string): string {
    let hex = "";
    for (let i = 0; i < value.length; i++) {
      hex += value.charCodeAt(i).toString(16).padStart(2, "0");
    }
    return hex;
  }
}
