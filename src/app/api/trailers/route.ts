import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    {
      id: 1199773,
      img: 'https://firebasestorage.googleapis.com/v0/b/cinebuddy.appspot.com/o/%D0%A7%D0%B5%CC%88%D1%80%D0%BD%D0%B0%D1%8F-%D0%9F%D0%B0%D0%BD%D1%82%D0%B5%D1%80%D0%B0-%D0%92%D0%B0%D0%BA%D0%B0%D0%BD%D0%B4%D0%B0-%D0%BD%D0%B0%D0%B2%D0%B5%D0%BA%D0%B8.jpg?alt=media&token=7599e53e-4b4f-4ee8-825e-0b33746fb498',
      trailer:
        'https://firebasestorage.googleapis.com/v0/b/cinebuddy.appspot.com/o/%D0%A7%D0%B5%CC%88%D1%80%D0%BD%D0%B0%D1%8F-%D0%9F%D0%B0%D0%BD%D1%82%D0%B5%D1%80%D0%B0-%D0%92%D0%B0%D0%BA%D0%B0%D0%BD%D0%B4%D0%B0-%D0%BD%D0%B0%D0%B2%D0%B5%D0%BA%D0%B8.mp4?alt=media&token=8d4dde1a-ff65-41e0-be22-01797507c758',
      title: 'Чёрная Пантера: Ваканда навеки',
      rating: 6.2,
      year: 2022,
      genre: 'Триллеры',
    },
    {
      id: 505898,
      img: 'https://firebasestorage.googleapis.com/v0/b/cinebuddy.appspot.com/o/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%9F%D1%83%D1%82%D1%8C-%D0%B2%D0%BE%D0%B4%D1%8B.jpg?alt=media&token=eddd5cf8-c4ee-4133-823a-c3774ee0b456',
      trailer:
        'https://firebasestorage.googleapis.com/v0/b/cinebuddy.appspot.com/o/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%9F%D1%83%D1%82%D1%8C-%D0%B2%D0%BE%D0%B4%D1%8B.mp4?alt=media&token=db07d875-2c2b-41c2-a0b0-8c93cbb1c4f2',
      title: 'Аватар: Путь воды',
      rating: 7.8,
      year: 2022,
      genre: 'Фантастика',
    },
    {
      id: 4365427,
      img: 'https://firebasestorage.googleapis.com/v0/b/cinebuddy.appspot.com/o/%D0%A3%D1%8D%D0%BD%D1%81%D0%B4%D1%8D%D0%B8%CC%86.jpg?alt=media&token=c6db995f-82c0-404a-ab7a-a4e0446e1071',
      trailer:
        'https://firebasestorage.googleapis.com/v0/b/cinebuddy.appspot.com/o/%D0%A3%D1%8D%D0%BD%D1%81%D0%B4%D1%8D%D0%B8%CC%86.mp4?alt=media&token=b86a25ff-f46c-4209-b557-6a98fd8cc3f1',
      title: 'Уэнсдэй',
      rating: 8.0,
      year: 2022,
      genre: 'Фэнтези',
    },
    {
      id: 1115098,
      img: 'https://firebasestorage.googleapis.com/v0/b/cinebuddy.appspot.com/o/%D0%9C%D0%B8%D1%80-%D0%AE%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%B0-%D0%93%D0%BE%D1%81%D0%BF%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE.jpg?alt=media&token=76ff933d-a9bb-480b-bca3-d69caf477adf',
      trailer:
        'https://firebasestorage.googleapis.com/v0/b/cinebuddy.appspot.com/o/%D0%9C%D0%B8%D1%80-%D0%AE%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%B0-%D0%93%D0%BE%D1%81%D0%BF%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE.mp4?alt=media&token=c4b0b57d-0d97-44ef-b2e4-e25bf3f73499',
      title: 'Мир Юрского периода: Господство',
      rating: 5.7,
      year: 2022,
      genre: 'Триллеры',
    },
  ]);
}
