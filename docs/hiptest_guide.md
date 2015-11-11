# integrate with hiptest

1. add hiptest-publister.config

```
token = '433995481071883391042153863051715226081684528578423507636'
language=javascript
framework=jasmine
output_directory = './'
```

2. generate test file by hiptest-publisher tool

`hiptest-publisher --config-file hiptest-publisher.config --test-only --test-run-id 9410`

3. add uid in your test cases

```
it('async test string compare - chai as promised (uid:b6f26504-b92d-4365-85f1-7cfce98a0253)', function () {
  ...
```

4. run tests

`mocha test/**/*.js --reporter xunit > result.xml`

5. push test result to hiptest

`hiptest-publisher --config-file hiptest-publisher.config --push results.xml --push-format junit --test-run-id 9410`

# hiptest project

[https://hiptest.net/app#/projects/11488](https://hiptest.net/app#/projects/11488)
