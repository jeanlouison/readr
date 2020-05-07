sudo lsof -i -P -n | grep 3000 | grep -v grep | awk '{print "kill -9 " $2}' | sh | node server.js
