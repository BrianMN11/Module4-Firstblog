const darkmodestyles = `
    body.darkmmode {
        background-color: #121212;
        color: #ffffff
    }
    body.darkmode .post {
       background-color: #1e1e1e;
       border-color: #333333;
    }
       
    `;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkmodestyles;
document.head.appendChild(styleSheet);