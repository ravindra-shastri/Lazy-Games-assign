
import { useState } from "react";

const Decrypt = () => {

  const [salt, setSalt] = useState("");
  const [encoded, setEncoded] = useState("");
  const [encrypted, setEncrypted] = useState("");

  const decrypt = (salt, encoded) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    const e = encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join("");
    setEncrypted(e);
  };

  return (
    <div className="center">
      <div className="encript-item">
        <label>
          Secret Key
        </label>
        <input
          type="text"
          onChange={(e) => setSalt(e.target.value)}
          placeholder="Enter a secret key"
        />
        <label>
          Hash code to decrypt
        </label>
        <input
          type="text"
          onChange={(e) => setEncoded(e.target.value)}
          placeholder="Hash code to decrypt"
        />
        <button onClick={() => decrypt(salt, encoded)}>
          Generate
        </button>

        {
          encrypted ?
            (<div className="output-item">
              <label>
                Decrypted text
              </label>
              <textarea value={encrypted} onChange={() => { }} />
            </div>) : ""
        }
      </div>
    </div>
  );
}

export default Decrypt;









