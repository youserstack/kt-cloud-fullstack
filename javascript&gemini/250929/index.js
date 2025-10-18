// 1. 배열
// push pop shift unshift slice splice
// initial array : jan ~ nov
// 모든 메소드를 최소 1회 이상 활용하여 1월과 12월만 남은 배열 생성

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

months.splice(1, 10);
// console.log(months);

// 2. 객체
// Character 클래스 > Property: HP, MP, LV / Method : 이동(상, 하, 좌, 우)
/// 플레이어 클래스 > Property: 직업 / Method : 말걸기, 공격하기
///// 내 캐릭터(인스턴스) > Property: 이름 / Method : 스킬
/// NPC 클래스 > Property: 종족 / Method : 대답
///// 주민NPC > Property: 이름 / Method : 선물하기
///// 적NPC > Property: 이름 / Method : 공격하기, 방어하기

class Character {
  constructor(hp, mp, lv) {
    this.hp = hp;
    this.mp = mp;
    this.lv = lv;
  }
  moveToUp() {}
  moveToDown() {}
  moveToLeft() {}
  moveToRight() {}
  overloadTest(){console.log('오버로딩 함수')}
  overloadTest(input){console.log('input 받는 오버로딩 함수',input)}
}

class Player {
  constructor(name) {
    this.name = name;
  }
  talkTo() {}
  attack() {}
}

class NPC {
  constructor(type) {
    this.type = type;
  }
  answer() {
    console.log('answer!')
  }
}

class ResidenceNPC extends NPC {
  constructor(name) {
    super("resident");
    this.name = name;
  }
  gift() {}
}

class EnemyNPC extends NPC {
  constructor(name) {
    super("enemy");
    this.name = name;
  }
  attack() {
    super.answer()
  }
  defense() {}
}

const my = new Character(100, 100, 99);
my.moveToRight();
my.overloadTest()
my.overloadTest('sdfhs')
// 자바스크립트는 오버로딩안됨

const residence1 = new ResidenceNPC("주민1");
const residence2 = new ResidenceNPC("주민2");
const enemy1 = new EnemyNPC("적1");
const enemy2 = new EnemyNPC("적2");

console.log({ my, residence1, residence2, enemy1, enemy2 });
residence1.answer()
enemy1.attack()
enemy2.defense()


