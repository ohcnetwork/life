# Life | Coronasfe Network

A database and API for life-fe

## API

| Data                        | URL                                                                |
| --------------------------- | ------------------------------------------------------------------ |
| List of districts with Data | https://life-api.coronasafe.network/data/active_district_data.json |
| Ambulance availability      | https://life-api.coronasafe.network/data/ambulance.json            |
| Helpline Numbers            | https://life-api.coronasafe.network/data/helpline.json             |
| Hospitals and Beds          | https://life-api.coronasafe.network/data/hospital_bed_icu.json     |
| Medicine availability       | https://life-api.coronasafe.network/data/medicine.json             |
| Oxygen availability         | https://life-api.coronasafe.network/data/oxygen.json               |
| Plasma availability         | https://life-api.coronasafe.network/data/plasma.json               |

## Source

- [Covidfyi data store](https://airtable.com/shrIlOoS6PyhIIVEv)

# Development Docs

1. Fork the project in https://github.com/coronasafe/life to your git login
2. Go to your forked project and in your terminal clone it
   ```aidl
    git clone https://github.com/vandanabhandari/life
   ```
3. Set the upstream
   ```
   git remote add upstream https://github.com/coronasafe/life.git
   ```
   
4. Run ```git remote -v``` to check 
   
   ```
    $git remote -v
    origin	git@github.com:vandanabhandari/life.git (fetch)
    origin	git@github.com:vandanabhandari/life.git (push)
    upstream	https://github.com/coronasafe/life.git (fetch)
    upstream	https://github.com/coronasafe/life.git (push)
    veda@Vedas-Air.fios-router.home:~/vamsi/projects/life$
   ```
  [Optional] In your project directory run ```git config core.hooksPath "./git_hooks"``` 
5. To start a fix/feat, create a branch ```git checkout -b <branch_name>```
6. Add and Commit your changes  ```git add .``` and ```git commit ```
7. Add commit message   
8. To update your branch with latest code from main upstream before push ```git fetch upstream && git pull upstream main```
9. Resolve any conflict if exists. If your branch name is say "git-hook-commit-message". push the code using
 ```$git push origin git-hook-commit-message```
10. If you see below message, update the comment with a valid message

Oh! Please replace TODO_ADD_COMMENT in commit refs/heads/git-hook-commit-message before pushing
error: failed to push some refs to 'git@github.com:vandanabhandari/life.git'
veda@Vedas-Air.fios-router.home:~/vamsi/projects/life$

## Getting Started

First, run the development server:

```
npm run dev
# or
yarn dev
Open http://localhost:3000 with your browser to see the result.
```

You can start editing the page by modifying pages/index.js. The page auto-updates as you edit the file.
Supported by [Swasth Alliance](https://www.swasth.app) | [Vercel](https://vercel.com?utm_source=life&utm_campaign=oss)
