import Image from 'next/image';
import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share';

import styles from './styles.module.scss';

interface IShareBtnsProps {
  url: string;
}

export const ShareBtns: React.FC<IShareBtnsProps> = ({ url }) => (
  <div className={styles.btns}>
    <TelegramShareButton url={url} className={styles.btn}>
      <Image
        src="/icons/social/telegram.svg"
        alt="Gmail"
        width={50}
        height={50}
        className={styles.icon}
      />
      Telegram
    </TelegramShareButton>
    <ViberShareButton url={url} className={styles.btn}>
      <Image
        src="/icons/social/viber.svg"
        alt="Gmail"
        width={50}
        height={50}
        className={styles.icon}
      />
      Viber
    </ViberShareButton>
    <FacebookShareButton url={url} className={styles.btn}>
      <Image
        src="/icons/social/facebook.svg"
        alt="Gmail"
        width={50}
        height={50}
        className={styles.icon}
      />
      Лента новостей
    </FacebookShareButton>
    <WhatsappShareButton url={url} className={styles.btn}>
      <Image
        src="/icons/social/whatsapp.svg"
        alt="Gmail"
        width={50}
        height={50}
        className={styles.icon}
      />
      Whatsapp
    </WhatsappShareButton>
    <TwitterShareButton url={url} className={styles.btn}>
      <Image
        src="/icons/social/twitter.svg"
        alt="Gmail"
        width={50}
        height={50}
        className={styles.icon}
      />
      Twitter
    </TwitterShareButton>
    <EmailShareButton url={url} className={styles.btn}>
      <Image
        src="/icons/social/gmail.svg"
        alt="Gmail"
        width={50}
        height={50}
        className={styles.icon}
      />
      Gmail
    </EmailShareButton>
  </div>
);
