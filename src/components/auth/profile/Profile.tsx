import {useForm} from "react-hook-form";
import {ChangeEvent, RefObject, useRef, useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {fileSchema, profileFileFormValues, ProfileFormValues, profileSchema} from "@/components/auth/profile/utils";
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
    const [photo, setPhoto] = useState<string>(defaultImage)
    const [fileError, setFileError] = useState<null | string>(null)

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

    const {
        formState: { errors: fileErrors },
        handleSubmit: handleSubmitFileForm,
    } = useForm<profileFileFormValues>({
        resolver: zodResolver(fileSchema),
    })

    const onSubmitFileForm = (data: profileFileFormValues) => {
        console.log(data)
        onEditOffHandler()
    }

    const onEditOnHandler = () => {
        setEditMode(true)
    }

    const onEditOffHandler = () => {
        setEditMode(false)
    }

    const fileInputRef: RefObject<HTMLInputElement> = useRef(null)

    const openFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]

        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile)

            setPhoto(imageUrl)
            console.log('Selected File:', selectedFile)
        }

        const fileError = String(fileErrors.image?.message || null)

        setFileError(fileError)
    }
    return (
        <Card>
            <Typography className={s.profileLabel} variant={'h1'}>
                Personal Information
            </Typography>
            <div className={s.profileBlock}>
                <div className={s.photoWrapper}>
                    {fileError && <p className={s.errorText}>{fileError}</p>}
                    <form className={s.form} onSubmit={handleSubmitFileForm(onSubmitFileForm)}>
                        <input
                            id={'imgupload'}
                            name={'avatar'}
                            onChange={handleFileChange}
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            type={'file'}
                        />

                        <img alt={'user image'} className={s.profileImg} src={photo} />

                        <button className={s.profileEditImgBtn} onClick={openFileInput}>
                            <Edit />
                        </button>
                    </form>
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