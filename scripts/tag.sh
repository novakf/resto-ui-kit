#https://muffinman.io/blog/add-git-version-tag-after-publishing-to-npm/

PACKAGE_VERSION=$(cat package.json \
  | grep \"version\" \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

if [[ $PACKAGE_VERSION =~ ^[0-9]\.[0-9]\.[0-9]$ ]];
then
echo $PACKAGE_VERSION
git tag v$PACKAGE_VERSION
git push origin v$PACKAGE_VERSION
fi
