- [x] npm init
- [x] npm i -D typescript
- [x] npx tsc --init
  - [x] uncomment `"outDir" : "./dist"`
  - [x] uncomment `"rootDir" : "./src"`
  - [x] compile ts to js - `npx tsx`
- [x] npm i -D @types/node
- [x] install prettier
    - [x] npm i --save-dev --save-exact prettier
    - [x] npx prettier . --write
- [x] install EsLint
    - [x] npm install --save-dev eslint @eslint/js typescript typescript-eslint
    - [x] npx eslint .
    - [x] npx eslint . --fix
- [x] Implement Githook setup -> PreCommit Setup
    - [x] npm install --save-dev husky
    - [x] npx husky init
    - [x] install lint-stage pakage -> only for do run pre-commit githook only on latest code / new code (avoid old code)
        - [x] npm i lint-staged
- [x] npm i dotenv