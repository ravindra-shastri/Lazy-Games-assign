import { useState } from "react";

const Encrypt = () => {

  const [salt, setSalt] = useState("");
  const [text, setText] = useState("");
  const [crypted, setCrypted] = useState("");

  const crypt = (salt, text) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    const d = text
      .split("")
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join("");
    setCrypted(d);
  };


  return (
    <div className="encript-item">
      <label>
        secret Key
      </label>
      <input
        type="text"
        placeholder="Enter Secret Key"
        onChange={(e) => setSalt(e.target.value)}
      />
      <label>
        Message to Encrypt
      </label>
      <input
        type="text"
        placeholder="Message to Encrypt"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => crypt(salt, text)}
      >
        Generate
      </button>
      <label>
        Encrypted Text
      </label>
      <textarea value={crypted} onChange={() => { }} />
    </div>
  );
}

export default Encrypt;
