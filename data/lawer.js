export const lawer = {
  name: '沈亦寒',
  img: '/image/intro/lawer_intro.jpeg',
  scenes_one: {
    cut_one: {
      step: 's1c1',
      img: '/image/intro/lawer_intro.jpeg', //可能的表情
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
          dialogue: '不好意思！讓妳等那麼久⋯⋯',
        },
        {
          gender: 'f',
          dialogue: '沒有，我也才剛到而已！辛苦你了！',
        },
        {
          gender: 'm',
          dialogue: '妳有沒有想去的地方？今天一整天都聽妳的⋯⋯',
        },
        {
          gender: 'f',
          dialogue:
            '好久沒去遊樂園了！我想去遊樂園玩⋯⋯但不知道你會不會覺得太幼稚了？',
        },
        {
          gender: 'm',
          dialogue: '不會啊！想想也很久沒去了呢⋯⋯',
        },
      ],
    },
    cut_two: {
      step: 's1c2',
      backGround: '/image/bg/park.jpeg',
      img: '/image/intro/lawer_intro.jpeg',
      music: '/mucic/bg2.mp3',
      comment: [
        {
          gender: 'f',
          dialogue:
            '好興奮喔！沒想到真的能來遊樂園玩！我以前最喜歡來遊樂園了！',
        },
        {
          gender: 'm',
          dialogue:
            '我小時候也超級喜歡來遊樂園玩！雲霄飛車要玩十次才肯離開⋯⋯我媽都快被煩死了⋯⋯',
        },
        {
          gender: 'f',
          dialogue: '真的嗎？好難想像喔⋯⋯跟你王牌律師的形象完全不符合呢⋯⋯',
        },
        {
          gender: 'm',
          dialogue: '會嗎？我沒外表上看得那麼難親近吧？',
        },
        {
          gender: 'm',
          dialogue: '不多說了⋯⋯我們趕快進去吧！好想全部都玩過一遍！',
        },
      ],
    },
    cut_three: {
      step: 's1c3',
      backGround: '/image/bg/ferris_wheel.jpeg',
      img: '/image/intro/lawer_intro.jpeg',
      comment: [
        {
          gender: 'f',
          os: true,
          dialogue:
            '大家都說搭摩天輪只要在最高點的時候，能與心愛的人親吻，就會一直幸福下去！啊！光想到畫面就覺得好害羞啊！',
        },
        {
          gender: 'm',
          dialogue: '妳怎麼突然臉紅了？還好嗎？是不是天氣太熱⋯⋯',
        },
        {
          gender: 'f',
          dialogue: '有可能⋯⋯應該有點小中暑！不過休息一下就沒事了',
        },
        {
          gender: 'm',
          dialogue: '你在這邊等我吧！我去幫你買瓶冰水降降溫⋯⋯',
        },
      ],
    },
    cut_four: {
      step: 's1c4',
      backGround: '/image/bg/ferris_wheel.jpeg',
      img: '/image/intro/lawer_intro.jpeg',
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
      img: '/image/intro/lawer_intro.jpeg',
      comment: [
        {
          gender: 'f',
          os: true,
          dialogue:
            '看到我的厲害了吧！他可是我先看上的男人呢！才不是妳們能輕易搶走！',
        },
        {
          gender: 'm',
          dialogue: '來！這給你！',
        },
        {
          gender: 'm',
          dialogue: '趕快喝幾口！要是中暑就不好了⋯⋯',
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
      img: '/image/intro/lawer_intro.jpeg',
      comment: [
        {
          gender: 'f',

          dialogue: '那邊有人在算塔羅牌耶！好像很有趣的樣子⋯⋯',
        },
        {
          gender: 'm',
          dialogue: '真的耶！我還沒嘗試過塔羅牌，你有玩過嗎？',
        },
        {
          gender: 'f',
          dialogue: '我也沒玩過！不過感覺很好玩，要試看看嗎？',
        },
        {
          gender: 'm',
          dialogue: '好啊！我們過去吧！',
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
      img: '/image/intro/lawer_intro.jpeg',
      results: {
        r1: {
          comment: [
            {
              gender: 'f',
              dialogue: '我的真命天子就在我身邊⋯⋯？',
            },

            {
              gender: 'm',
              dialogue: '看來是在說我吧？妳身邊現在不就只有我嗎？',
            },
          ],
        },
        r2: {
          comment: [
            {
              gender: 'f',
              dialogue: '我一直都不覺得我是特別好的女生⋯⋯',
            },
            {
              gender: 'm',
              dialogue: '別這樣想⋯⋯妳那麼優秀，有什麼不好的？',
            },
            {
              gender: 'm',
              dialogue: '覺得妳不好的人，那只是他們不懂得欣賞！不要在意！',
            },
            {
              gender: 'f',
              dialogue: '謝謝你這麼鼓勵我！',
            },
          ],
        },
        r3: {
          comment: [
            {
              gender: 'f',
              dialogue: '確實比起浪漫，好像安全感會更好一點⋯⋯',
            },
            {
              gender: 'm',
              dialogue: '我也這麼覺得⋯⋯',
            },
            {
              gender: 'm',
              dialogue: '看來我們的想法很相近呢',
            },
          ],
        },
        r4: {
          comment: [
            {
              gender: 'f',
              dialogue: '讓我大膽去追！我實在是沒辦法⋯⋯',
            },
            {
              gender: 'f',
              dialogue: '要是不答應的話，那場面一定會很尷尬⋯⋯',
            },
            {
              gender: 'm',
              dialogue: '先別想那麼多⋯⋯而且妳那麼優秀才不用擔心！',
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
      img: '/image/intro/lawer_intro.jpeg',
      comment: [
        {
          gender: 'm',
          dialogue: '玩了一整天！應該餓了吧？',
        },
        {
          gender: 'f',
          dialogue: '有一點呢⋯⋯',
        },
        {
          gender: 'm',
          dialogue: '那趕快吃晚餐吧！菜單在這，就交給妳來點餐了⋯⋯',
        },
      ],
    },
    cut_two: {
      step: 's3c2',
      backGround: '../image/bg/restaurant.jpeg',
      img: '/image/intro/lawer_intro.jpeg',
      game: [
        {
          id: 'Q1',
          qus: 'Q1：沈亦寒把菜單交給了妳，讓你來點餐！你會怎麼點餐呢？',
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
          qus: 'Q2：餐點中有自己最愛吃的「「墨魚義大利麵」，可是吃完嘴巴都黑黑的，第一次約會',
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
      img: '/image/intro/lawer_intro.jpeg',
      comment: [
        {
          gender: 'f',
          dialogue: '真的吃好飽啊⋯⋯',
        },
        {
          gender: 'f',
          dialogue: '今天玩了一整天，又吃了那麼多美食，真的好充實！',
        },
        {
          gender: 'm',
          dialogue: '我也是⋯⋯好久沒度過那麼充實又放鬆的一天了',
        },
        {
          gender: 'm',
          dialogue: '妳在這等我⋯⋯我先去結帳⋯⋯',
        },
      ],
    },
    cut_four: {
      step: 's3c4',
      backGround: '../image/bg/restaurant.jpeg',
      img: '/image/intro/lawer_intro.jpeg',
      game: {
        id: 'Q3',
        qus: '沈亦寒準備要去櫃檯結帳了，妳會怎麼做呢？',
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
      img: '/image/intro/lawer_intro.jpeg',
      comment: [
        {
          gender: 'f',
          dialogue: '謝謝你！我今天過得很開心！',
        },
        {
          gender: 'f',
          dialogue: '不只一起去遊樂園，還吃了好吃的晚餐！',
        },
        {
          gender: 'm',
          dialogue: '我也很開心能跟妳留下美好的回憶！',
        },
        {
          gender: 'm',
          dialogue: '時間不早了⋯⋯我送你回家吧！下次再一起出來⋯⋯',
        },
      ],
    },
    cut_six: {
      step: 's3c6',
      backGround: '../image/bg/final.jpeg',
      img: '/image/intro/lawer_intro.jpeg',
    },
  },
};
