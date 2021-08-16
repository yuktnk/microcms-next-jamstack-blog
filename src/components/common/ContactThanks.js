import Link from "next/link";

import Card from "@material-ui/core/Card";
import { Heading02 } from "./index"
import Button from "@material-ui/core/Button";


const ContactThanks = () => {
  return (
    <div className="w-full sm:w-2/3 px-4 sm:pl-0 sm:pr-4 py-4 sm:py-0">
      <Card>
        <Heading02 title="お問い合わせありがとうございます。" />
        <div className="px-4 py-8 sm:p-8">
          <p className="text-base mb-8">
            この度はお問い合わせメールをお送りいただきありがとうございます。
          </p>
          <p className="text-base mb-8">
            3〜5日以内に、いただいたメールアドレスにご連絡をさせていただきます。<br/>
            今しばらくお待ちくださいますようよろしくお願い申し上げます。
          </p>
          <p className="text-base mb-8">
            なお、しばらくたっても返信、返答がない場合は、お客様によりご入力いただいたメールアドレスに誤りがある、もしくはシステムエラーが発生している場合がございます。<br/>
          </p>
          <p className="text-base">
            その際は、お手数ですが再度送信いただくか、<br/>
            お電話（xxx-xxxx-xxxx）にてご連絡いただけますと幸いです。。
          </p>
          <Button
            variant="contained"
            className="mt-16 mb-8 mx-auto block"
            color="secondary"
          >
            <Link href={`/`}>
              <a className="block px-8">Top</a>
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};



export default ContactThanks;
