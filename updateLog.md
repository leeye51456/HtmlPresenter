# HtmlPresenter Update Log

## 1.1

### 1.1.160130.4
1. 송출 창
  - 송출 창에서는 마우스 커서를 표시하지 않도록 수정했습니다.
1. 배경 스위처
  - 다른 배경을 선택했다가 검은 배경을 선택한 경우 Preview가 검은 배경으로 바뀌지 않던 버그를 수정했습니다.
  - 배경 리스트 표
    - 마우스를 올리면 해당 행에 음영 처리가 되도록 수정했으며, 음영이 들어간 행을 클릭하면 PVW에 선택이 되도록 수정했습니다. 이전에는 파일 이름을 클릭해야 PVW에 선택이 되었습니다.
    - 체크 상자 선택 영역을 '체크' 열 너비까지 넓혔습니다.

### 1.1.160128.3
1. 송출 창
  - 배경 전환 내부 동작을 수정하였습니다.
  - 송출 창을 띄운 채로 새로고침하여 스위처와 송출 창이 더 이상 통신할 수 없게 된 상태에서 송출 창 띄우기/닫기 버튼을 누르면 송출 창을 다시 띄우도록 안내합니다.
1. 세부 설정
  - 세부 설정 영역을 펼치거나 접을 수 있도록 수정했습니다.
    - 적용·취소 버튼을 누르면 변경한 설정이 적용·취소 처리되며, 설정 영역이 접힙니다.
1. 배경 스위처
  - Preview 기능을 추가하였습니다. 화면 전환 전, 아래에서 선택한 배경을 미리 볼 수 있습니다.
  - 배경 번호를 입력하여 내보내는 기능을 삭제했습니다. 원하는 배경을 PVW 열에서 선택하여 Preview에 올리고 전환 버튼을 누르면 그 배경이 송출됩니다.
    - 전환 버튼을 누르면 PVW 열에서 선택한 내용이 송출되며, PVW 선택이 해제되고 Preview 화면은 사라집니다.
    - 파일 이름을 클릭해도 PVW 열에 선택이 됩니다.
    - 리스트를 수정하기 위해 체크 열에서 선택하려면 체크 열의 체크박스를 직접 클릭해야 합니다.
  - **CUT, AUTO 버튼의 자리를 서로 바꾸고**, 두 버튼의 위치를 옮겼습니다.
  - 리스트 수정 도구의 버튼이 수정되었습니다.
  - 배경 리스트 표시 방식이 수정되었습니다.

=====

## 1.0

### 1.0.160118.2
- 리스트의 순서를 조정하는 기능을 추가했습니다.
- AUTO, CUT 버튼의 크기를 키웠습니다.
- 리스트 비우기 버튼을 클릭한 후 파일 선택 폼으로 포커스가 이동하도록 수정했습니다.
- 송출 화면에서 각 레이어의 배경을 투명에서 검정으로 변경했습니다.

### 1.0.160117.1
- 최초 업로드
- 리스트의 항목을 수정하는 기능을 보강했습니다.
  - 리스트 항목 선택 제거
  - 리스트 선택 반전
  - 리스트 선택 해제
- 세부 설정 기능을 추가했습니다.
  - 딜레이는 밀리초 단위로 지정되며, 전환 버튼을 누른 후 얼마 뒤에 실행할 것인지를 설정합니다.
  - 전환 시간은 초 단위로 지정되며, AUTO 버튼으로 배경을 전환할 때 얼마 동안 전환 효과를 줄 것인지를 설정합니다.
  - 설정이 변경되었으나 적용되지 않은 상태라면 취소 버튼 옆에 \* 표시가 나타납니다.
- 간단한 CSS를 적용했습니다.
- 버전 정보를 추가했습니다.

## 버전 정보 없음
- 최초 제작
- 기본적인 기능
  - 송출 창 띄우기/닫기(닫을 때 확인 창 표시)
  - 딜레이 100ms, 전환 시간 1초
  - 배경 번호를 지정하여 디졸브 또는 컷 효과로 배경 전환
  - 파일을 선택하여 리스트에 추가
  - 마지막 항목 또는 리스트 전체 지우기
