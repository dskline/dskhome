Installation steps to setup the project:

### 1. Install NPM or PNPM

Tips:

NVM makes this easy - make sure you install and use the latest LTS version.

### 2. Install mysql and create a database named "dskhome"

Example with brew:

```
brew install mysql
brew services start mysql
mysql -u root -p
CREATE DATABASE dskhome
```

### 3. Set the appropriate env variable

.env file:
```
DATABASE_URL=mysql://root@localhost:3306/dskhome
```