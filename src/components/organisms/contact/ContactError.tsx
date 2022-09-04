import Link from 'next/link'

import Card from '@mui/material/Card'
import { Heading02 } from '../../atoms/index'
import Button from '@mui/material/Button'

const ContactError = () => {
  return (
    <div className="w-full sm:w-2/3 px-4 sm:pl-0 sm:pr-4 py-4 sm:py-0">
      <Card>
        <Heading02 title="送信エラーが発生しました。" />
        <div className="px-4 py-8 sm:p-8">
          <p className="text-base mb-8">この度はお問い合わせメールをお送りいただきありがとうございます。</p>
          <p className="text-base mb-8">誠に申し訳ございません。</p>
          <p className="text-base mb-8">なんらかのシステムエラーが発生している可能性がございます。</p>
          <p className="text-base mb-8">
            お手数をおかけしてしまい申し訳ございませんが、下記メールアドレスに直接ご連絡いただけますと幸いです。。
          </p>
          <p className="text-base">
            <a href="mailto:yuki0wl@gmail.com">yuki0wl@gmail.com</a>
          </p>
          <Button variant="contained" className="mt-16 mb-8 mx-auto block" color="secondary">
            <Link href={`/`}>
              <a className="block px-8">Top</a>
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default ContactError
