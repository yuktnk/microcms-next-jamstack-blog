import React from "react";
import { Button, Card, TextField } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import { useForm, Controller } from "react-hook-form";
import { NextPage } from "next";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers";
import { Contact, Heading02 } from "../../components/common/index"
import { useRouter } from "next/router";



const ContactForm: NextPage = () => {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("名前は必須項目です"),
    email: Yup.string()
      .email("メールアドレスの形式が間違っています")
      .required("メールアドレスは必須です"),
    body: Yup.string().required("お問い合わせ内容は必須です"),
  });

  const onSubmit = async (contact: Contact): Promise<void> => {

    try {
      fetch("https://yuktnk-blog.microcms.io/api/v1/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "X-WRITE-API-KEY": "1fc621f0-722f-4af0-b9d0-d029e8015cf9"
        },
        body: JSON.stringify(contact)
      })

      void router.push("/contact/success");

    } catch (err) {

      void router.push("/contact/error");
    }
  }

  const { control, handleSubmit, errors } = useForm<Contact>({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className="w-full sm:w-2/3 px-4 sm:pl-0 sm:pr-4 py-4 sm:py-0">
      <Card>
        <Heading02 title="お問い合わせ" />
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="px-4 py-8 sm:p-8">
          <div className="mb-8">
            <Controller
              as={TextField}
              control={control}
              variant="outlined"
              required
              fullWidth
              color="secondary"
              id="name"
              label="お名前"
              name="name"
              autoComplete="name"
              defaultValue=""
              error={!!errors.name?.message}
            />
            {errors.name && <p className="text-errorRed text-xs mt-2">{errors.name.message}</p>}
          </div>

          <div className="mb-8">
            <Controller
              as={TextField}
              control={control}
              variant="outlined"
              required
              fullWidth
              color="secondary"
              id="email"
              label="メールアドレス"
              name="email"
              autoComplete="email"
              defaultValue=""
              error={!!errors.email?.message}
            />
            {errors.email && <p className="text-errorRed text-xs mt-2">{errors.email.message}</p>}
          </div>

          <div className="mb-8">
            <Controller
              as={TextField}
              control={control}
              variant="outlined"
              required
              fullWidth
              color="secondary"
              multiline
              rows={6}
              name="body"
              label="内容"
              id="body"
              autoComplete="body"
              defaultValue=""
              error={!!errors.body?.message}
            />
            {errors.body && <p className="text-errorRed text-xs mt-2">{errors.body.message}</p>}
          </div>
          <Button
            type="submit"
            variant="contained"
            aria-label="送信"
            className="mx-auto block"
          >
            Send<SendIcon className="w-4 ml-2"/>
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;