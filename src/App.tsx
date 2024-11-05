import Stack from '@mui/material/Stack';
import { AppLayout } from '../src/layout/AppLayout';
import { Initializing } from './modules/Common/Initializing';
import { RedirectObserver } from './modules/Common/RedirectObserver';
import { ScreenLoaderObserver } from './modules/Common/ScreenLoaderObserver';
import { ThemeWrapper } from './modules/UI/ThemeWrapper';
import './App.css';

let tg = window.Telegram.WebApp as any;

export const App = () => {
  return (
    <ThemeWrapper>
      <Stack sx={{
        bgcolor: 'background.default',
        maxWidth: 600,
        minHeight: '100vh',
        // height: tg.viewportStableHeight,
      }}>
        <ScreenLoaderObserver />
        <RedirectObserver />
        <Initializing>
          <AppLayout />
        </Initializing>
      </Stack>
    </ThemeWrapper>
  );
};

