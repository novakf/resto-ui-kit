#!/bin/sh
branch=$(git rev-parse --abbrev-ref HEAD)
npm version prerelease --preid=$branch-rc
