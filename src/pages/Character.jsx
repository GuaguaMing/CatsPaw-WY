import React from 'react';
import '../index.css';

const Character = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4">遊戲角色</h1>

      <div className="flex flex-col items-center justify-center min-h-screen">{/* 巴非 */}
        <h1 className="text-4xl font-bold mb-4"> Parfait  巴非</h1>

        <p className="text-lg">#懵懵懂懂 #最乾淨的 #憨呆 #能讀檔重來的勇士</p>

        <div className="flex gap-8 mt-8">
          {/* 左側大圖 */}
          <div className="flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/p4_parfait_idle.gif`}
              className="w-auto h-[500px] object-contain"
              alt="Parfait Idle"
            />
          </div>

          {/* 右側小圖 */}
          <div className="flex flex-col gap-8">
            <div className="flex gap-8">
              <img
                src={`${import.meta.env.BASE_URL}images/p4_parfait_walk.gif`}
                className="w-auto h-[230px] object-contain"
                alt="Parfait Walk"
              />
              <img
                src={`${import.meta.env.BASE_URL}images/p4_parfait_jump.gif`}
                className="w-auto h-[230px] object-contain"
                alt="Parfait Jump"
              />
            </div>
            <div className="flex gap-8">
              <img
                src={`${import.meta.env.BASE_URL}images/p4_parfait_attack.gif`}
                className="w-auto h-[230px] object-contain"
                alt="Parfait Attack"
              />
              <img
                src={`${import.meta.env.BASE_URL}images/p4_parfait_die.gif`}
                className="w-auto h-[230px] object-contain"
                alt="Parfait Die"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg">
            玩家即為巴非的靈魂。就算死亡了也能開啟「讀檔」技能，重來死亡前的那一刻；好奇心能殺死一隻貓，
            因為可以讀檔，所以對死亡這件事無所顧忌。<br />
            遊戲世界中所有一切自由的行為，皆由「巴非」所決定，所以「巴非」是自由的、非既定的npc，
            「巴非」是「玩家」。<br />
            在故事中，巴非原本是由影子大人所製造出來的貓蠟怪之一，但因為缺乏靈魂的注入，使得巴非貓蠟怪
            變得像是一般貓蠟怪一樣，是失敗的蠟蠋產品。不過玩家的到來為巴非貓蠟怪注入了意識----巴非便如此誕生了。</p>
        </div>
      </div>


      <div>{/* 康帕爾 */}
        <h1 className="text-4xl font-bold mb-4">Compal 康帕爾</h1>

        <p className="text-lg">#懦弱的妻奴 #駝背的社畜 #神經質 #兔貓前輩 #中度混亂</p>

        <div className="flex gap-8 mt-8">
          {/* 左側圖片 */}
          <div className="flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/p4_compal_idle.gif`}
              className="w-auto h-[500px] object-contain"
              alt="Compal Idle"
            />
          </div>

          {/* 右側文字 */}
          <div className="flex flex-col justify-center">
            <p className="text-lg">
              已經待了至少兩年的工廠前輩，最主要的工作就是教導每一位新來的員工最基礎的工作指引，雖然他總
              是心不甘情不願，但最終他還是會去執行老闆下達的命令。
              <br />
              雖然康帕爾非常懦弱膽小且神經質，但也正因為他的謹小慎微，他才能在這間奇怪的工廠上班如此久的
              時間。<br />
              康帕爾同樣也是由貓咪和蠟混和出來的貓蠟怪，但被注入康帕爾的靈魂之後，身體產生異變，變成兔子、
              貓和蠟混和的動物貓蠟怪。康帕爾生前的性格與記憶也隨之繼承到這個身體中，更是被明顯的體現出來。</p>
          </div>
        </div>
      </div>

      <div>{/* 熊貓 */}
        <h1 className="text-4xl font-bold mb-4"> Barret  巴里特</h1>

        <p className="text-lg">#已經神經病 #瘋了 #有點毛毛的 #熊貓前輩 #重度混亂</p>
        <div className="flex justify-center gap-8 mt-8">
          <img
            src={`${import.meta.env.BASE_URL}images/p4_barrit_walk.gif`}
            className="w-auto h-[400px] object-contain"
            alt="Barret Walk"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/p4_barrit_die.gif`}
            className="w-auto h-[400px] object-contain"
            alt="Barret Die"
          />
        </div>
        <p className="text-lg">
          待了六個月的員工，因為身體出了狀況所以被辭職，由巴非接替他的工作。
          <br />
          其實還沒生病前的巴里特是能跟他心平氣和的講話的，巴里特能言善道，跟他聊天就像是跟鄰家大叔在
          嘮嗑一樣。不過就像每一位來到這裡的員工，他終究是逃不過這間工廠的詛咒。
          <br />
          跟康帕爾一樣，是由影子大人混和了貓、熊貓和蠟製作出來的。與康帕爾不同的是，巴里特隨性的個性
          讓牠接觸過多的影子大人的事物，導致牠的靈魂被重度汙染、形成了重度混亂的型態。</p>
      </div>

      <div>{/* 影子1 */}
        <h1 className="text-4xl font-bold mb-4"> Mr.Shadow  影子先生(第一型態)</h1>

        <p className="text-lg"> #做事看心情 #高智商輾壓 #紳士#狡詐 #無善惡和道德觀念 #最傑出影帝</p>
        <img
          src={`${import.meta.env.BASE_URL}images/p4_Boss.png`}
          className="pt-20 -translate-x-4"
        />
        <p className="text-lg">
          影子先生是蠟燭工廠的老闆，為了進行模擬實驗，祂創造融合了許多不同品種的貓蠟怪，有的靈魂反應
          失敗淪為失敗品，有的靈魂反應成功便投入工廠進行下一輪的實驗。
          <br />
          巴非的出現吸引了影子先生的注意力，與其他的實驗品截然不同......。
          <br />
          第一型態的影子先生上半身是以鱷魚的形象出現，都說鱷魚掉的眼淚是假的，這也很好的去說明影子大
          人冷漠無情的性格與精湛的演技。影子大人從來都不吝嗇於展現出祂的暴力美學，於是下半身便保持了繁多的
          觸手與看起來非常具有威脅性的森森利齒。</p>
      </div>

      <div>{/* 影子2 */}
        <h1 className="text-4xl font-bold mb-4"> Mr.Shadow  影子先生(第二型態)</h1>

        <p className="text-lg">  #做事看心情 #高智商輾壓 #紳士 #狡詐 #無善惡和道德觀念 #最傑出影帝</p>
        <div className="flex flex-col gap-8 mt-8">
          {/* 上排兩張圖片 */}
          <div className="flex justify-center gap-8">
            <img
              src={`${import.meta.env.BASE_URL}images/p4_Boss_pro.png`}
              className="w-auto h-[300px] object-contain"
              alt="Boss Pro"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/p4_Boss_attack.png`}
              className="w-auto h-[300px] object-contain"
              alt="Boss Attack"
            />
          </div>
          {/* 下排三張圖片 */}
          <div className="flex justify-center gap-8">
            <img
              src={`${import.meta.env.BASE_URL}images/p4_Boss_die.png`}
              className="w-auto h-[300px] object-contain"
              alt="Boss Die"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/p4_Boss_walk.png`}
              className="w-auto h-[300px] object-contain"
              alt="Boss Walk"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/p4_Boss_jump.png`}
              className="w-auto h-[300px] object-contain"
              alt="Boss Jump"
            />
          </div>
        </div>
        <p className="text-lg">
          第二型態的影子先生更為暴露出祂原本的性格，與被束縛隱藏的第一型態不同，這個型態的祂做事更隨
          心所欲和自由。
          <br />
          與第一型態的鱷魚元素不同，第二型態加入了蛇尾巴，並把嘴巴更是直接堂而皇之地擺在最中央，做為
          本體的眼睛被放在上方，周邊甚至環繞著神聖的翅膀與光環。對比強烈的下半身猙獰獵奇的巨嘴與毫不掩飾的
          利口，隨著擺動的觸手中更是每個鑲嵌著眼珠子。</p>
      </div>

      <div>{/* 失敗殼 */}
        <h1 className="text-4xl font-bold mb-4"> Failed Product  貓蠟怪</h1>

        <p className="text-lg"> #空殼 #無意識 #見到就咬 #被控制</p>
        <img
          src={`${import.meta.env.BASE_URL}images/p4_product_walk.gif`}
          className="pt-20 -translate-x-4"
        />
        <img
          src={`${import.meta.env.BASE_URL}images/p4_product_attack.gif`}
          className="pt-20 -translate-x-4"
        />
        <p className="text-lg">
          以貓咪的身體與蠟互相融合的實驗產品，只是在放入靈魂時因為反應失敗而變成沒有意識的失敗品貓蠟
          怪。貓蠟怪見到任何會動的東西就會咬，一咬一個頭，攻擊力高。牠能被影子先生操控，不過影子先生通常懶
          得去關注失敗品。
          <br />
          牠最大的特徵就是森森利齒與尖利的爪子，對於巴非來說，貓蠟怪是一個無法溝通的存在，甚至會試圖
          攻擊巴非，導致巴非的死亡。因為也算是失敗的貓蠟怪，於是身體處在一個要融不融的奇怪狀態，仍舊熊熊燃
          燒著頭上的燭火。</p>
      </div>

      <div>{/* 毛蟲 */}
        <h1 className="text-4xl font-bold mb-4"> Catandpillar  貓毛蟲</h1>

        <p className="text-lg">  #勤勞的傳輸線 #神祕通道 #變種怪物 #被控制</p>
        <img
          src={`${import.meta.env.BASE_URL}images/p4_catandpillar.png`}
          className="pt-20 -translate-x-4"
        />
        <p className="text-lg">
          貓毛蟲也是影子先生創造出來的怪物，是用貓與毛毛蟲所創造出來的。然而牠比起失敗品貓蠟怪更為愚
          笨，只會重複機械性的動作，於是影子大人物盡其用，把牠放在輸送線，負責傳輸模具。
          <br />
          貓毛蟲有一個神奇的特性，當被牠吞入腹中，不一定會死亡，有機率被傳送到任何一個工廠的地點，這
          也是員工們走捷徑的路線之一。
          <br />
          巨大且長到不知該如何計算的身體是唯一的優點。因為有著貓咪的頭顱，而被員工們戲稱貓的毛毛蟲。</p>
      </div>

      <div>{/* 其他 */}
        <h1 className="text-4xl font-bold mb-4">Other 工廠同事</h1>
        <p className="text-lg">#變種怪物 #被控制</p>
        {/* 第一排圖片：兩張 */}
        <div className="flex flex-row gap-x-6 pt-20 -translate-x-4">
          <img
            src={`${import.meta.env.BASE_URL}images/p4_catrow.gif`}
            alt="catrow"
            className="h-[300px] object-contain"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/p4_catfish.png`}
            alt="catfish"
            className="h-[600px] object-contain"
          />
        </div>

        {/* 第二排圖片：三張 */}
        <div className="flex flex-row gap-x-6 pt-20 -translate-x-4">
          <img
            src={`${import.meta.env.BASE_URL}images/p4_meowse.png`}
            alt="meowse"
            className="h-[200px] object-contain"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/p4_bgcat.gif`}
            alt="bgcat"
            className="h-[200px] object-contain"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/p4_bug.png`}
            alt="bug"
            className="h-[200px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Character; 