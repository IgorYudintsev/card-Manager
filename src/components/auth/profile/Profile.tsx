import {useForm} from "react-hook-form";
import {useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {ProfileFormValues, profileSchema} from "@/components/auth/profile/utils";
import s from './Profile.module.scss'
import defaultImage from '../../../assets/image/defaultAvatar.png'
import {Typography} from "@/components/ui/typography";
import {Card} from "@/components/ui/card";
import {Edit, Logout} from "@/assets";
import {ControlledTextfield} from "@/components/ui/controlled/controlled-textfield/ControlledTextfield";
import {Button} from "@/components/ui/button";

type ProfileProps = {
    email: string
    nickname: string
}
export const Profile = ({
                            email = 'useremail@mail.com',
                            nickname = 'profile_nickname',
                        }: ProfileProps) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [addPhoto, setAddPhoto] = useState<boolean>(false)

    const {
        control,
        formState: {errors},
        handleSubmit,
    } = useForm<ProfileFormValues>({
        defaultValues: {nickname: nickname},
        resolver: zodResolver(profileSchema),
    })

    const onSubmit = (data: ProfileFormValues) => {
        console.log(data)
        onEditOffHandler()
    }

    const onEditOnHandler = () => {
        setEditMode(true)
    }

    const onEditOffHandler = () => {
        setEditMode(false)
    }

    const onAddPhotoOnHandler = () => {
        setAddPhoto(true)
    }
    return (
        <Card>
            <Typography className={s.profileLabel} variant={'h1'}>
                Personal Information
            </Typography>
            <div className={s.profileBlock}>
                <div className={s.photoWrapper}>
                    {addPhoto
                        ? (
                            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                                <img alt={'user image'} className={s.profileImg} src={defaultImage}/>
                                <input className={s.editNameField} type={'file'}></input>
                                <Button fullWidth>Save Changes</Button>
                            </form>
                        )
                        : (
                            <div>
                                <img alt={'user image'} className={s.profileImg} src={defaultImage}/>
                                {!addPhoto && (
                                    <span className={s.profileEditImgBtn} onClick={onAddPhotoOnHandler}>
                  <Edit/>
                </span>
                                )}
                            </div>
                        )}
                </div>

                {editMode
                    ? (
                        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                            <ControlledTextfield
                                className={s.editNameField}
                                control={control}
                                errorMessage={errors.nickname?.message}
                                label={'Nickname'}
                                name={'nickname'}
                                placeholder={'nickname'}
                            />
                            <Button fullWidth>Save Changes</Button>
                        </form>
                    )
                    : (
                        <div className={s.profileWrapper}>
                            <Typography className={s.profileName} variant={'h2'}>
                                Username
                                <span className={s.profileEditNameBtn} onClick={onEditOnHandler}>
                  <Edit/>
                </span>
                            </Typography>
                            <Typography className={s.userEmail} variant={'body2'}>
                                {email}
                            </Typography>
                            <Button className={s.logoutBtn} variant={'secondary'}>
                                <Logout className={s.logoutIcon}/>
                                Logout
                            </Button>
                        </div>
                    )}
            </div>
        </Card>
    );
};