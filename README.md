# github-pages로 포트폴리오 사이트 서비스하기
## 샘플 사이트
- https://windbella.github.io/portfolio-challenge-github-pages/
## 리소스 프로젝트
- https://github.com/windbella/portfolio-challenge
- 위 프로젝트에서 서버 부분을 제거하여 정적인 서비스로 변경한 프로젝트입니다.
- 해당 주소로 가서 학습하시면 원하는 페이지를 만드는 데 도움이 될 것입니다.
## 설정하기
1. 해당 저장소(repository)를 fork 하거나 다운로드해서 github 저장소를 만듭니다.
2. 생성된 저장소에서 Settings로 이동하고 아래 이미지처럼 설정합니다.
![이미지1](https://raw.githubusercontent.com/windbella/portfolio-challenge-github-pages/master/image1.PNG)
3. source는 구조상 master branch /docs folder로 선택해야하고, custom domain 옵션을 이용해서 주소를 변경할 수 있습니다.  
하지만 무난하게 따라오기 위해서는 이미지와 같은 설정을 추천합니다.
## 서비스하기
1. 해당 저장소를 그대로 fork 했다면 docs 파일에 리소스가 있기 때문에 자신의 주소로 이동하면 바로 페이지를 볼 수 있습니다.
2. 소스를 수정하여 반영하고 싶다면 client 디렉터리로 이동하여 npm run build (혹은 yarn build)를 이용해서 docs 폴더를 업데이트하고 github에 다시 push 하면 됩니다.
3. 소스만 참조하여 새롭게 구성했다면 아래 주요 내용 보기에서 적절하게 코드를 수정하셔야 합니다.
## 주요 내용 보기
- https://github.com/windbella/portfolio-challenge-github-pages/blob/master/client/vue.config.js  
  ``` javascript
  module.exports = {
      lintOnSave: false,
      publicPath: '/portfolio-challenge-github-pages',
      outputDir: '../docs',
  };
  ```
  위 설정에서 publicPath에 본인의 저장소 이름을 적어야 합니다. 루트 위치가 /portfolio-challenge-github-pages/ 이런 식으로 되기 때문에 하는 설정이며  
  custom domain을 선택하셨다면 주소 구조가 달라져 '/' 이렇게만 적어야 합니다.
  outputDir는 ../docs로 사용하셔야 합니다. source를 master branch /docs folder로 선택했기 때문에 정확한 위치에 빌드 폴더가 존재해야 합니다.
- process.env.BASE_URL와 같은 환경 변수를 사용하면 publicPath에서 사용한 path를 참조할 수 있습니다.
  ``` javascript
    data() {
        return {
            homeUrl: `${process.env.BASE_URL}`,
            resumeUrl: `${process.env.BASE_URL}doc/resume.pdf`,
            isActive: false,
        };
    },
    
    const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes,
    });
  ```
- https://github.com/windbella/portfolio-challenge-github-pages/blob/master/client/public/index.html  
  https://github.com/windbella/portfolio-challenge-github-pages/blob/master/client/public/404.html
  ``` javascript
    <script type="text/javascript">
      (function(l) {
        if (l.search) {
          var q = {};
          l.search.slice(1).split('&').forEach(function(v) {
            var a = v.split('=');
            q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
          });
          if (q.p !== undefined) {
            window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + (q.p || '') +
              (q.q ? ('?' + q.q) : '') +
              l.hash
            );
          }
        }
      }(window.location))
    </script>
  ```
  ``` javascript
    <!-- SPA -->
    <script type="text/javascript">
      var segmentCount = 1; // custom domain을 사용하는 경우 0

      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + segmentCount).join('/') + '/?p=/' +
        l.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
        (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  ```
  github page에서 SPA 스타일로 서비스하기 위한 코드들입니다. (history mode)  
  https://github.com/sujinleeme/spa-github-pages-ko
  위 페이지를 참고했고 자세한 설명도 위 페이지에서 볼 수 있습니다.
