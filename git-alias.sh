#!/usr/bin/env bash

git config --replace-all alias.m '!f() {
  git add . &&
  git commit -m "$1"
}; f'
git config --replace-all alias.p '!f() {
  git add . &&
  git commit -m "$1" &&
  git push --set-upstream origin "$2";
}; f'
git config --replace-all alias.r1 '!git reset HEAD~1'
git config --replace-all alias.b '!f() {
  git checkout -b "$1"
}; f'
