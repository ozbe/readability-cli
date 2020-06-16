# readability-cli

CLI wrapper for [mozilla/readability](https://github.com/mozilla/readability).

## Install
```bash
$ npm install -g
```

## Examples
### Fetch page and convert
```bash
$ curl -s https://blog.mozilla.org/firefox/reader-view/ \
    | tr -d "\n\r" \
    | readability
```

### Create page to read

**NOTE:** This example requires [jq](https://stedolan.github.io/jq/).

```bash
$ rm -f read.html \
    && curl -s https://blog.mozilla.org/firefox/reader-view/ \
    | tr -d "\n\r" \
    | readability \
    | jq -r ".content" > read.html \
    && open read.html
```