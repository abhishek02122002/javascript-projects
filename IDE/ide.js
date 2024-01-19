function run(){
     let htmlCode = document.getElementById("html-code");
     let cssCode = document.getElementById("css-code");
     let jsCode = document.getElementById("js-code");
     let outPut = document.getElementById("output");
     outPut.contentDocument.body.innerHTML = htmlCode.value + 
                                                            "<style>" +
                                                             cssCode.value
                                                             +"</style>";
     outPut.contentWindow.eval(jsCode.value);
}