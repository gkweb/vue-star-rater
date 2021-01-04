#!/bin/bash

echo "Bump and release"
npm run build
npm version patch --force
npm publish

echo "Install latest vue-star-rater in docs"
cd docs/
npm i vue-star-rater@latest
git add package*
git commit -m "Bump to vue-star-rater@latest"
git push