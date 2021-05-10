## Setup MySQL local server  
- run `brew install mysql`  
- run `brew services start mysql` to start mysql server  
- run `brew services stop mysql` to stop mysql server  
- run `mysql -u root -p` (username: 'root', password: ''), then run `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'` and then `flush privileges;` then exit to setup access privilege  