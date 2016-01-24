var wnd;
var fileListArray = [];
var bgPgm = 0;
var timer1;
var timer2;
var delay = 250;
var takeDuration = 2;

function settingsToggle() {
  var settingsDiv = document.getElementById('settings')
  if (settingsDiv.style.display == 'block') {
    settingsDiv.style.display = 'none';
  } else {
    settingsDiv.style.display = 'block';
  }
}

function applySettings() {
  delay = Number(document.getElementById('delayNum').value);
  takeDuration = Number(document.getElementById('takeDurationNum').value);
  document.getElementById('isSettingChanged').innerHTML = '';
}

function restoreSettings() {
  document.getElementById('delayNum').value = delay;
  document.getElementById('takeDurationNum').value = takeDuration;
  document.getElementById('isSettingChanged').innerHTML = '';
}

function settingChanged() {
  document.getElementById('isSettingChanged').innerHTML = '*';
}

function wndInit() {
  wnd = window.open('', 'wnd', 'scrollbar=no');
  wnd.document.write('\
<!doctype html>\n\
<html>\n\
<head>\n\
<title>송출.HtmlPresenter</title>\n\
<style>\n\
body {\n\
  background-color: #000000;\n\
  margin: 0;\n\
  padding: 0;\n\
}\n\
video,img,div {\n\
  position: absolute;\n\
  left: 0;\n\
  top: 0;\n\
  width: 100%;\n\
  height: 100%;\n\
  margin: 0;\n\
  padding: 0;\n\
}\n\
#src1,#src2,#src3 {\n\
  opacity: 0;\n\
  background-color: #000000;\n\
}\n\
#black {\n\
  background-color: #000000;\n\
}\n\
</style>\n\
</head>\n\
<body>\n\
<div id=\"src1\"></div>\n\
<div id=\"src2\"></div>\n\
<div id=\"src3\"></div>\n\
<div id=\"black\"></div>\n\
</body>\n\
</html>');
}

function wndOnOff() {
  if (!wnd || wnd.closed) {
    wndInit();
  } else if (confirm("정말로 송출 창을 닫으시겠습니까?")) {
    wnd.close();
  }
}

function checkBgNo() {
  var bgNo = document.getElementById('bgNoNum');
  if (Number(bgNo.value) > Number(bgNo.max)) {
    bgNo.value = bgNo.max;
  } else if (Number(bgNo.value) < Number(bgNo.min)) {
    bgNo.value = bgNo.min;
  }
  document.getElementById('bgAutoBtn').focus();
}

function countBgNo(inc) {
  var bgNo = document.getElementById('bgNoNum');
  bgNo.value = Number(bgNo.value) + inc;
  checkBgNo();
}

function afterSrc1Load() {
  setTimeout(function() {
    wnd.document.getElementById('src2').style.opacity = 0;
  }, delay);
}
function afterSrc2Load() {
  setTimeout(function() {
    wnd.document.getElementById('src3').style.opacity = 0;
  }, delay);
}
function afterSrc3Load() {
  setTimeout(function() {
    wnd.document.getElementById('src1').style.opacity = 1;
    wnd.document.getElementById('src2').style.opacity = 1;
    wnd.document.getElementById('src3').style.opacity = 1;
  }, delay);
}

function bgTrans(dur) {
  if (!wnd || wnd.closed) {
    alert('먼저 송출 창을 띄우세요.');
    document.getElementById('wndOnOffBtn').focus();
  } else {
    setTimeout(function() {
      document.getElementById('bgAutoBtn').disabled = undefined;
      document.getElementById('bgCutBtn').disabled = undefined;
    }, delay + dur * 1000);
    document.getElementById('bgAutoBtn').disabled = 'disabled';
    document.getElementById('bgCutBtn').disabled = 'disabled';
    var bgNo = document.getElementById('bgNoNum').value - 1;
    var src1 = wnd.document.getElementById('src1');
    var src2 = wnd.document.getElementById('src2');
    var src3 = wnd.document.getElementById('src3');
    var black = wnd.document.getElementById('black');
    src1.style.transition = 'opacity ' + dur + 's';
    src2.style.transition = 'opacity ' + dur + 's';
    src3.style.transition = 'opacity ' + dur + 's';
    black.style.transition = 'opacity ' + dur + 's';
    if (bgNo == -1) {
      bgPgm = 0;
      black.style.opacity = 1;
    } else if (fileListArray[bgNo].slice(-3) == 'mp4') {
      if (bgPgm == 0) {
        bgPgm = 3;
        src3.style.transition = 'opacity 0s';
        src3.innerHTML = '<video src="src\\' + fileListArray[bgNo] + '" autoplay loop muted></video>';
        src1.innerHTML = '';
        src2.innerHTML = '';
        afterSrc3Load();
        black.style.opacity = 0;
      } else if (bgPgm == 3) {
        bgPgm = 2;
        src2.innerHTML = '<video src="src\\' + fileListArray[bgNo] + '" autoplay loop muted></video>';
        src1.innerHTML = '';
        afterSrc2Load();
      } else if (bgPgm == 2) {
        bgPgm = 1;
        src1.innerHTML = '<video src="src\\' + fileListArray[bgNo] + '" autoplay loop muted></video>';
        src3.innerHTML = '';
        afterSrc1Load();
      } else if (bgPgm == 1) {
        bgPgm = 3;
        src3.innerHTML = '<video src="src\\' + fileListArray[bgNo] + '" autoplay loop muted></video>';
        src2.innerHTML = '';
        afterSrc3Load();
      } else {
        alert('error!');
      }
    } else {
      if (bgPgm == 0) {
        bgPgm = 3;
        src3.style.transition = 'opacity 0s';
        src3.innerHTML = '<img src="src\\' + fileListArray[bgNo] + '"></img>';
        src1.innerHTML = '';
        src2.innerHTML = '';
        afterSrc3Load();
        black.style.opacity = 0;
      } else if (bgPgm == 3) {
        bgPgm = 2;
        src2.innerHTML = '<img src="src\\' + fileListArray[bgNo] + '"></img>';
        src1.innerHTML = '';
        afterSrc2Load();
      } else if (bgPgm == 2) {
        bgPgm = 1;
        src1.innerHTML = '<img src="src\\' + fileListArray[bgNo] + '"></img>';
        src3.innerHTML = '';
        afterSrc1Load();
      } else if (bgPgm == 1) {
        bgPgm = 3;
        src3.innerHTML = '<img src="src\\' + fileListArray[bgNo] + '"></img>';
        src2.innerHTML = '';
        afterSrc3Load();
      } else {
        alert('error!');
      }
    }
  document.getElementById('bgAutoBtn').focus();
  }
}

function displayFileListHtml() {
  var text = '<tr><td>&nbsp;</td><td><input type="radio" id="pvwRadio0" name="pvwRadio"></td><td><input type="radio" id="pgmRadio0" name="pgmRadio" class="pgmRadio" disabled></td><td>&nbsp;</td><td class="tdLeft"><label for="pvwRadio0">(검은 화면)</label></td></tr>';
  if (fileListArray.length > 0) {
    for (i = 0; i < fileListArray.length; i++) {
      text += '<tr><td><input type="checkbox" id="checkbox' + (i + 1) + '"></td><td><input type="radio" id="pvwRadio' + (i + 1) + '"></td><td><input type="radio" id="pgmRadio' + (i + 1) + '" class="pgmRadio" disabled></td><td>';
      if (fileListArray[i].slice(-3) == 'mp4') {
        text += 'V';
      } else {
        text += 'I';
      }
      text += '</td><td class="tdLeft"><label for="pvwRadio' + (i + 1) + '">' + fileListArray[i] + '</label></td></tr>';
    }
  }
  document.getElementById('bgList').innerHTML = text;
}

// 폐기예정
function updateBgNoMax() {
  var bgNo = document.getElementById('bgNoNum')
  bgNo.max = fileListArray.length;
  if (bgNo.value > bgNo.max) {
    bgNo.value = bgNo.max;
  }
}

function addFileList() {
  var fileForm = document.getElementById('fileForm');
  if (fileForm.files.length > 0) {
    for (i = 0; i < fileForm.files.length; i++) {
      fileListArray.push(fileForm.files[i].name);
    }
    displayFileListHtml();
    updateBgNoMax();
    alert('' + fileForm.files.length + '개의 파일이 리스트에 추가되었습니다.');
    fileForm.value = '';
    document.getElementById('bgNoNum').focus();
  } else {
    alert('먼저 리스트에 추가할 파일을 선택하세요.');
    document.getElementById('fileForm').focus();
  }
}

function moveSelection(direction) {
  var checkedIndex = -1;
  var temp;
  for (i = fileListArray.length; i > 0; i--) {
    if (document.getElementById('checkbox' + i).checked) {
      if (checkedIndex == -1) {
        checkedIndex = i - 1;
      } else {
        alert('하나만 체크하세요.');
        return;
      }
    }
  }
  if (checkedIndex == -1) {
    alert('순서를 변경하려는 항목을 선택하세요.');
    return;
  }
  if (checkedIndex == 0 && direction == -1) {
    alert('이 항목은 위로 올릴 수 없습니다.');
    return;
  } else if (checkedIndex == fileListArray.length - 1 && direction == 1) {
    alert('이 항목은 아래로 내릴 수 없습니다.');
    return;
  }
  temp = fileListArray[checkedIndex];
  fileListArray[checkedIndex] = fileListArray[checkedIndex + direction];
  fileListArray[checkedIndex + direction] = temp;
  displayFileListHtml();
  checkedIndex += direction;
  document.getElementById('checkbox' + (checkedIndex + 1)).checked = true;
}

function removeSelectedFile() {
  if (fileListArray.length == 0) {
    alert('리스트가 비어 있습니다.');
    document.getElementById('fileForm').focus();
  } else if (confirm('정말로 선택한 항목을 지우시겠습니까?')) {
    for (i = fileListArray.length; i > 0; i--) {
      if (document.getElementById('checkbox' + i).checked) {
        fileListArray.splice(i - 1, 1);
      }
    }
    displayFileListHtml();
    updateBgNoMax();
  }
}

function invertSelection() {
  for (i = fileListArray.length; i > 0; i--) {
    if (document.getElementById('checkbox' + i).checked) {
      document.getElementById('checkbox' + i).checked = false;
    } else {
      document.getElementById('checkbox' + i).checked = true;
    }
  }
}

function uncheckAll() {
  for (i = fileListArray.length; i > 0; i--) {
    document.getElementById('checkbox' + i).checked = false;
  }
}

function clearFileList() {
  if (fileListArray.length == 0) {
    alert('리스트가 비어 있습니다.');
  } else if (confirm('정말로 리스트를 비우시겠습니까?')) {
    fileListArray = [];
    displayFileListHtml();
    updateBgNoMax();
    alert('리스트를 비웠습니다.');
  }
  document.getElementById('fileForm').focus();
}
