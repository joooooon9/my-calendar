// 필요한 규칙 : 2025 기준 4년마다 2월은 29일
// 2025.01.01 기준 일요일[0] 시작 ex)01.08 01.15 01.22 01.29 01.36  36은 31일을 넘기므로 다음달 2월 1일은 수요일
// 요일 시작위치 [0]일요일,[1]월,[2]화,3[수],4[목],5[금],6[토]
// 매 달 1일의 시작위치 : 현재 이전 달의 모든 일 수의 합 % 7
// 윤년인 해는 366일 아닌 해는 365일

//마지막 일 수 계산
const Yeartext = document.querySelector('.year span');
const Monthtext = document.querySelector('.month span');
let Maxdate = 0;
function Lastdate(Year, Month) {
    switch (Month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            Maxdate = 31;
            break;
        case 4: case 6: case 9: case 11:
            Maxdate = 30;
            break;
        case 2:
            if (Year % 4 == 1) {
                Maxdate = 29;
            } else {
                Maxdate = 28;
            }
            break;
    }console.log(Year + '년 ' + Month + ' 월의 마지막 일수는 ' + Maxdate);
    return Maxdate;
}

function Startday(Year, Month) {
    let totalday = 0;
    let startIndex = 0;
    for (let x = 2025; x < Year; x++) {
        if (Lastdate(x, 2) % 4 == 29) {
            totalday += 366;
            startIndex += 2;
        } else {
            totalday = 365
            startIndex++;
        } console.log(x + ' 년은' + totalday + '입니다.');
    }
    for (let i = 0; i < Month; i++) {
        totalday += Lastdate(Year, i);
        console.log(totalday + " 확인");
        startIndex = totalday % 7;
    } console.log(Year + ' 년' + Month + ' 월의 시작 인덱스 값은 ' + startIndex);
    return startIndex;
}
// 2025 ~ 2045년까지 달력정보 출력
function a(Year, Month) {
    Yeartext.innerHTML = Year;
    Monthtext.innerHTML = Month;
    const calendar = document.querySelectorAll('.J-calendar tbody td');
    let date_num = 1;
    let startIndex = Startday(Year, Month);
    let Maxdate = Lastdate(Year, Month);
    for (startIndex; startIndex < calendar.length; startIndex++) {
        if (date_num <= Maxdate) {
            calendar[startIndex].innerHTML = date_num++;
        }
    }
}
let Year = 2027;
let Month = 1;
a(Year, Month);