import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Amplify, { I18n } from "aws-amplify";
import awsconfig from "./aws-exports";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { translations } from "@aws-amplify/ui";
I18n.putVocabularies(translations);
I18n.setLanguage("hu");

I18n.putVocabularies({
    hu: {
        "Sign in": "Bejelentkezés",
        "Sign In": "Bejelentkezés",
        Password: "Jelszó",
        "Forgot your password? ": "Elfelejtett jelszó",
    },
});

Amplify.configure(awsconfig);

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
