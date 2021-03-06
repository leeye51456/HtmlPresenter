# HtmlPresenter

이것은 웹 브라우저를 이용하여 이미지 또는 루프 영상 간 전환하는 도구입니다. 이 내용은 1.1.160130.4 버전 기준으로 작성되었습니다.

## 사용법
1. `main.html`을 실행합니다.
  - 가능하면 최신 버전의 웹 브라우저로 실행하여 주십시오. Internet Explorer 8 등 오래된 웹 브라우저를 사용하면 오작동할 위험이 큽니다.
  - 정상 작동 확인한 웹 브라우저: Chrome 47 (64-bit), Edge 25
  - Internet Explorer의 경우 기본 설정으로는 오작동합니다.
1. **송출 창 띄우기/닫기** 버튼을 눌러서 송출 창을 띄우고, 내보내려는 모니터로 보낸 뒤, `F11` 키를 눌러 전체화면으로 전환합니다.
1. 원하는 배경을 `main.html` 파일이 있는 폴더 안의 `src` 폴더에 둡니다.
1. 배경으로 사용할 파일을 `src` 폴더에서 선택하고 **리스트에 추가** 버튼을 누릅니다.
  - `main.html` 파일이 있는 폴더 기준으로, `./src/` 디렉토리의 파일만 정상 작동합니다. **다른 디렉토리(하위 디렉토리 포함)에서 선택한 경우 오작동합니다.**
    - `main.html`이 `D:\HtmlPresenter\` 디렉토리에 있다면, `D:\HtmlPresenter\src\` 디렉토리에 있는 이미지 및 mp4 파일만 정상 작동합니다.
  - 선택 가능한 파일 형식은 다음과 같습니다.
    - 비디오 파일: `mp4`
      - 비디오 코덱 H264, 오디오 코덱 AAC인 파일만 재생 가능.
      - 비디오 엘리먼트가 음소거 상태이기 때문에 소리는 재생되지 않습니다.
      - 비디오의 가로세로비가 화면의 가로세로비와 맞지 않을 경우 상하 또는 좌우로 검은 공간이 보일 수 있습니다.
    - 이미지 파일: 웹 브라우저에서 불러들일 수 있는 이미지 파일 형식 전체(png, jpg, gif 등)
1. 원하는 배경을 선택하여 Preview에 올리고, **AUTO** 또는 **CUT** 버튼을 클릭하여 배경을 전환합니다.
  - 배경을 Preview에 올리려면 **PVW** 열의 라디오버튼을 클릭하세요. 체크 열의 체크박스는 리스트를 수정할 때만 사용됩니다.
    - 파일 이름 부분을 클릭해도 라디오버튼을 클릭한 것과 같은 효과가 납니다.
  - **AUTO**는 dissolve 효과만 사용 가능합니다.

## 배경 리스트 조작 방법
1. 파일을 선택한 뒤, **리스트에 추가** 버튼을 누르면 선택한 파일이 리스트에 추가됩니다.
  - **실제 파일의 위치와는 관계없이** `main.html` 파일이 있는 폴더 기준으로, `./src/(리스트 상 파일명)`을 불러옵니다.
1. 리스트 **체크** 열의 체크박스에 체크를 하고,
  - **▲**, **▼** 버튼을 누르면 선택된 항목을 위·아래로 옮길 수 있습니다. 단, 하나만 선택된 상태에서만 작동합니다.
  - **선택 항목 지우기** 버튼을 누르면 선택된 항목이 리스트에서 제거됩니다.
  - **선택 반전** 버튼을 누르면 선택 상태가 반전됩니다.
  - **선택 해제** 버튼을 누르면 선택이 모두 해제됩니다.
  - **리스트 비우기** 버튼을 누르면 모든 항목이 리스트에서 제거됩니다.

## 세부 설정
- **세부 설정** 버튼을 누르면 설정 폼이 펼쳐지거나 접힙니다.
- **딜레이**는 *밀리초* 단위로 설정되며, 전환 버튼을 클릭하고 얼마 뒤에 실행할지에 대한 값입니다.
- **전환 시간**은 *초* 단위로 설정되며, 화면 전환에 걸리는 시간입니다.
- **적용** 또는 **취소** 버튼을 누르면 변경한 설정이 적용 또는 취소 처리되며, 설정 폼이 닫힙니다.
- **적용** 버튼을 누르지 않으면 변경 사항이 적용되지 않습니다. 변경 사항이 있다면 취소 버튼 옆에 **\*** 표시가 나타납니다.
