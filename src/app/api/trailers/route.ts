import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    {
      imgUrl:
        'https://nest-kinomore-server-gnzn.onrender.com/image/efacf0bc-23e1-4694-bdc6-412c67fcabe7.jpg',
      videoUrl:
        'https://nest-kinomore-server-gnzn.onrender.com/video/d07eb57e-38f7-48af-9617-fbfbab23eb0f.mp4',
      title: 'Чёрная Пантера: Ваканда навеки',
      rating: 6.2,
      year: 2022,
      genre: 'Триллеры',
    },
    {
      imgUrl:
        'https://nest-kinomore-server-gnzn.onrender.com/image/07dc5e17-180f-4e20-b06a-5f9c5b465f3d.jpg',
      videoUrl:
        'https://nest-kinomore-server-gnzn.onrender.com/video/a58131da-9aaa-4d8e-9010-b635add07636.mp4',
      title: 'Аватар: Путь воды',
      rating: 7.8,
      year: 2022,
      genre: 'Фантастика',
    },
    {
      imgUrl:
        'https://nest-kinomore-server-gnzn.onrender.com/image/840de864-9493-4bf1-a891-e414ba0d819b.jpg',
      videoUrl:
        'https://nest-kinomore-server-gnzn.onrender.com/video/b7e0d85d-c163-4690-bcfa-090bc80ebd37.mp4',
      title: 'Уэнсдэй',
      rating: 8.0,
      year: 2022,
      genre: 'Фэнтези',
    },
    {
      imgUrl:
        'https://nest-kinomore-server-gnzn.onrender.com/image/9bfdfffe-ca6c-45a7-b537-ee52641d8ed2.jpg',
      videoUrl:
        'https://nest-kinomore-server-gnzn.onrender.com/video/5ac4a5b1-528f-4f4a-940e-b215d6859aaf.mp4',
      title: 'Мир Юрского периода: Господство',
      rating: 5.7,
      year: 2022,
      genre: 'Триллеры',
    },
  ]);
}
