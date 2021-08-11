import Card from "@material-ui/core/Card";
import { Heading02 } from "./index"


const Contents = () => {
  return (
    <div className="w-full sm:w-2/3 px-4 py-4 sm:pl-0 sm:pr-4 sm:py-0">
      <Card>
        <Heading02 title="プロフィール" />
        <div className="px-4 py-8 sm:p-8">
          <h3 className="text-xl">◇ 名前</h3>
          <p className="text-base mb-8">tanipu</p>

          <h3 className="text-xl">◇ 直近の経歴</h3>
          <p className="text-base mb-8">
            2020年某プラグミングスクール卒。<br />
            スクールではRuby、Ruby on Railsを中心に学習。<br />
            都内の受託開発企業に就職（2020〜在籍中
          </p>
          <h3 className="text-xl">◇ Skill</h3>
          <p className="text-base mb-8">
            実務経験あり：pug / Scss / WordPress / JavaScript / jQuery  / vue.js / Nuxt.js / etc...<br />
            実務経験なし：React / Next.js / Ruby / Ruby on Rails / etc...
          </p>
          <br />
          <h3 className="text-xl">◇ 挨拶</h3>
          <p className="text-base mt-2">
            当ブログはNext.js＋microCMSで作成しました。<br />
            Reactの勉強が楽しいので、React、Next.jsなどに関するアウトプットをゆる〜くしていきたいと思います。<br />
          </p>
        </div>
      </Card>
    </div>
  );
};



export default Contents;
