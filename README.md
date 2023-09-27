<div align="center">
  <a href="https://github.com/tjddnr7760/stackoverflow_clone/assets/42529087/97f8f760-ae32-4d8a-8bd5-57cfd9765805">
    <img src="https://github.com/tjddnr7760/stackoverflow_clone/assets/42529087/97f8f760-ae32-4d8a-8bd5-57cfd9765805" alt="Logo" width="150" height="130">
  </a>
  <a href="http://shellwe.net">
    <p align="center">
    배포 링크(Guest Login 버튼 사용하여 둘러보세요!)
    </p>
  </a>

  <p align="center">
    황성욱 담당 부분 소개 및 요약
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>목차</summary>
  <ol>
    <li><a href="#프로젝트-소개">프로젝트 소개</a></li>
    <li><a href="#아키텍처">아키텍처</a></li>
    <li><a href="#기술스택">기술 스택</a></li>
    <li><a href="#erd">ERD</a></li>
    <li><a href="#api-명세서">API 명세서</a></li>
    <li><a href="#주요-기능-소개">주요 기능 소개</a></li>
    <li><a href="#개발자-테스트-체크-리스트">개발자 테스트 체크 리스트</a></li>
    <li><a href="#리팩터링-예정-목록">리팩터링 예정 목록</a></li>
  </ol>
</details>


## 프로젝트 소개
![image](https://github.com/tjddnr7760/stackoverflow_clone/assets/42529087/5283f889-3f39-4959-bdc9-291e5706b97a)  

물품 및 재능을 조회하고 교환요청을 통해 DM으로 물물 교환할 수 있습니다. 저는 아래의 기능을 담당하여 하였습니다.

구현 목록:
* 물품 및 재능(Shell) 생성
* Shell 조회
* Shell 교환요청
* 교환요청 수락 후 DM 연결
* Shell 좋아요
* 거래 내역
* 프로필
* 유저 인증
* 예외처리
* Github Actions 배포
* ERD 설계

## 아키텍처
![image](https://github.com/tjddnr7760/stackoverflow_clone/assets/42529087/fa653ce0-213f-4a68-b733-9dd4e48e1ed1)

## 기술스택
### 백엔드 기술 스택
Java 11,  Gradle,  Spring Boot,  Spring Data Jpa,  Spring Security,  Lombok,  MySql,  H2,  Mail,  Thymeleaf
### 인프라 기술 스택
Github Actions,  Aws Ec2,  Aws S3

## ERD
![image](https://github.com/tjddnr7760/stackoverflow_clone/assets/42529087/79bd0172-576d-4cae-a167-19d9cc2ffef3)

## API 명세서
<a href="https://www.notion.so/codestates/API-02205943da8648c98ea5c27f463405ef">
    API 명세서
</a>

## 주요 기능 소개
### Shell 생성
카테고리, 제목, 이미지, 내용, 태그를 입력하여 나의 Shell을 생성합니다.
### Shell 조회
물품과 재능을 카테고리별로 최신순 혹은 과거순으로 조회할 수 있습니다.
### Shell 교환요청
상대방의 Shell을 교환요청하면 나의 Shell을 선택하고 상대방의 수락을 대기합니다. 
### Shell DM 연결
상대방이 교환요청을 수락하면 자동으로 DM로 연결됩니다.

## 개발자 테스트 체크 리스트
<a href="https://www.notion.so/codestates/4b440ecd746e48ca8dd5e9ae3f0da1ed?v=aa472c046d8f4acf94246e589dd874f3">
   체크 리스트 항목
</a>

## 리팩터링 예정 목록
* 테스트 코드 추가
* 매퍼 제거
* 성능 테스트
* 성능 최적화
* 로드 밸런싱
* 로직 시각화 및 정리
