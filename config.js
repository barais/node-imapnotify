   var child_process = require('child_process');

   function getStdout(cmd) {
       var stdout = child_process.execSync(cmd);
       return stdout.toString().trim();
   }

   exports.host = "zimbra.inria.fr";
   exports.port = 993;
   exports.tls = true;
   exports.tlsOptions = {};
   exports.username = "barais";
   exports.password = getStdout("/usr/bin/gpg2 -q --for-your-eyes-only --no-tty -d /home/barais/mail/zimbra.inria.fr.gpg");
   exports.onNotify = {"mail": "sem --fg -j 1 --id mbsync  '/home/barais/git/isync-isync/src/mbsync -LaVn'"};
   exports.onNotifyPost = {"mail": "sem --fg -j 1 --id notmuch '/usr/local/bin/notmuch new --quiet' && /usr/bin/notify-send 'new mail arrived'"};
   exports.boxes = ["INBOX"];

//   "onNotify": "/usr/bin/mbsync -a",
//   "onNotifyPost": {"mail": "/usr/bin/notmuch new && notify-send 'New mail arrived'"},
