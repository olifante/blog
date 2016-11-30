#! /usr/bin/env bash

for i in _posts/*.md; do
    echo node ./node_modules/.bin/yaml-front-matter "${i}" \> "${i%.md}.json"
    node ./node_modules/.bin/yaml-front-matter "${i}" > "${i%.md}.json"
done