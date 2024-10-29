import { Button, Stack } from "@mui/material";

type AllCategoriesPageType = {
};
let tg = window.Telegram.WebApp;

export const AllCategoriesPage: React.FC<AllCategoriesPageType> = ({ }) => {

    const onClick = () => {
        // console.log('click');
        // tg.BackButton.isVisible
        //     ? tg.BackButton.hide()
        //     : tg.BackButton.show();

        // tg.MainButton.isVisible
        //     ? tg.MainButton.hide()
        //     : tg.MainButton.show();

        // tg.MainButton.hasShineEffect = true;
        // tg.MainButton.enable();
        // tg.MainButton.showProgress(true);
        // tg.MainButton.color = '#A020F0';

        // tg.SecondaryButton.isVisible
        //     ? tg.SecondaryButton.hide()
        //     : tg.SecondaryButton.show();

        // tg.SecondaryButton.hasShineEffect = true;
        // tg.SecondaryButton.enable();
        // tg.SecondaryButton.color = '#AF0';

        // tg.SettingsButton.isVisible
        //     ? tg.SettingsButton.show()
        //     : tg.SettingsButton.hide();

        tg.headerColor='#FCDCAB';
        tg.bottomBarColor='#FCDCAB';
        console.log(tg.isVersionAtLeast());
            
        // tg.requestContact((contact)=>console.log(contact));

    };

    const onInform = () => {
        console.log(tg);
        // window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy");
        // window.Telegram.WebApp.HapticFeedback.selectionChanged();

        tg.HapticFeedback.notificationOccurred("success");
    };

    function sendDataToTelegram() {
        // const data = {
        //     userId: 5153831236,
        //     message: 'Привіт! Це тестове повідомлення.',
        //     timestamp: Date.now(),
        // };
    
        // window.Telegram.WebApp.sendData(data);
        // tg.showAlert('dgd',()=>{
        //     console.log('fff')
        // })

        const query = "Пошук товарів"; // Запит для пошуку
        const chooseChatTypes = "bots"; // Типи чатів, у яких можна використовувати інлайн-запити
    
        window.Telegram.WebApp.switchInlineQuery(query, chooseChatTypes);
    }

    return (
        <Stack spacing={2}>
            ffdd
            {/* {JSON.stringify(window.Telegram.WebApp.HapticFeedback.notificationOccurred?61:0)} */}
            <Button variant="contained" color="primary"
                onClick={onClick}
            >
                Button
            </Button>

            <Button variant="contained" color="primary"
                onClick={onInform}
            >
                inform
            </Button>

            <Button variant="contained" color="primary"
                onClick={sendDataToTelegram}
            >
                send Data
            </Button>
        </Stack>
    );
};