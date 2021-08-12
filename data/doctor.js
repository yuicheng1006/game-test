export const doctor = {
  name: '凌洛天',
  img: '/image/intro/doctor_intro.jpeg',
  scenes_one: {
    cut_one: {
      step: 's1c1',
      img: '/image/intro/doctor_intro.jpeg', //可能的表情
      backGround: '/image/bg/street.jpeg', //背景
      music: '/mucic/bg.mp3',
      comment: [
        {
          gender: 'f',
          os: true,
          dialogue:
            '第一次約會好緊張！不知道我這樣穿合不合適？也還沒想好要去哪裡玩呢⋯⋯ 我好久沒去遊樂園了，很想跟他一起去遊樂園玩，不知道他會不會願意跟我一起去？',
        },
        {
          gender: 'm',
          dialogue: '你等很久了嗎？剛剛臨時又有病患看診，耽誤了一點時間！',
        },
        {
          gender: 'f',
          dialogue: '沒有，我也才剛到而已！辛苦你了！',
        },
        {
          gender: 'm',
          dialogue: '啊！終於可以好好放鬆了！有想好要去哪裡玩了嗎？',
        },
        {
          gender: 'f',
          dialogue:
            '好久沒去遊樂園了！我想去遊樂園玩⋯⋯但不知道你會不會覺得太幼稚了？',
        },
        {
          gender: 'm',
          dialogue: '不會⋯⋯都聽你的！就去遊樂園玩吧！',
        },
      ],
    },
    cut_two: {
      step: 's1c2',
      backGround: '/image/bg/park.jpeg',
      img: '/image/intro/doctor_intro.jpeg',
      music: '/mucic/bg2.mp3',
      comment: [
        {
          gender: 'f',
          dialogue:
            '好興奮喔！沒想到真的能來遊樂園玩！我以前最喜歡來遊樂園了！',
        },
        {
          gender: 'm',
          dialogue: '看到妳那麼興奮，選擇遊樂園沒錯呢！',
        },
        {
          gender: 'm',
          dialogue: '走吧！我們別在門口浪費時間了！趕快進去吧！',
        },
      ],
    },
    cut_three: {
      step: 's1c3',
      backGround: '/image/bg/ferris_wheel.jpeg',
      img: '/image/intro/doctor_intro.jpeg',
      music: '/mucic/bg3.mp3',
      comment: [
        {
          gender: 'f',
          os: true,
          dialogue:
            '大家都說搭摩天輪只要在最高點的時候，能與心愛的人親吻，就會一直幸福下去！啊！光想到畫面就覺得好害羞啊！',
        },
        {
          gender: 'm',
          dialogue: '妳怎麼了？臉怎麼那麼紅呢？會不會是太熱了？',
        },
        {
          gender: 'f',
          dialogue: '沒事啦！可能天氣比較熱的關係，一下子就好了！',
        },
        {
          gender: 'm',
          dialogue:
            '你在這等我一下！我去幫你買瓶冰水回來！不然中暑了可就不好了！',
        },
      ],
    },
    cut_four: {
      step: 's1c4',
      backGround: '/image/bg/ferris_wheel.jpeg',
      img: '/image/intro/doctor_intro.jpeg',
      music: '/mucic/bg4.mp3',
      comment: [
        {
          gender: 'f',
          os: true,
          dialogue:
            '哼！那些女生是要跟他要電話嗎？太大膽了吧！她們怎麼能這樣呢？',
        },
      ],
    },
    cut_five: {
      step: 's1c5',
      backGround: '/image/bg/ferris_wheel.jpeg',
      img: '/image/intro/doctor_intro.jpeg',
      comment: [
        {
          gender: 'f',
          os: true,
          dialogue:
            '看到我的厲害了吧！他可是我先看上的男人呢！才不是妳們能輕易搶走！',
        },
        {
          gender: 'm',
          dialogue: '熱壞了吧？我把冰水買來了，你先喝幾口降溫吧！',
        },
        {
          gender: 'f',

          dialogue: '謝謝你！',
        },
        {
          gender: 'f',
          dialogue: '好像也快輪到我們了！第一次跟你搭摩天輪，心情有點緊張呢⋯⋯',
        },
      ],
    },
    cut_six: {
      step: 's1c6',
      backGround: '../image/bg/wheel_couple.jpeg',
    },
  },
  scenes_two: {
    cut_one: {
      step: 's2c1',
      backGround: '../image/s1.jpeg',
      img: '/image/intro/doctor_intro.jpeg',
      comment: [
        {
          gender: 'f',

          dialogue: '那邊有人在算塔羅牌耶！好像很有趣的樣子⋯⋯',
        },
        {
          gender: 'm',
          dialogue: '妳有玩過塔羅牌嗎？女生是不是都很喜歡這類的東西？',
        },
        {
          gender: 'f',
          dialogue: '我沒玩過！不過感覺很好玩',
        },
        {
          gender: 'm',
          dialogue: '走吧！我們一起看看吧！',
        },
        {
          gender: 'f',
          dialogue: '真的嗎？那太好了⋯⋯',
        },
      ],
    },
    cut_two: {
      step: 's2c2',
      backGround: '/image/divination/divination.jpeg',
      img: '../image/s1.jpeg',
      comment: [
        {
          gender: 'o',
          dialogue:
            '你們好！歡迎來到我的占卜屋，請幫我從以下四張牌中憑直覺選出一張！',
        },
      ],
      game: {
        step: 's2c2-1',
        img: '/image/divination/cards.png',
        divination: [
          {
            img: '/image/divination/r1.png',
            id: 1,
            content:
              '妳尋覓很久的真命天子，其實就在妳身旁！好好注意身邊的異性，或許你們有機會發展成戀人的關係！',
          },
          {
            img: '/image/divination/r2.png',
            id: 2,
            content:
              '妳的條件很好，別對自己沒自信！而且切記有自信的人才能成為他人的焦點！看看身邊是不是有被妳散發出的光芒所吸引著的異性呢？',
          },
          {
            img: '/image/divination/r3.png',
            id: 3,
            content:
              '妳最近真的特別幸運！身旁已經出現不錯的對象，雖然相處沒有太多的浪漫與小確幸，但卻能讓人感到安心，而且很有安全感！',
          },
          {
            img: '/image/divination/r4.png',
            id: 4,
            content:
              '妳的個性比較謹慎，面對愛情總是既期待又怕受傷害，不過談戀愛不是考試，只要追隨自己內心最真實的想法就行了！喜歡就大膽地去追吧！',
          },
        ],
      },
    },
    cut_three: {
      step: 's2c3',
      backGround: '/image/divination/divination.jpeg',
      img: '/image/intro/doctor_intro.jpeg',
      results: {
        r1: {
          comment: [
            {
              gender: 'm',
              dialogue: '看來你的真命天子出現了⋯⋯',
            },
            {
              gender: 'f',
              dialogue: '希望他也能對我有好感',
            },
            {
              gender: 'm',
              dialogue: '會的⋯⋯妳很優秀，要相信自己！',
            },
          ],
        },
        r2: {
          comment: [
            {
              gender: 'm',
              dialogue: '這說得真準！妳需要對自己多點自信！',
            },
            {
              gender: 'f',
              dialogue: '真的嗎？我真的有那麼好嗎？',
            },
            {
              gender: 'm',
              dialogue: '當然！不要懷疑自己！',
            },
          ],
        },
        r3: {
          comment: [
            {
              gender: 'm',
              dialogue: '如果浪漫與安全感只能二選一，妳選哪一個？',
            },
            {
              gender: 'f',
              dialogue: '我選安全感⋯⋯',
            },
            {
              gender: 'm',
              dialogue: '那跟我正好符合！是在暗示我嗎？',
            },
          ],
        },
        r4: {
          comment: [
            {
              gender: 'f',
              dialogue: '我總是不敢跟喜歡的人告白⋯⋯',
            },
            {
              gender: 'f',
              dialogue: '到底要怎麼樣才能有勇氣呢？',
            },
            {
              gender: 'm',
              dialogue: '告白這種事就交給男生來做吧！女生只要答應就好⋯⋯',
            },
          ],
        },
      },
    },
    cut_four: {
      step: 's2c4',
      backGround: '../image/bg/street.jpeg',
      img: '/image/others.jpeg',
      comment: [
        {
          gender: 'f',
          dialogue: '兩位情侶可以幫我拿個傳單嗎？可以當作折價券使用唷！',
        },
        {
          gender: 'f',
          dialogue: '這個折價券是…？',
        },
        {
          gender: 'f',
          dialogue:
            '等你們逛累了之後阿，可以到「紀念品區」去找喜歡的紀念品，用這個折價券帶走你們的回憶唷！',
        },

        {
          gender: 'm',
          dialogue:
            '等我們逛完之後就去吧，看可以幫你買點什麼當作今天的紀念品！',
        },
      ],
    },
  },
  scenes_three: {
    cut_one: {
      step: 's3c1',
      backGround: '../image/bg/restaurant.jpeg',
      img: '/image/intro/doctor_intro.jpeg',
      comment: [
        {
          gender: 'm',
          dialogue: '玩了一整天！很累了吧？',
        },
        {
          gender: 'f',
          dialogue: '對啊！玩完還能一起來吃晚餐，今天真開心！',
        },
        {
          gender: 'm',
          dialogue: '辛苦你了！我們趕快來點餐吧！',
        },
      ],
    },
    cut_two: {
      step: 's3c2',
      backGround: '../image/bg/restaurant.jpeg',
      img: '/image/intro/doctor_intro.jpeg',
      game: [
        {
          id: 'Q1',
          qus: 'Q1：凌洛天把菜單交給了妳，讓你來點餐！你會怎麼點餐呢？',
          ans: [
            {
              id: 1,
              q: '1.',
              a: '只點自己喜歡吃的',
            },
            {
              id: 2,
              q: '2.',
              a: '詢問他喜歡吃的食物',
            },
            {
              id: 3,
              q: '3.',
              a: '直接點一份雙人套餐',
            },
          ],
        },
        {
          id: 'Q2',
          qus: '餐點中有自己最愛吃的「「墨魚義大利麵」，可是吃完嘴巴都黑黑的，第一次約會該點這道料理嗎？',
          ans: [
            {
              id: 1,
              q: '1.',
              a: '沒關係吧！而且是我最愛的「墨魚義大利麵」',
            },
            {
              id: 2,
              q: '2.',
              a: '為了維持美好的印象，今天還是不要點這道了！',
            },
          ],
        },
      ],
    },
    cut_three: {
      step: 's3c3',
      backGround: '../image/bg/restaurant.jpeg',
      img: '/image/intro/doctor_intro.jpeg',
      comment: [
        {
          gender: 'f',
          dialogue: '吃好飽啊！每樣料理都好好吃⋯⋯',
        },
        {
          gender: 'f',
          dialogue: '一忍不住就吃了那麼多了，會不會變胖啊？',
        },
        {
          gender: 'm',
          dialogue: '妳很瘦了⋯⋯多吃一點沒關係',
        },
        {
          gender: 'm',
          dialogue: '時間不早了！我先去結帳⋯⋯',
        },
      ],
    },
    cut_four: {
      step: 's3c4',
      backGround: '../image/bg/restaurant.jpeg',
      img: '/image/intro/doctor_intro.jpeg',
      game: {
        id: 'Q3',
        qus: '凌洛天準備要去櫃檯結帳了，妳會怎麼做呢？',
        ans: [
          {
            id: 1,
            q: '1.',
            a: '就讓他請客！跟女生出來約會，男生本來就是要付錢！',
          },
          {
            id: 2,
            q: '2.',
            a: '堅持要AA制',
          },
          {
            id: 3,
            q: '3.',
            a: '先讓他結帳，跟他說：「下次換成我來請你吧！」',
          },
        ],
      },
    },
    cut_five: {
      step: 's3c5',
      backGround: '../image/bg/restaurant.jpeg',
      img: '/image/intro/doctor_intro.jpeg',
      comment: [
        {
          gender: 'f',
          dialogue: '謝謝你！今天真的好開心！',
        },
        {
          gender: 'f',
          dialogue:
            '跟你一起去遊樂園，還一起吃了晚餐！感覺時間很快，一點都不夠用！',
        },
        {
          gender: 'm',
          dialogue: '只要你開心就好！我今天也很開心，以後再一起來玩吧！',
        },
      ],
    },
    cut_six: {
      step: 's3c6',
      backGround: '../image/bg/final.jpeg',
      img: '/image/intro/doctor_intro.jpeg',
    },
  },
};
