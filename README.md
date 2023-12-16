# My Study of Node.js and it's ecosystem

## Repo Config

### Overview

This section is used to set up tools that will make it easier to manage the repo and all it's files automatically

### Prettier

Prettier is used as a code formatter. It's set up to keep the formatting consistent and avoid any flame wars amongst the team. A standard is set and used and applied automatically This done by:

- .prettierrc is used to keep the settings
- .prettierignore is used to avoid formatting temporary and build files
- github actions is configured to run the prettier and format the code and commit it. This saves people the trouble of running it locally
- I know it's not democratic but it's lazy ... but it's centralized and easy to manage
