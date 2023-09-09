import {
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
  VKShareButton,
  FacebookShareButton,
  EmailShareButton,
} from 'react-share';
import { Icon } from 'shared/ui';

export const items = [
  {
    button: TelegramShareButton,
    text: 'Telegram',
    icon: <Icon name="telegram" />,
  },
  {
    button: ViberShareButton,
    text: 'Viber',
    icon: <Icon name="viber" />,
  },
  {
    button: FacebookShareButton,
    text: 'Лента новостей',
    icon: <Icon name="facebook" />,
  },
  {
    button: WhatsappShareButton,
    text: 'WhatsApp',
    icon: <Icon name="whatsapp" />,
  },
  {
    button: VKShareButton,
    text: 'ВКонтакте',
    icon: <Icon name="vk" />,
  },
  {
    button: EmailShareButton,
    text: 'Gmail',
    icon: <Icon name="gmail" />,
  },
];
