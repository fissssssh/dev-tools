export namespace Convert {
  export function FromHexString(str: string): Uint8Array {
    if (str.length % 2 !== 0) {
      throw new Error("Invalid hex string");
    }
    const byteLength = str.length / 2;
    const bytes = new Uint8Array(byteLength);
    for (let i = 0; i < byteLength; i++) {
      bytes[i] = parseInt(str.substr(i * 2, 2), 16);
    }
    return bytes;
  }

  export function ToHexString(bytes: Uint8Array): string {
    let hexString = "";
    for (let i = 0; i < bytes.length; i++) {
      const hex = bytes[i].toString(16).padStart(2, "0");
      hexString += hex;
    }
    return hexString;
  }

  export function FromBase64String(str: string): Uint8Array {
    const binaryString = atob(str);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  export function ToBase64String(bytes: Uint8Array): string {
    const view = new Uint8Array(bytes);
    let binaryString = "";
    for (let i = 0; i < view.length; i++) {
      binaryString += String.fromCharCode(view[i]);
    }
    return btoa(binaryString);
  }
}
