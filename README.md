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
(해상도에 따라 글씨가 깨져보일 수 있습니다. 페이지를 확대하시면 확인됩니다.)

![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/4deb275c-96e4-4c59-9587-253480c7fa69)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/2ac48e56-2003-43c0-a28f-953d5064198e)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/c247a93f-1b7f-42ff-8639-40692991232c)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/c69052ee-8dc4-4367-a47c-6c9b60d1e848)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/4785f0ea-325c-4ac1-aac6-6a161d8e6eff)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/8298e4e1-2c87-456a-b77c-d7f00bff66c5)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/d6b624d5-0263-48d7-bf6b-82705b4262b8)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/cd3dc7fe-ce41-4aa5-a8e0-c5c387a838c3)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/ec3e8397-21c8-467f-8ba5-a11e583efcc0)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/f5098f88-c318-472d-8561-4e67705b6d83)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/de782cf7-bbc7-4bd2-8bc8-df0d6b1989a3)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/266e64f0-d074-4cee-b0fc-74e6465b2f0d)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/89909d7d-e07e-4fe8-a21a-a607e7069f0b)


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
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/44292757-a9f7-4aad-bca3-863467649e6d)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/ba7c9e18-4e68-482a-852c-5eb655f83e57)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/ec0f8e20-495b-46b2-9ab9-ebc97cac8d9b)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/a62a95bd-08de-40d6-8f9a-842515515716)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/4859a103-f976-41dc-8cea-744dcd4fd792)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/00a495ad-7a11-4d72-b3eb-f355aebedeb4)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/33983d4c-9035-427b-a009-648eb19aadf9)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/b8c9d849-f153-4faf-9a1e-a57340314827)
![image](https://github.com/tjddnr7760/cafekiosk/assets/42529087/7e0e351a-5965-4623-a00f-486f8ee1fefc)

## 리팩터링 예정 목록
* 테스트 코드 추가
* 매퍼 제거
* 성능 테스트
* 성능 최적화
* 로드 밸런싱
* 로직 시각화 및 정리
