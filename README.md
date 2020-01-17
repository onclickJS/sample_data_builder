# changer  test project
json 파일을 읽어서 문자열을replce 하고 이미지 src를 찾는 샘플 프로젝트임

CommonJS 방식의 모듈화
- 스코프(Scope): 모든 모듈은 자신만의 독립적인 실행 영역이 있어야 한다.
- 정의(Definition): 모듈 정의는 exports 객체를 이용한다.
- 사용(Usage): 모듈 사용은 require 함수를 이용한다. 


```bash
npm init
echo "# changer  test project" >> README.md 
npm start

```

### file-api 모듈 사용할때
```bash
# https://github.com/node-file-api/file-api
npm install file-api

# error 날때 
# TypeError: mime.lookup is not a function
npm i mime-lookup
```