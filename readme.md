# [HtmlPresenter](https://github.com/leeye51456/HtmlPresenter)

이것은 반복 배경 영상을 전환하기 위해 제작되었습니다. 제작자가 필요하다고 생각하는 기능부터 천천히 구현하고 있습니다.

## 사용법
1. `main.html` 파일을 실행합니다.
  - 가능하면 최신 버전의 웹 브라우저로 실행하여 주십시오. Internet Explorer 8 등 오래된 웹 브라우저를 사용하면 오작동할 위험이 큽니다.
  - 정상 작동 확인한 웹 브라우저: Chrome 47 (64-bit), Edge 25
  - Internet Explorer의 경우 기본 설정으로는 오작동합니다.
1. 배경으로 사용할 파일을 선택하고 **리스트에 추가** 버튼을 누릅니다.
  - 선택 가능한 파일 형식은 다음과 같습니다.
    - 비디오 파일: `mp4`
      - 비디오 H264, 오디오 AAC만 재생 가능.
      - 비디오 엘리먼트가 음소거 상태이기 때문에 소리는 재생되지 않습니다.
      - 비디오의 가로세로비가 화면의 가로세로비와 맞지 않을 경우 상하 또는 좌우로 검은 공간이 보일 수 있습니다.
    - 이미지 파일
1. **송출 창 띄우기/닫기** 버튼을 눌러서 송출 창을 띄우고, 내보내려는 모니터로 보낸 뒤, `F11` 키를 눌러 전체화면으로 전환합니다.
1. 원하는 배경을 `main.html` 파일이 있는 폴더 안의 `src` 폴더에 둡니다.
1. `src` 폴더 안의 파일을 리스트에 추가합니다.
1. 원하는 배경의 번호를 선택하고, **AUTO** 또는 **CUT** 버튼을 클릭하여 배경을 전환합니다.

## 세부 설정
1. **딜레이**는 *밀리초* 단위로 설정되며, 전환 버튼을 클릭하고 얼마 뒤에 실행할지에 대한 값입니다.
1. **전환 시간**은 *초* 단위로 설정되며, 화면 전환에 걸리는 시간입니다.
1. **적용** 버튼을 누르지 않으면 변경 사항이 적용되지 않습니다. 변경 사항이 있다면 취소 버튼 옆에 \* 표시가 나타납니다.

## 배경 리스트 조작 방법
1. 파일을 선택한 뒤, **리스트에 추가** 버튼을 누르면 선택한 파일이 리스트에 추가됩니다.
  - 항목 앞의 [V]는 비디오, [I]는 이미지를 뜻합니다.
  - **실제 파일의 위치와는 관계없이** `main.html` 파일이 있는 폴더 기준으로, `./src/(리스트 상 파일명)`을 불러옵니다.
1. 리스트 앞의 체크박스에 체크를 하고,
  - **▲**, **▼** 버튼을 누르면 선택된 항목을 위·아래로 옮길 수 있습니다. 단, 하나만 선택된 상태에서만 작동합니다.
  - **선택 항목 지우기** 버튼을 누르면 선택된 항목이 리스트에서 제거됩니다.
  - **선택 반전** 버튼을 누르면 선택 상태가 반전됩니다.
  - **선택 해제** 버튼을 누르면 선택이 모두 해제됩니다.
  - **리스트 비우기** 버튼을 누르면 모든 항목이 리스트에서 제거됩니다.
