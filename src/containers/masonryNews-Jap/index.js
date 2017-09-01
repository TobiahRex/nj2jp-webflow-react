import React from 'react';

import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
} from './assets/utils';

import {
  CardArticle,
} from './components';

class MasonryNews extends React.Component {
  static propTypes = propTypes

  constructor(props) {
    super(props);

    this.state = {
      x: '',
    };
  }

  componentDidMount() {
    WebflowJs(); // eslint-disable-line
  }

  render() {
    const cardsData = [{
      image: {
        src: 'images/masonry1.png',
      },
      header: '空気サンプリングにより、間接蒸気が無害であることが確認されます',
      content: 'カリフォルニア州公衆衛生局（CDPH）は、間接蒸気曝露の健康への影響を決定するイニシアティブの一環として、州全体の倉庫で空気サンプリングを実施しています。',
      link: 'http://www.vapingpost.com/2017/05/03/air-sampling-confirms-secondhand-vapor-is-harmless/',
    },
    {
      image: {
        src: 'images/masonry2.png',
      },
      header: '>日本がタバコを食い止め、国民が大量に酒を飲むようになる',
      content: '>日本人のニコチン中毒者との競争が激化している。Philip Morris International Inc.とJapan Tobacco Inc.は、通常の匂いや煙を出さずにニコチンを欲しがる喫煙者に、電池を充電した機器で加熱された（燃えていない）製品を販売している。 急速に拡大している世界的な穀物流通の一環であるこの動きは、日本の荒涼したたばこ市場に明るいスポットをもたらしました。',
      link: 'http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0',
    },
    {
      image: {
        src: 'images/masonry3.png',
      },
      header: '>フィリップモリス、日本全国のたばこ店をオープンするタバコ<',
      content: '>フィリップ・モリス・ジャパン（東京都渋谷区）は15日、東京の銀座に店舗をオープンし、無煙たばこのiQOSを売却すると発表した。また、日本たばこ産業（株）は、福岡に無煙たばこ デバイスPloom Tech、金曜日から開始。',
      link: 'http://www.japantimes.co.jp/news/2017/03/03/business/philip-morris-japan-tobacco-open-vape-stores-nationwide/#.WW4e6MaQ3K0',
    }, {
      image: {
        src: 'images/masonry4.png',
      },
      header: '>PMIのCEO、日本と韓国のタバコの段階的廃止について語る<',
      content: '>フィリップ・モリス・インターナショナル（PMI）の最高経営責任者（CEO）は、電子機器iQOSの日本と韓国での人気のため、タバコ会社は5年以内にこれらの国で可燃性のたばこを段階的に廃止できるはずだと述べた。 PMIのiQOS装置は、可燃性紙巻たばこの無煙代替品であり、韓国のヒートと日本のヒート・スティックと呼ばれるタバコの葉を加熱することによって動作します。',
      link: 'http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea',
    }, {
      image: {
        src: 'images/masonry5.png',
      },
      header: '>より多くのデータは、授乳が喫煙のより安全な選択肢であることを確認している',
      content: '>Bhas 42細胞形質転換アッセイを用いた電子タバコおよびタバコの比較腫瘍促進評価は、BioReliance（British American Tobacco（BAT）による資金提供を受け、Environmental and Molecular Mutagenesisに掲載）により実施された。',
      link: 'http://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking',
    }, {
      image: {
        src: 'images/masonry6.png',
      },
      header: '>ミシガン州米国：e-cigsのおかげで部分的に喫煙喫煙',
      content: '>ミシガンの肺がんの新たな症例数は、2007年に8,161にピークを迎えました。 最新のデータである2013年までに7,538人になった」とミシガン・ニュースの記事を読んだ。 80年代以降、州のタバコ販売は3分の2に減少しましたが、熱帯喫煙者がその時代になって老化しており、それゆえ癌を発症していることから、これらの数字に追いつくのに肺がん率は遅くなります。',
      link: 'http://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/',
    }, {
      image: {
        src: 'images/masonry7.png',
      },
      header: '>喫煙者は栄養について知っておくべき3つの事実',
      content: '>喫煙者は、他の人よりも飢えを知っているようには思えません。残念ながら、彼らは潜在的に最も得意とする人です。 喫煙者が同じ新聞を読んで、同じ驚くべき物語を完成させるので、それは本当に驚きではありません。 レコードを真っ直ぐにするのを助けるのは、喫煙者が電子cigについて知っておくべき3つの事実です。',
      link: 'http://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/',
    }, {
      image: {
        src: 'images/masonry8.png',
      },
      header: '>最悪の不条理、科学的に暴行に対する新戦争',
      content: '>禁止の時代を思い起こさせる特別な利益団体は、科学に対する個人的な信念を強めています。 vapingを楽しむ能力は、無知であり、彼らに与えられている宣伝を信じているグループからの制限的な法律によって攻撃を受けている。 普遍的な信念が必ずしも正確ではないときに、この会話にどのように理由を入れることができますか？',
      link: 'http://www.churnmag.com/news/absurdity-finest-new-war-vaping-goes-science/',
    }, {
      image: {
        src: 'images/masonry9.png',
      },
      header: '>スペインからの研究では、電子タバコの有効性が確認されています',
      content: '>スペイン語のvapers協会、Anesvapは他の無数の研究が示していることを確認するデータを公開しました。 3つの主な所見は、前回の米国外科医のような多くの情報源が主張してきたこととは対照的に、若い成人の喫煙の玄関口ではなく、喫煙は喫煙ほど中毒ではなく、 喫煙率を低下させる。',
      link: 'http://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/',
    }, {
      image: {
        src: 'images/masonry10.png',
      },
      header: '>ビーピングとたばこに関するショッキングペンの国家研究',
      content: '>新しい研究では、vapeデバイスを使用する人々は、伝統的な喫煙者に比べて野菜の摂取に殆ど依存していないことが示されています。 Newswiseによって報告されたこの研究は、Penn State College of Medicineによって行われました。この学校は、資金療法の研究で約1億1,000万ドルが見込まれています。特に、癌治療の進歩と病気の根本的原因の理解が特に重要です。 それは大学の公衆衛生科学の助教授であるGuodong Liuによって率いられた。 劉は、生物統計学者であるエミリー・ワッサーマンと、教授であるジョナサン・フォルズによって加わりました。 両者は、ペン・タバコの規制科学センターの保健医療サービス部門で働いています。 研究自体は、国立衛生研究所とタバコ製品センターが資金提供していました。',
      link: 'http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/',
    }, {
      image: {
        src: 'images/masonry10.png',
      },
      header: '>新たな研究では、',
      content: '>Big Tobacco社が行った調査では、授乳は従来のタバコを吸うよりも害が少ないことが証明されています。Sunは、BensonやHedges、Dunhill、Lucky Strikeなどのブランドを生産しているBritish American Tobaccoが新しい研究に資金を提供したと報告しています。 同社はまた、vape市場に参入した。 Vypeという名前で2013年にその市場に最初の製品を投入しました。 同社は、「代替タバコとニコチン製品」の詳細を学ぶためのリソースを配分しており、British American Tobaccoが業界での役割を果たす準備ができている可能性があることを示しています。',
    }];
    return (
      <div className="masonry-container w-container">
        <div className="masonry-column">
          <CardArticle />
        </div>
      </div>

    );
  }
        }

export default MasonryNews;
