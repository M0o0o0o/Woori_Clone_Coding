## 우리은행 클론코딩   

### 클론코딩을 진행한 이유 
- 웹 공부를 하면서 사이드 프로젝트로 개인 블로그를 만들려고 진행하던 중 HTML, CSS의 지식이 부족해서 원하는 디자인대로 나오지 않아 프론트 관련 공부에 대한 필요성을 느끼게 되어서 클론코딩을 진행하게 되었습니다. 처음에는 무작정 사이트를 하나 선정해서 따라 만들어 보다가 효율성이 떨어지는 것 같아서 클론코딩 관련 자료들을 찾다가 유튜버 [리베하얀](https://www.youtube.com/watch?v=EYDtiZIC4j8&list=PL_6yF2upGJYsFBBZMhUlZZ0VyBLor5JwL&index=34)님이 진행하시는 클론코딩 강의를 보면서 우리은행 클론코딩을 따라 만들어 보면서 정리가 필요한 부분들을 작성해봤습니다.

### 웹 접근성 
- 우선 웹 접근성이란 장애인뿐만 아니라 모든 사람이 웹 등 다양한 정보통신 기기스를 손쉽게 활용할 수 있도록 만드는 것을 의미합니다.
- 또한 우리나라는 ’08년 4월 11일 부터 시행된「장애인차별금지 및 권리구제 등에 관한 법률」(이하“장차법”) 제 21조 및 동법 시행령 제14조에 의거하여 공공 및 민간 웹 사이트의 웹 접근성 준수하는 것이 의무화되었습니다.
- [리베하얀](https://www.youtube.com/watch?v=EYDtiZIC4j8&list=PL_6yF2upGJYsFBBZMhUlZZ0VyBLor5JwL&index=34)님의 클론코딩을 진행하면서 나온 웹 접근성 관련 예시를 몇 가지 정리해봤습니다.
***
* '본문 바로가기'(건너뛰기 링크)
  + ```<a href="#" class="skip">본문바로가기</a>```
  + <pre><code>/* css 코드 */
    .skip {
        position: absolute;
        left: 0;
        top: -100%;
        z-index: 2;
        width: 100%;
        height: 50px;
        font-size: 15px;
        color: #fff;
        text-align: center;
        line-height: 50px;
        transition: all 0.5s;
        background: #000;
    }
    
    .skip:focus {
        top: 0;
    }
    </code></pre>
> '건너뛰기 링크'란 웹 접근성을 위해서 마우스를 사용하지 못하는 서비스 이용자들을 위해 tab 키를 눌렀을 경우 메뉴를 건너뛸 수 있도록 하는 기능입니다. CSS 코드를 보면 position : absolute;을 해줬는데, 해당 skip 클래스를 부여받은 <a> 태그는 부모가 body라서 페이지 상단에서 자기 크기만큼 top : -100%;를 해줬습니다. 따라서 해당 <a> 태그가 focus 되면 top: 0;을 통해서 보일 수 있도록 설정합니다. 
  
* 숨김 텍스트 
  + ```                     
                    <h2 class="hide">SNS</h2>
                    <ul class="sns">
                        <li>
                            <a href=""><img src="images/sns_3.png" alt="페이스북" /></a>
                        </li>
                        <li>
                            <a href=""><img src="images/sns_1.png" alt="네이버 카페" /></a>
                        </li>
                        <li>
                            <a href=""><img src="images/sns_2.png" alt="유튜브" /></a>
                        </li>
                        <li>
                            <a href=""><img src="images/sns_4.png" alt="인스타그램" /></a>
                        </li>
                    </ul>
    ```
  + <pre><code>.hide {
    overflow: hidden;
    display: block;
    position: absolute;
    border: 0;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px); }
    </code></pre>
 
>  위의 코드 예시에서는 sns와 관련된 링크 전에 숨김 텍스트를 활용해서 앞으로 나올 링크, 이미지들이 sns라는 것을 알려줍니다. '숨김 텍스트'란 스크린 리더를 사용하는 시각장애인들이 컴퓨터를 사용할 때 화면에 나타나는 정보들을 음성으로 출력해주는 소프트웨어입니다.
  웹에 접근할 때도 음성에만 의존해서 이용하기 때문에 Image 같은 태그를 이용할 때 해당 태그가 어떤 사진인지 텍스트를 통해 알 수 있도록 해야합니다. 따라서 일반 사용자에게는 보이지 않지만 스크린 리더기를 통해 읽어질 수 있도록 적절한 CSS를 통해 활용해야 합니다.
  
***

### 전체적인 구조 
- 클론코딩은 '우리은행 시니어플러스'의 메인 페이지만 진행했으며, 전부 px로만 작성하였습니다. 전체적인 HTML의 대략적인 구조는 다음과 같습니다. 
```
<body>
  <a href="#" class="skip">본문바로가기</a>
  <header>
  </header>
  <section>
  </section>
  <section class=>
  </section>
  <!-- section 생략 -->
  <footer class="block">
  </footer>
</body>
```

- [메인 페이지](https://github.com/Lee-moo/Woori_Clone_Coding/blob/main/woori/index.png)에서 section에 해당하는 부분들(금융 서비스, 관심정보 ...)을 보면 전체적인 구조가 비슷한 것을 알 수 있습니다. 따라서 관련된 디자인의 중복을 피하고 코딩의 효율을 높이기 위해서 반복적으로 사용되는 부분들을 CSS에서 따로 Class Name을 부여해서 사용했습니다.
```
.block > div {
    margin: 0 auto;
    width: 1200px;
    padding: 100px 0 0;
}

.block .tit {
    text-align: center;
}

.block .tit p {
    font-size: 21px;
    color: #666;
    line-height: 1;
    padding: 0 0 40px;
}

.block .tit h2 {
    font-size: 38px;
    color: #333;
    line-height: 1;
    padding: 0 0 28px;
}  
```

***

