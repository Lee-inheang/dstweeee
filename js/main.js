/* 트윗 멘션 창 */

function mention(){
    document.getElementById('menshionBox').style.display="block";
}

function closemention(){
    document.getElementById('menshionBox').style.display="none";
}


/*버튼 활성화*/
function adjustHeight(){
    document.querySelector('textarea').maxLength = "280";
    if(document.querySelector('textarea').Length = null){
        document.getElementById('textSudmit').style.opacity ="40%";
    }else{
        document.getElementById('textSudmit').style.opacity ="100%";
    }
}


function adjustHeight2(){
    document.getElementById('Mension').maxLength = "280";
    if(document.getElementById('Mension').Length = null){
        document.getElementById('textSudmit2').style.opacity ="40%";
    }else{
        document.getElementById('textSudmit2').style.opacity ="100%";
    }
}




/*검색창*/
document.querySelector("#searchform").addEventListener("click",function(){
    document.querySelector('.searchSpan').style.color = 'rgb(' + 29 + ',' + 155 + ',' + 240 + ')';
    this.style.border= '1px solid rgb(' + 29 + ',' + 155 + ',' + 240 + ')';
    this.style.backgroundColor='#ffffff';
});
document.querySelector("#searchform").addEventListener("blur",function(){
    document.querySelector('.searchSpan').style.color = '#6b6b6b';
    this.style.border= '1px solid #ffffff';
    this.style.backgroundColor='#F3F3F3';

});


function heart(){
    if(document.querySelector('.heart').style.color='#333'){
        document.querySelector('.heart').style.color='red';
    }
}





/*트랜드*/
// let srt = '';

//  for(let i =0; i<10; i++){
//     srt+= '<li>';
//     srt+= '<span>Trending in South Korea</span> ';
//     srt+= '<p>자바스크립트</p>';
//     srt+= '<span>1,000tweet</span> ';
//     srt+= '</li>';
//  document.getElementById('hashTag').innerHTML= srt;
// };

// for(let i =9; i<10; i++){
//     srt+= '<li>';
//     srt+= '<a href="#">Show more</a> ';
//     srt+= '</li>';
//  document.getElementById('hashTag').innerHTML= srt;
// };


// let srt2 = '';
// for(let i =0; i<20; i++){
//     srt2+= '<div class="timeline">';
//     srt2+= '<div class="userline">';
//     srt2+=    '<div class="profileImg"> <div class="dog"> </div>';
//     srt2+=    '</div>';
//     srt2+=    '<div class="timeLname">';
//     srt2+=        '<span>홍길동 <label>@jojo_123</label></span>'; 
//     srt2+=            '<div class="Tcontent">';
//     srt2+=                '<p>트위터는 가볍게 이야기를 나누기 좋은 플렛폼입니다.<br>';
//     srt2+=                '저는 트위터를 애용합니다.';
//     srt2+=                    '배고프다고 편하게 글을 쓸 수 있거든요.';
//     srt2+=               '</p>';
//     srt2+=            '</div>';
//     srt2+=            '<div class="timeline_imoji">';
//     srt2+=                '<span class="material-symbols-outlined">';
//     srt2+=                    'send';
//     srt2+=                    '</span>';
//     srt2+=                '<span class="material-symbols-outlined">';
//     srt2+=                    'cached';
//     srt2+=                    '</span>';
//     srt2+=                '<span class="material-symbols-outlined">';
//     srt2+=                    'favorite';
//     srt2+=                    '</span>';
//     srt2+=                '<span class="material-symbols-outlined">';
//     srt2+=                    'bar_chart';
//     srt2+=                    '</span>';
//     srt2+=                '<span class="material-symbols-outlined">';
//     srt2+=                   'ios_share';
//     srt2+=                    '</span>';
//     srt2+=            '</div>';
//     srt2+=    '</div>';
//     srt2+= '</div>';
//     srt2+= '</div>';
//     document.getElementById('timeline').innerHTML= srt2;
// }

/*다크 라이트 모드*/

let bodydark = document.querySelector('body');
let headerdark = document.querySelectorAll("a,.ww");
let profileUser = document.querySelector('p');
let userPId = document.querySelector('.userPId');
let textarea = document.querySelector('textarea');
let li = document.querySelector('li');
let darkNlight = document.querySelector('.darkNlight');
let bol = document.querySelector('.bol');
let hashbox = document.querySelector('.hashbox');
function dark(){
    if(this.value === 'dark'){
        bodydark.style.transition='all 0.3s';
        bodydark.style.backgroundColor='#000000';
        bodydark.style.color='#ffffff';
        for(let i =0; i<headerdark.length; i++){
            let item = headerdark.item(i);
            item.style.color='#ffffff';
            item.style.transition='all 0.3s';
        }
        profileUser.style.transition='all 0.3s';
        profileUser.style.color='#333';
        userPId.style.color='#333';
        textarea.style.transition='all 0.3s';
        textarea.style.backgroundColor='#000';
        textarea.style.color='#fff';
        darkNlight.style.backgroundColor='#333';
        bol.style.backgroundColor='#1D9BF0';
        bol.style.marginLeft="2px";
        hashbox.style.color="#333";
        this.value='day';
    }else{
        bodydark.style.backgroundColor='#ffffff';
        bodydark.style.color='#333';
        for(let i =0; i<headerdark.length; i++){
            let item = headerdark.item(i);
            item.style.color='#333333';
            item.style.transition='all 0.3s';
        }
        textarea.style.backgroundColor='#ffffff';
        textarea.style.color='#333';
        darkNlight.style.backgroundColor='#1D9BF0';
        bol.style.backgroundColor='#ffffff';
        bol.style.marginLeft="36px";
        this.value='dark';
    }
}
