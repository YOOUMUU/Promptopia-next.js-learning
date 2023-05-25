import '@styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
};

interface Props {
  children: ReactNode | ReactNode[];
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
