import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getLanguageCode } from "../../store/app/appSelector";
import { availableLanguages } from "../../constants/layoutConstants";
import i18n from 'i18next';
import { changeAppLocale } from "../../store/app/appReducer";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const ButtonLanguage = styled(Button)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'start',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottom: '2px solid ' + theme.palette.divider,
}));

type LanguagePageType = {
};


export const LanguagePage: React.FC<LanguagePageType> = ({ }) => {
    const dispatch: any = useDispatch();

    const currentLanguageCode = useSelector(getLanguageCode);

    const onChangeLanguage = (languageCode: string) => {
        i18n.changeLanguage(languageCode);
        dispatch(changeAppLocale(languageCode));
    };

    console.log(currentLanguageCode, availableLanguages);

    return (
        <Stack p={2}>
            <Typography variant="h5">Choose language</Typography>
            <Stack spacing={2}>
                {
                    availableLanguages.map(item => (
                        <ButtonLanguage key={item.code} onClick={() => onChangeLanguage(item.code)}>
                            <Stack flex={1} direction={'row'} spacing={2} alignItems={'center'}>
                                <Box
                                    component={'img'}
                                    height={16}
                                    width={24}
                                    alt={item.code}
                                    src={item.icon}
                                />
                                <Typography variant="body1">
                                    {item.label}
                                </Typography>
                            </Stack>
                            {currentLanguageCode === item.code
                                ? <RadioButtonCheckedIcon />
                                : <RadioButtonUncheckedIcon />
                            }
                        </ButtonLanguage>
                    ))
                }
            </Stack>
        </Stack>
    );
};