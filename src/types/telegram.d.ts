interface ShareToStoryParams {
    caption?: string;
    [key: string]: any;
};

type PopupButtonType = {
    id?: string;
    type: string | 'default' | 'ok' | 'close' | 'cancel' | 'destructive';
    text?: string;
}

interface TelegramWebAppThemeParams {
    accent_text_color: string; // Колір акцентного тексту
    bg_color: string; // Колір фону
    bottom_bar_bg_color: string; // Колір фону нижньої панелі
    button_color: string; // Колір кнопки
    button_text_color: string; // Колір тексту на кнопці
    destructive_text_color: string; // Колір тексту для руйнівних дій
    header_bg_color: string; // Колір фону заголовка
    hint_color: string; // Колір підказок
    link_color: string; // Колір посилань
    secondary_bg_color: string; // Вторинний колір фону
    section_bg_color: string; // Колір фону секції
    section_header_text_color: string; // Колір тексту заголовка секції
    section_separator_color: string; // Колір роздільника секції
    subtitle_text_color: string; // Колір підзаголовка
    text_color: string; // Колір тексту
};

interface TelegramWebAppInitDataUnsafe {
    auth_date: string;
    hash: string;
    query_id: string;
    user: {
        allows_write_to_pm: boolean;
        first_name: string;
        id: number;
        language_code: string;
        last_name: string;
        username: string;
    };
};

interface TelegramWebAppUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    photo_url?: string;
};

interface TelegramWebAppChat {
    id: number;
    title: string;
    type: string;
    username?: string;
    photo_url?: string;
};

interface TelegramWebApp {
    initData: string;
    initDataUnsafe: TelegramWebAppInitDataUnsafe;
    version: string;
    platform: string;
    colorScheme: 'light' | 'dark';
    themeParams: TelegramWebAppThemeParams;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    headerColor: string;
    backgroundColor: string;
    bottomBarColor: string;
    BackButton: {
        isVisible: boolean;
        onClick: (callback: Function) => void;
        offClick: (callback: Function) => void;
        show: () => void;
        hide: () => void;
    };
    MainButton: {
        color: string;
        disable: () => void;
        enable: () => void;
        hasShineEffect: boolean;
        hide: () => void;
        hideProgress: () => void;
        isActive: boolean;
        isProgressVisible: boolean;
        isVisible: boolean;
        offClick: (callback: () => void) => void;
        onClick: (callback: () => void) => void;
        setParams: (params: object) => void;
        setText: (text: string) => void;
        show: () => void;
        showProgress: (leaveActive?: boolean) => void;
        text: string;
        textColor: string;
        type: "main";
    };
    SecondaryButton: {
        color: string;
        disable: () => void;
        enable: () => void;
        hasShineEffect: boolean;
        hide: () => void;
        hideProgress: () => void;
        isActive: boolean;
        isProgressVisible: boolean;
        isVisible: boolean;
        offClick: (callback: () => void) => void;
        onClick: (callback: () => void) => void;
        setParams: (params: object) => void;
        setText: (text: string) => void;
        show: () => void;
        showProgress: (leaveActive?: boolean) => void;
        text: string;
        textColor: string;
        type: "secondary";
    };
    SettingsButton: {
        hide: () => void;
        isVisible: boolean;
        offClick: (callback: () => void) => void;
        onClick: (callback: () => void) => void;
        show: () => void;
    };
    HapticFeedback: {
        impactOccurred: (style: 'light' | 'medium' | 'heavy') => void;
        notificationOccurred: (type: 'success' | 'warning' | 'error') => void;
        selectionChanged: () => void;
    };
    CloudStorage: {
        getItem: (key: string, callback: (value: string | null, error?: string) => void) => void;
        getItems: (keys: string[], callback: (data: Record<string, string>, error?: string) => void) => void;
        getKeys: (callback: (keys: string[], error?: string) => void) => void;
        removeItem: (key: string, callback?: (error?: string) => void) => void;
        removeItems: (keys: string[], callback?: (error?: string) => void) => void;
        setItem: (key: string, value: string, callback?: (error?: string) => void) => void;
    };
    BiometricManager: {
        init: (callback?: (error?: string) => void) => void;

        authenticate: (
            params: { reason: string },
            callback: (success: boolean, error?: string) => void
        ) => void;

        biometricType: "fingerprint" | "face" | "unknown";

        deviceId: string;
        isAccessGranted: boolean;
        isAccessRequested: boolean;
        isBiometricAvailable: boolean;
        isBiometricTokenSaved: boolean;
        isInited: boolean;
        openSettings: () => void;
        requestAccess: (
            params: { reason: string },
            callback: (success: boolean, error?: string) => void
        ) => void;
        updateBiometricToken: (
            token: string,
            callback: (success: boolean, error?: string) => void
        ) => void;
    };
    ready: () => void;
    close: () => void;
    expand: () => void;
    closeScanQrPopup: () => void;
    onEvent: (eventType: 'themeChanged' | 'viewportChanged' | 'mainButtonClicked' | 'backButtonClicked', callback: () => void) => void;
    offEvent: (eventType: 'themeChanged' | 'viewportChanged' | 'mainButtonClicked' | 'backButtonClicked', callback: () => void) => void;
    sendData: (data: Object) => void;
    disableClosingConfirmation: () => void;
    disableVerticalSwipes: () => void;
    enableClosingConfirmation: () => void;
    enableVerticalSwipes: () => void;
    invokeCustomMethod: (method: string, params: any, callback: Function) => void;
    isClosingConfirmationEnabled: boolean;
    isExpanded: boolean;
    isVersionAtLeast: () => boolean;
    offEvent(eventType: string, callback: () => void): void;
    onEvent(eventType: string, callback: () => void): void;
    openInvoice(url: string, callback?: (success: boolean) => void): void;
    openLink(url: string, options?: { useInApp: boolean }): void;
    openTelegramLink(url: string): void;
    platform: "tdesktop" | "mobile" | "web";
    readTextFromClipboard: (callback: (text: string) => void) => void;
    requestContact: (callback: (contack: any) => void) => void;
    requestWriteAccess: (callback: (value: any) => void) => void;
    setBackgroundColor: (color: string) => void;
    setBottomBarColor: (color: string) => void;
    setHeaderColor: (color: string) => void;
    shareToStory: (media_url: string, params?: ShareToStoryParams) => void;
    showAlert: (message: string, callback?: () => void) => void;
    showConfirm: (message: string, callback: (isConfirmed: boolean) => void) => void;
    showPopup: (params: { title?: string; message?: string; buttons?: PopupButtonType[];[key: string]: any }, callback: () => void) => void;
    showScanQrPopup: (params: { title?: string; message?: string;[key: string]: any }, callback: (result: { data: string }) => void) => void;
    switchInlineQuery: (query: string, choose_chat_types?: string[]) => void;
    version: string;
    viewportHeight: number;
    viewportStableHeight: number;
};

interface Telegram {
    WebApp: TelegramWebApp;
};

interface Window {
    Telegram: Telegram;
};
