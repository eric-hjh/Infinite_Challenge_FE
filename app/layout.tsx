import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';

export const metadata: Metadata = {
  title: '한국임상정보',
  description:
    '쉽고 간단하게 국내 모든 임상시험 참여하기. 간암, 대장암, 부인암, 유방암, 위암, 전립선암, 폐암 임상시험을 알아보세요.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
