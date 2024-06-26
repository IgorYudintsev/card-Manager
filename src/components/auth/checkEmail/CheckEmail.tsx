import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Typography} from "@/components/ui/typography";
import s from "@/components/auth/checkEmail/CheckEmail.module.scss";
import {Email} from "@/assets/icons/Email";

type Props = {
    email: string
}
export const CheckEmail = ({ email }: Props) => {
    return (
        <Card>
            <Typography className={s.checkEmailLabel} variant={'large'}>
                Check Email?
            </Typography>
            <div className={s.iconWrapper}>
                <Email className={s.icon} />
            </div>
            <Typography as={'p'} className={s.sentEmail} variant={'body2'}>
                We’ve sent an Email with instructions to <br /> {email}
            </Typography>
            <Button className={s.button} fullWidth>
                Back to Sign In
            </Button>
        </Card>
    );
};