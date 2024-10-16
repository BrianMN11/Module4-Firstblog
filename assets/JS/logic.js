const darkmodestyles = `
   body.dark-mode {
    background-color: #121212;
    color: #FFFFFF;
}

body.dark-mode header, body.dark-mode footer {
    background-color: #454545;
}

body.dark-mode article {
    background-color: #1e1e1e;
    border-color: #444;
}

body.dark-mode .author {
    color: #FFFFFF;
}
       
    `;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkmodestyles;
document.head.appendChild(styleSheet);