import Image from 'next/image';
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share';

export const items = [
  {
    button: TelegramShareButton,
    text: 'Telegram',
    icon: (
      <Image
        src="/icons/social/telegram.svg"
        alt="Gmail"
        width={50}
        height={50}
      />
    ),
  },
  {
    button: ViberShareButton,
    text: 'Viber',
    icon: (
      <Image src="/icons/social/viber.svg" alt="Gmail" width={50} height={50} />
    ),
  },
  {
    button: FacebookShareButton,
    text: 'Лента новостей',
    icon: (
      <Image
        src="/icons/social/facebook.svg"
        alt="Gmail"
        width={50}
        height={50}
      />
    ),
  },
  {
    button: WhatsappShareButton,
    text: 'Whatsapp',
    icon: (
      <Image
        src="/icons/social/whatsapp.svg"
        alt="Gmail"
        width={50}
        height={50}
      />
    ),
  },
  {
    button: TwitterShareButton,
    text: 'Twitter',
    icon: (
      <Image
        src="/icons/social/twitter.svg"
        alt="Gmail"
        width={50}
        height={50}
      />
    ),
  },
  {
    button: EmailShareButton,
    text: 'Gmail',
    icon: (
      <Image src="/icons/social/gmail.svg" alt="Gmail" width={50} height={50} />
    ),
  },
];
