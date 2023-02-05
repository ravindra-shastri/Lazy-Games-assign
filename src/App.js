import { NavLink } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="home">
      <h4 className="center">
        This tool is used to Encrypt and Decrypt personal message based on secret key
      </h4>
      <h5 className="encrypt">
        Encrypt
      </h5>
      <h5>
        This is used to encrypt text based on personal secret key
      </h5>
      <p>
        This tool is used for encrypting personal message or text.
      </p>

      <p>Requirements</p>
      <p>
        . secret key (Must be remembered for decryption purpose)
      </p>
      <p>
        . Personal message or some text which has to be encrypted in order to secure from public exposure.
      </p>
      <NavLink to="/encript">
        <button>Encrypt</button>
      </NavLink>

      <h5 className="encrypt">Decrypt</h5>
      <h5>
        This is used to decrypt text based on personal secret key
      </h5>
      <p>
        This tool is used for decryption of encrypted Hash Code
      </p>

      <p>Requirements</p>
      <p>
        . secret key (Must for decryption purpose)
      </p>
      <p>
        . Personal encrypted message or some encrypted text or Hash code which has to be decrypted in order to get the actual message

      </p>
      <NavLink to="/decript">
        <button>Decrypt</button>
      </NavLink>
    </div>
  );
}

export default App;
