echo "[!] Please wait... installing depencies"
sleep 1
apt-get update && apt-get upgrade
apt-get install nodejs curl -y
npm install colors request boxen readline shelljs
node upshell.js
