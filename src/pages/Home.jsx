import React from 'react';
import Nav from '../components/Nav';
import '../index.css';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white">
      {/* 主視覺影片區 */}
      <video
        src={`${import.meta.env.BASE_URL}videos/Cat's_Paw_Trailers.mp4`}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />

      {/* Nav 按鈕列 */}
      <div className="w-full flex justify-center">
        <Nav />
      </div>

      {/* 世界觀區塊 */}
      <section className="max-w-5xl px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">遊戲世界觀<br /><br /></h1>
        <p className="text-lg leading-relaxed text-left">
          這是其中一個平行世界。
          <br /><br />
          於現今的19世紀初，人類已完全滅絕，獨留豐富的大自然與生態、以及沉眠於南太平洋的邪神克蘇魯。
          <br /><br />
          在人類還仍有的時代，甚至還未開啟世紀的時候，他們曾瘋狂崇拜沉睡之神，借助著邪神的力量，為牠建造宏偉的石造都市與宮殿，其名為拉萊耶。在發生了數次未知原因的天災後，克蘇魯沉眠於拉萊耶，乘載著拉萊耶的姆大陸也因星位變換沉入海底，而人類也在這次的意外之中徹底滅亡。
          <br /><br />
          一個位於拉萊耶深處海底的不知名生物，一團類似影子的存在，經由克蘇魯不經意的呼喚，逐漸衍生出神智與意識，隨著洋流的飄盪來到陸地並開啟了牠的旅途。
          <br /><br />
          第一個遇到的生物便是貓。
          <br /><br />
          然而因為長期接受克蘇魯的侵染，跟影子接觸過的生物會逐漸精神混亂並發瘋。
          <br /><br />
          影子開始對掌控「精神」的「靈魂」產生好奇，牠想要找出一種不受牠精神污染的生物，便決定回到故鄉拉萊耶，建造一個蠟燭工廠展開模擬實驗......。
        </p>
      </section>

      {/* 下方兩欄區塊：左圖 + 右文字 */}
      <section className="max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 左圖五張 */}
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={`/P1_00${i}.png`}
              src={`${import.meta.env.BASE_URL}images/P1_00${i}.png`}
              alt={`Product ${i}`}
              className="w-full h-auto"
            />
          ))}
        </div>

        {/* 右文字區 */}
        <div className="space-y-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">遊戲簡介</h1>
            <p className="text-lg leading-relaxed">
              貓蠟怪巴非的甦醒，被安排到蠟燭工廠就職，並在前輩的引導下開始製作蠟燭。<br /><br />
              然而在工作途中發現許多古怪的地方， 非工作區徘徊的不明瑕疵品、危險至極的謎之生物、詭譎的環境， 讓巴非萌生出想要逃離的念頭……。
            </p>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">遊戲特色</h1>
            <p className="text-lg leading-relaxed">
              以蠟作為核心，加入貓咪與獵奇的元素， 呈現出不同的玩法與機制。整體玩法圍繞著「蠟」的，不僅僅是玩法上的吐蠟和對物件起作用的吐蠟，許多角色與場景也融合了蠟的
              概念， 讓「蠟」成為了貫穿Cat's Paw 的重點。<br /><br />
              帶有詭異的可愛風格是Cat's Paw 這個遊戲最大的特色之一，懵懂純真的巴非對比陰暗詭譎的蠟燭工廠，創造出衝突與刺激感，激發出玩家想要探索這個遊戲的動力。生動可愛的角色與藏著各種彩蛋的場景等待玩家挖掘出來並細細品味。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
