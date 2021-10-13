# ez-chat-FE

### 프레임워크 : React

### (a) 닉네임 설정 화면
  - [x] (a-1) 닉네임을 설정하면 react-cookie를 사용해서 쿠키에 닉네임 저장
  - [x] (a-2) 닉네임이 쿠키에 저장되어 있으면 채팅 화면
  - [x] (a-3) 화면 구성
  - [x] (a-4) 로그인 버튼을 누르면 채팅화면으로 전환
### (b) 채팅 화면
  - [ ] (b-1) 추후 확장을 위해 채팅 방이 있고 채팅 방에 이미 접속된 것 처럼 구현
  - [ ] (b-2) 쿠키에 저장된 닉네임을 화면에 출력
  - (b-3) 로그아웃 버튼
    - [ ] (b-3-1) 누르면 쿠키에서 닉네임 삭제
    - [ ] (b-3-2) 닉네임 설정 화면으로 전환
    - [ ] (b-3-3) 채팅 방에서 나가기
  - [ ] (b-4) UI 구성
### (c) 채팅 기능
  - (c-1) 채팅 방 들어가기
    - [ ] (c-1-1) 채팅 방에 접속하면 "<닉네임>님이 접속했습니다"를 모두에게 전송하도록 서버에 요청
  - (c-2) 채팅 방 나가기
    - [ ] (c-2-1) 채팅 방에서 나가면 "<닉네임>님이 떠났습니다"를 모두에게 전송하도록 서버에 요청
  - (c-3) 채팅 보내기
    - [ ] (c-3-1) 채팅 방에 속한 모두에게 메시지 전송하도록 서버에 요청
  - (c-4) 채팅 받기
    - [ ] (c-4-1) 서버가 보내온 메시지를 출력