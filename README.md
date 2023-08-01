
# 👨‍💻 프로젝트 개요

Shell We는 이용자간의 물물 교환을 지원하는 웹 애플레케이션입니다. 

자신이 가진 유형의 물건(product)와 무형의 재능(talent)을 게시글에 올리고, 마음에 드는 게시글에 교환 요청을 합니다.

요청을 받은 사용자는 들어온 요청들 중, 자신이 원하는 물품이나 재능을 올린 이용자에게 거래요청을 합니다.

그 후, 두 이용자는 채팅방으로 이동하여, 실시간 채팅으로 서로 간의 자유로운 소통을 통해 거래를 진행합니다.

<br>
<br>

## 🔗 배포 링크
<h5>http://shellwe.s3-website.ap-northeast-2.amazonaws.com</h5>
<br>

## 🔗 노션 주소
<h5>https://www.notion.so/ShellWe-1d0dc730b8ca4e4880c8b15f7461c257</h5>
<br>


## 🧑🏻‍💻 Member

<table>
<tbody>
    <tr>
        <td>
            <a href="https://github.com/DongwooJoo">
                <img src="https://github.com/DongwooJoo.png" width="70px" />
            </a>
        </td>
        <td>
            <a href="https://github.com/lhs9602">
                <img src="https://github.com/lhs9602.png" width="70px" />
            </a>
        </td>
        <td>
            <a href="https://github.com/Jeongchanyeong">
                <img src="https://github.com/Jeongchanyeong.png" width="70px" />
            </a>
        </td>
        <td>
            <a href="https://github.com/Mason3144">
                <img src="https://github.com/Mason3144.png" width="70px" />
            </a>
        </td>
        <td>
            <a href="https://github.com/Cishcash8725">
                <img src="https://github.com/Cishcash8725.png" width="70px" />
            </a>
        </td>
        <td>
            <a href="https://github.com/tjddnr7760">
                <img src="https://github.com/tjddnr7760.png" width="70px" />
            </a>
        </td>
    </tr>
    <tr>
        <td><p align="center">주동우<br>[팀장/FE]</p></td>
        <td><p align="center">이호섭<br>[FE]</p></td>
        <td><p align="center">정찬영<br>[FE]</p></td>
        <td><p align="center">이태섭<br>[부팀장/BE]</p></td>
        <td><p align="center">김영준<br>[BE]</p></td>
        <td><p align="center">황성욱<br>[BE]</p></td>
    </tr>
</tbody>
</table>
<br>
<br>

# 📌 주요 기능

### 게시글 생성
- 카테고리와 제목,본문을 작성하여 이용자가 게시글에 대한 설명을 할 수 있다.
- 이미지를 최대 4개까지 드래그(drag)로 업로드 가능
- 교환하기를 원하는 품목을 태그를 생성하여 등록가능.

### 게시글 리스트 조회
- product와 talent라는 2개의 타입과 각각 7개의 카테고리로 분류된 게시글의 목록을 볼 수 있다.
- 스크롤을 내리면 무한 스크롤을 통해 다음 게시글을 불러온다.
- 검색창으로 원하는 게시글을 검색할 수 있고, 드롭다운 메뉴로 최신순,과거순 정렬이 가능하다.
- 원하는 게시글은 이미지 속 조개 버튼을 클릭하면, 북마크를 등록할 수 있다.
- 유저 아바타를 클릭 시, 해당 유저가 올린 모든 게시글을 볼 수 있다.

### 게시글 개별 조회
- 이미지 칸의 버튼을 클릭하면, 등록한 다른 이미지로 전환해서 볼 수 있다.
- 본문은 기본 상태에서는 일부분만 보이며, 더보기를 클릭 시 전체 내용이 출력된다.
- 자신의 게시글일 경우, 사이드바에서 거래 상태 변경,게시글 수정,삭제를 할 수 있다.
- 교환 요청을 클릭하면, 자신이 올린 게시글의 목록을 보여주며 거래 요청할 품목을 선택할 수 있다.

### 요청함
- 등록한 게시글에서 온 모든 거래요청이 출력된다.
- 거래 요청들 중, 이용자가 원하는 요청만 선택가능하다.

### DM
- 요청 수락 시, 채팅창이 자동으로 생성된다.
- 사용자는 채팅 목록을 조회할 수 있다.
- 해당 채팅창에서 실시간 온라인 대화가 가능하다.
<br>
<br>

# 📚 STACKS AND TOOLS

<div align=center>
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=react query&logoColor=black">
<img src="https://img.shields.io/badge/styledComponent-DB7093?style=for-the-badge&logo=styled-components&logoColor=black">
<img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=black">
</div>
<br>
<div align=center>
<img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
<img src="https://img.shields.io/badge/spring boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white">
<img src="https://img.shields.io/badge/spring security-6DB33F?style=for-the-badge&logo=spring-security&logoColor=white">
<img src="https://img.shields.io/badge/spring Websocket-6DB33F?style=for-the-badge&logo=spring Websocket&logoColor=white">
<img src="https://img.shields.io/badge/spring data jpa-6DB33F?style=for-the-badge&logo=spring data jpa&logoColor=white">
<br>
<img src="https://img.shields.io/badge/Mysql-232F3E?style=for-the-badge&logo=mysql&logoColor=white"> 
<img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white"> 
<img src="https://img.shields.io/badge/aws s3-569A31?style=for-the-badge&logo=amazons3&logoColor=white">
<img src="https://img.shields.io/badge/aws ec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">
</div>
<br>
<div align=center>
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/Github Actions-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white">
<br>
<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
<img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
</div>

# 주요 화면 캡쳐
![1](https://github.com/codestates-seb/ShellWe/assets/34961388/185cd25c-55d4-451d-9d7b-be2c226f5c29)
![2](https://github.com/codestates-seb/ShellWe/assets/34961388/9163e03a-2ece-408c-9cfc-9cc51a07e0f7)
![3](https://github.com/codestates-seb/ShellWe/assets/34961388/a428af11-3f04-46df-b9f9-1409fc8fd215)
![4](https://github.com/codestates-seb/ShellWe/assets/34961388/b9fc3ad6-c54f-44c1-8d18-3cf9ef5206e1)
![5](https://github.com/codestates-seb/ShellWe/assets/34961388/eb04aeca-3bb2-420b-8db9-9f93667984dc)
![6](https://github.com/codestates-seb/ShellWe/assets/34961388/e5a8a857-830c-4cbf-9cbd-3d649b6a7808)


